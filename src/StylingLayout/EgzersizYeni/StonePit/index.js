import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';

const StonePit = props => {
    const stone = props.stone;
    let backgroundColor;
    if (!stone) {
        backgroundColor = "#86837E";
    }
    else {
        backgroundColor = stone.color;
    };

    return (
        <TouchableOpacity style={[
            styles.stoneTouchable, 
            {backgroundColor: backgroundColor}
        ]}/>
    );
}

export default StonePit;