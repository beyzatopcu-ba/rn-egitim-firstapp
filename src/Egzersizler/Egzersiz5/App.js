import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, Platform } from 'react-native';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

import styles from './AppStyles';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: 'askjd',
            itemList: [],
        };
    }

    _onChangeText_Item = text => {
        console.log('aksjdk')
        this.setState({
            text,
        })
    }

    _onPress_Add = () => {
        const item = this.state.text;
        let itemListCopy = [...this.state.itemList];
        itemListCopy.push(item);

        this.setState({
            itemList: itemListCopy,
        });
    }

    renderItemList = () => {
        const itemComponentList = this.state.itemList.map((item, index) => {
            return (
                <Text key={index}>{item}</Text>
            )
        })

        return itemComponentList;
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <CustomInput onChangeText={this._onChangeText_Item}/>
                <CustomButton onPress={this._onPress_Add}/>
                <Text>Alınacaklar</Text>
                <ScrollView style={{flexGrow: 1}}>
                    {this.renderItemList()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default App;