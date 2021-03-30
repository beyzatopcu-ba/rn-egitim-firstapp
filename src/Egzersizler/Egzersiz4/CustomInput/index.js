import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

const CustomInput = props => {

    const [text, setText] = useState('');

    const _onChangeText = textEntered => {
        if (textEntered.length > text.length + 1) {
            return;
        }

        setText(textEntered);
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                autoCapitalize={props.autoCapitalize}
                secureTextEntry={props.secureTextEntry}
                style={styles.textInput}
                placeholder={props.placeholder}
                placeholderTextColor={'rgba(255,255,255,0.6)'}
                onChangeText={_onChangeText} />
        </View>
    );
}

export default CustomInput;