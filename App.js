import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  DeviceEventEmitter,
  Alert,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stack} from './source/constants/commonStrings';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Splash from './source/Screens/Splash';
import Dashboard from './source/Screens/Dashboard';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={stack.ROOT}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name={stack.ROOT} component={Splash} />
            <Stack.Screen name={stack.DASHBOARD} component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
