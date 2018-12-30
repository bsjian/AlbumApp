// import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// react: how a component should behave
// react-native: portal to a moble divice

//create a componnet
const App = () => 
		(<Text> Some Text xixi </Text>);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
