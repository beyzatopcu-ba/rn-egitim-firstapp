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

class Text1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontWeight: '300',
        };
    }

    onPress_MakeBoldButton = () => {
        this.setState({
            fontWeight: '900',
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress_MakeBoldButton}>
                <Text style={{fontWeight: this.state.fontWeight}}>Bu yazıyı kalınlaştır</Text>
            </TouchableOpacity>
        );
    }
}

class Text2 extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <Text>Bu yazıyı mavi yap</Text>
            </TouchableOpacity>
        );
    }
}

class Text3 extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <Text>Bu yazıyı boyutunu büyüt</Text>
            </TouchableOpacity>
        );
    }
}

class App extends React.Component {

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text1 />
        <Text2 />
        <Text3 />
      </View>
    );
  }
}

export default App;
