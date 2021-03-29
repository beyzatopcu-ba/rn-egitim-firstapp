import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const TransparentButton = props => {
    return (
        <TouchableOpacity style={styles.touchable}>
            <Text styles={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default TransparentButton;