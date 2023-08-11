import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {stack} from '../constants/commonStrings';
import {imagePath} from '../utility/imagePath';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../utility/ResponsiveScreen';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: stack.DASHBOARD}],
      });
    }, 2000);
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image style={styles.logoIcon} source={imagePath.ic_logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logoIcon: {
    height: hp(10),
    width: wp(15),
    resizeMode: 'contain',
  },
});
