import React, {useEffect, useState} from 'react';
import {Animated, Easing, Modal, StyleSheet, View} from 'react-native';

import {imagePath} from '../utility/imagePath';
const Loader = ({isVisible}) => {
  const [rotateValueHolder, setRotateValueHolder] = useState(
    new Animated.Value(0),
  );

  function startImageRotateFunction() {
    Animated.loop(
      Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }

  useEffect(() => {
    startImageRotateFunction();
  });

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <Animated.Image
          source={imagePath.ic_loading}
          style={{
            height: 34,
            width: 34,
            transform: [
              {
                rotate: rotateValueHolder.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
          resizeMode={'contain'}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loader;
