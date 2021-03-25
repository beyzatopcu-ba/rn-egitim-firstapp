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
      metin: 'Buraya dokun',
    }
  }

  onPress_ChangeTextButton = () => {
    this.setState({
      metin: 'Dokundun',
    })
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity onPress={this.onPress_ChangeTextButton}>
          <Text>{this.state.metin}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
