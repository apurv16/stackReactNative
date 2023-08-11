import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {stack} from '../constants/commonStrings';
import Node from './Node';
import ReactScreen from './React';
import ReactNative from './ReactNative';
const Tab = createBottomTabNavigator();
const Dashboard = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <View style={[styles.tabBarStyle]}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={stack.REACT}>
          <Tab.Screen name={stack.REACT} component={ReactScreen} />
          <Tab.Screen name={stack.REACTNATIVE} component={ReactNative} />
          <Tab.Screen name={stack.NODE} component={Node} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  tabBarStyle: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
