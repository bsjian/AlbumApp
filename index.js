// import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// react: how a component should behave
// react-native: portal to a moble divice

//create a componnet
const App = () => (

<View style={{ flex: 1 }}> 
	<Header headerText={'Albums!'} headText={'Albums'} />
	<AlbumList />
</View>


);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
