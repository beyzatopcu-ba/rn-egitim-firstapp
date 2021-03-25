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

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fontWeight: '300',
            color: 'black',
            fontSize: 15,
        };
    }

    onPress_ChangeWeight = () => {
        if (this.state.fontWeight === '300') {
            this.setState({
                fontWeight: '900',
            })
        }
        else {
            this.setState({
                fontWeight: '300',
            })
        }
    }

    onPress_ChangeColor = () => {
        this.setState({
            color: this.state.color === 'black' ? 'blue' : 'black',
        })
    }

    onPress_ChangeSize = () => {
        this.setState({
            fontSize: this.state.fontSize === 15 ? 30 : 15,
        })
    }

    render() {
        let textStyle = {
            fontWeight: this.state.fontWeight,
            color: this.state.color,
            fontSize: this.state.fontSize,
        };

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.onPress_ChangeWeight}>
                    <Text style={textStyle}>Tüm yazıları kalınlaştır</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress_ChangeColor}>
                    <Text style={textStyle}>Tüm yazıları mavi yap</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress_ChangeSize}>
                    <Text style={textStyle}>Tüm yazıların boyutunu büyüt</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default App;
