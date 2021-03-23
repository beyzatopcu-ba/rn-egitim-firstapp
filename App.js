/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const BoldText = props => {
  let text = props.text;
  return (
    <Text style={{fontWeight: 'bold'}}>{text}</Text>
  )
}

const MyTextComponent = props => {
  return (
    <Text style={{color: 'green'}}>{props.text}</Text>
  )
}

const BoldOrRedText = props => {
  let isBold = props.isBold;
  // isBold true ise, bold Text, false ise red Text döndürür.
  let text = props.text;
  return (
    <Text style={{
      color: isBold ? 'black' : 'red',
      fontWeight: isBold ? 'bold' : null,
    }}>{text}</Text>
  )
}

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      textColor: 'blue',
    }
  }

  onPress_ChangeColorButton = () => {
    console.log('butona basıldı')
    
    this.setState({
      textColor: 'black',
    })
  }

  render() {
    console.log('rendering', this.props);
    return (
      <TouchableOpacity onPress={this.onPress_ChangeColorButton}>
        <Text style={{color: this.state.textColor}}>asdf</Text>
      </TouchableOpacity>
    )
  }
}

const App = () => {
  console.log('git için değişiklik')
  return (
    <>
      <MyTextComponent text={"İkinci component'imi yazdım"}></MyTextComponent>
      <MyTextComponent text={"Component'leri tekrar kullanabilirim"}></MyTextComponent>
      <BoldText text={"Kalın yazı"}></BoldText>
      <BoldOrRedText text={"Kalın"} isBold={true}></BoldOrRedText>
      <BoldOrRedText text={"Kırmızı"} isBold={false}></BoldOrRedText>
      <MyButton text={"Buton"}></MyButton>
    </>
  );
}

export default App;
