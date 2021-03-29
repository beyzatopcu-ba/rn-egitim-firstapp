import React from 'react';
import { View, Text, Image, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

import styles from './AppStyles';
import CustomInput from './CustomInput';
import RememberMe from './RememberMe';
import TransparentButton from './TransparentButton';
import WhiteButton from './WhiteButton';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            passwordText: '',
            emailText: '',
            rememberMe: false,
        };

        console.log('parent constructor');
    }

    componentDidMount() {
        console.log('parent componentDidMount')
        console.log('parent props', this.props)
        console.log('parent state', this.state)
        // Api istekleri, cihazdan data okuma
    }

    componentDidUpdate(prevProps, prevState) {
        debugger;
        console.log('parent componentDidUpdate');
        console.log('parent previous state', prevState);
        console.log('parent current state', this.state);
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
    }

    _onPress_LoginButton = () => {
        /*
        console.log('login butona basıldı')
        console.log('email', this.state.emailText);
        console.log('password', this.state.passwordText);
        console.log('rememberMe', this.state.rememberMe)
        */
    }

    _onPress_RememberMe = () => {
        this.setState({
            rememberMe: this.state.rememberMe ? false : true,
        })
    }

    render() {
        console.log('parent render');
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
                        <RememberMe 
                            onPress={this._onPress_RememberMe}
                            isSelected={this.state.rememberMe}
                        />
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