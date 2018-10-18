//Import libraries for making a component
import React from 'react';
import { Text ,View } from 'react-native';

//Make a component

const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
    <Text style={textStyle}>Albums!</Text>
    </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#FF0000',
        alignItems: 'center'
    }
};


//Make the component available to the other parts of the app
export default Header;
