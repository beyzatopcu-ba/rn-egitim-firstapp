import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

const CustomInput = props => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput} 
                onChangeText={props.onChangeText}/>
        </View>
    );
}

export default CustomInput;