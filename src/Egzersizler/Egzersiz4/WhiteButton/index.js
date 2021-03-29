import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const WhiteButton = props => {
    return (
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.text}>WhiteButton</Text>
        </TouchableOpacity>
    );
}

export default WhiteButton;