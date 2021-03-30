import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, Platform, TouchableOpacity } from 'react-native';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

import styles from './AppStyles';
import Item from './Item';

const App = () => {

    const [text, setText] = useState('');
    const [itemList, setItemList] = useState([]);
    const [editMode, setEditMode] = useState(false);

    const _onChangeText_Item = text => {
        console.log('aksjdk')
        setText(text);
    }

    const _onPress_Add = () => {
        if (text.trim() === '') {
            return;
        }
        let itemListCopy = [...itemList];
        itemListCopy.push(text);

        setItemList(itemListCopy);
    }

    const _onPress_Edit = () => {
        setEditMode(!editMode);
    }

    const _onPress_Delete = (index) => {
        let itemListCopy = [...itemList];
        itemListCopy.splice(index, 1);

        setItemList(itemListCopy);
    }

    const renderItemList = () => {
        const itemComponentList = itemList.map((item, index) => {
            return (
                <Item
                    key={index}
                    editMode={editMode}
                    item={item}
                    onPress_Delete={() => _onPress_Delete(index)} />
            )
        })

        return itemComponentList;
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text>ALIŞVERİŞ LİSTESİ</Text>
                    <TouchableOpacity onPress={_onPress_Edit}>
                        <Text>{editMode ? 'Tamam': 'Düzenle'}</Text>
                    </TouchableOpacity>
                </View>
                <CustomInput onChangeText={_onChangeText_Item} />
                <CustomButton onPress={_onPress_Add} />
                <ScrollView style={{ flexGrow: 1, marginTop: 50 }}>
                    {renderItemList()}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default App;