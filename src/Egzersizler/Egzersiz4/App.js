import React from 'react';
import { View, Text, Image, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

import styles from './AppStyles';
import CustomInput from './CustomInput';
import TransparentButton from './TransparentButton';
import WhiteButton from './WhiteButton';

class App extends React.Component {
    

    render() {
        const keyboardAvoidingBehavior = Platform.OS === 'ios' ? 'padding': null;

        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView 
                    style={styles.keyboardAvoiding}
                    behavior={keyboardAvoidingBehavior}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logoImage}
                                source={require('./Assets/logo.png')} />
                        </View>
                        <View style={styles.inputsContainer}>
                            <CustomInput />
                            <CustomInput />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <WhiteButton />
                            <TransparentButton />
                        </View>
                        <View style={styles.appNameContainer}>
                            <Text style={styles.appNameText}>MEKAN</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

export default App;