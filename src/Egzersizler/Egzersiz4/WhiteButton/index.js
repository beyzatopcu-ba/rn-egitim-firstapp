import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const WhiteButton = props => {

    return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default WhiteButton;