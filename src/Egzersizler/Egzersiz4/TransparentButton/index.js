import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const TransparentButton = props => {
    return (
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.text}>TransparentButton</Text>
        </TouchableOpacity>
    );
}

export default TransparentButton;