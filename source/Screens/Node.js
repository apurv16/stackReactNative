import {FlatList, Linking, View} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import Loader from '../customComponent/Loader';
import QueListRow from '../customComponent/QueListRow';
import Axios from '../network/Axios';
import {apiName} from '../network/serverConfig';
const Node = () => {
  const [reactData, setReactData] = useState([]);
  const [isScreenLoading, setIsScreenLoading] = useState(true);
  const [page, setPage] = useState(1);
  useFocusEffect(
    React.useCallback(() => {
      requestGetData();
    }, [page]),
  );
  async function requestGetData() {
    setIsScreenLoading(true);
    let data = `?page=${page}&pagesize=10&order=desc&sort=hot&tagged=NodeJs&filter=default&site=stackoverflow`;
    console.log('REQ_getReactQ', data);
    return Axios.request('GET', apiName.getQuestions + data)
      .then(res => {
        if (res.status == 200) {
          console.log('RES_getReactQ');
          setReactData(prevData => [...prevData, ...res.data.items]);
          setIsScreenLoading(false);
        } else {
          setIsScreenLoading(false);
        }
      })
      .catch(err => {
        setIsScreenLoading(false);
        console.log('RES_getReactQ_err', err);
      });
  }
  return (
    <View>
      {randerDialog()}
      <FlatList
        data={reactData}
        renderItem={({item, index}) => (
          <QueListRow
            value={item.title}
            onClick={() => {
              console.log('123123 ', item);
              Linking.openURL(item.link);
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          if (!isScreenLoading) {
            setPage(prevPage => prevPage + 1);
          }
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );

  function randerDialog() {
    return (
      <View>
        <Loader isVisible={isScreenLoading} />
      </View>
    );
  }
};

export default Node;
