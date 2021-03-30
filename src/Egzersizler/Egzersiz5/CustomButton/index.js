import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const WhiteButton = props => {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.touchable}>
            <Text style={styles.text}>EKLE</Text>
        </TouchableOpacity>
    );
}

export default WhiteButton;