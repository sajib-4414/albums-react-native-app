/** @format */
//Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//Create a component
/*
A component is a javascript function which returns some amount of JSX
 */
const App = () => (
      <Header />
 );


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
