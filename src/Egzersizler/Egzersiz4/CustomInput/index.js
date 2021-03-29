import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

const CustomInput = props => {

    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize={props.autoCapitalize}
                secureTextEntry={props.secureTextEntry}
                style={styles.textInput}
                placeholder={props.placeholder}
                placeholderTextColor={'rgba(255,255,255,0.6)'}
                onChangeText={props.onChangeText} />
        </View>
    );
}

export default CustomInput;