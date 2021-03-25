/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ShowAlert = props => {

    const onPress_ShowAlert = () => {
        alert(props.gosterilecekMetin);
    }

    return (
        <TouchableOpacity onPress={onPress_ShowAlert}>
            <Text>Alert göster</Text>
        </TouchableOpacity>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gosterilecekMetin: "Propstan geldim",
        }
    }

    onPress_ChangeMessage = () => {
        this.setState({
            gosterilecekMetin: "Parent'ın stateinde değiştim de geldim"
        })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ShowAlert gosterilecekMetin={this.state.gosterilecekMetin}/>
                <TouchableOpacity onPress={this.onPress_ChangeMessage}>
                    <Text>Mesajı değiştir</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default App;
