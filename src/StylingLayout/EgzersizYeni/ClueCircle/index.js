import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const ClueCircle = props => {

    return (
        <View style={[styles.container, {backgroundColor: props.color}]}/>
    );
}

export default ClueCircle;