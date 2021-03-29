import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

const CustomInput = props => {
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.textInput}
            placeholder={"placeholder"}
            placeholderTextColor={'rgba(255,255,255,0.6)'} />
        </View>
    );
}

export default CustomInput;