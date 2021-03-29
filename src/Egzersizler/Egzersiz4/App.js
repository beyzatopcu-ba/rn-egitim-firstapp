import React from 'react';
import { View, Text, Image, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

import styles from './AppStyles';
import CustomInput from './CustomInput';
import TransparentButton from './TransparentButton';
import WhiteButton from './WhiteButton';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            passwordText: '',
            emailText: '',
        };
    }
    
    _onChangeText_Email = text => {
        this.setState({
            emailText: text,
        })
    }

    _onChangeText_Password = text => {
        this.setState({
            passwordText: text,
        })
    }

    _dummyFunc = data => {
        console.log('dummy funct running',data);
    }

    _onPress_LoginButton = () => {
        console.log('login butona basıldı')
        console.log('email', this.state.emailText);
        console.log('password', this.state.passwordText);
    }

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
                            <CustomInput 
                                autoCapitalize={'none'}
                                secureTextEntry={false}
                                placeholder="E-mail"
                                onChangeText={this._onChangeText_Email}
                                dummyFunc={this._dummyFunc} />
                            <CustomInput 
                                autoCapitalize={'none'}
                                secureTextEntry={true}
                                placeholder="Password"
                                onChangeText={this._onChangeText_Password}
                                dummyFunc={this._dummyFunc} />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <WhiteButton 
                                text="GİRİŞ YAP"
                                onPress={this._onPress_LoginButton} />
                            <TransparentButton 
                                text="Kayıt Ol" 
                                onPress={() => {}}/>
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