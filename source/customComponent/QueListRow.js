import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {imagePath} from '../utility/imagePath';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../utility/ResponsiveScreen';
import withPreventDoubleClick from '../utility/withPreventDoubleClick';
const TouchableOpacity = withPreventDoubleClick();
const QueListRow = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onClick();
      }}
      style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.Lable16}>{props.value}</Text>
      </View>

      <Image style={styles.arrowIcon} source={imagePath.ic_right_arrow} />
    </TouchableOpacity>
  );
};

export default QueListRow;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: hp(2),
  },

  Lable16: {
    fontSize: wp(4),
    color: 'black',
  },
  arrowIcon: {
    height: hp(2),
    width: wp(3),
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});
