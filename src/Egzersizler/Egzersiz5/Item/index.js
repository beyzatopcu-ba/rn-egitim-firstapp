import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const Item = props => {

    const deleteButton = props.editMode ?
        (
            <TouchableOpacity onPress={props.onPress_Delete}>
                <Text>Sil</Text>
            </TouchableOpacity>
        )
        :
        null;

    return (
        <View style={styles.itemContainer}>
            <Text>{props.item}</Text>
            {deleteButton}
        </View>
    );
}

export default Item;