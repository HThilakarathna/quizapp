import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import result from '../screens/result';

const Stack = createNativeStackNavigator();

function  MyStack() {
  return (
    
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Quiz" component={Quiz}/>
      <Stack.Screen name="result" component={result}/>
      </Stack.Navigator>
  );
}
export default MyStack;