/** @format */
//Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a component
/*
A component is a javascript function which returns some amount of JSX
 */
const App = () => (
      <Text>Some Text</Text>
 );


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
