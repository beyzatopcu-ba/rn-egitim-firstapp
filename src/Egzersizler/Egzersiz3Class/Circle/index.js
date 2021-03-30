import React from 'react';
import { View, Text } from 'react-native';

// Styling
import styles from './styles';

const Circle = props => {

    let color = props.color;

    return (
        <View style={[styles.container, {backgroundColor: color}]}>
        </View>
    );
}

export default Circle;