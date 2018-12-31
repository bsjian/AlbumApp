// import libs for making component

import React from 'react';
import { Text, View } from 'react-native';
//make a component

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>

	);
};

const styles = {
	textStyle: {
		fontSize: 20,
	},
	viewStyle: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
		height: 60,
		shadowColor: '#000',
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
	}
};

//make is available to other parts of the app
export default Header;

