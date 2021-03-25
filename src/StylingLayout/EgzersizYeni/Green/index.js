import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const Green = () => {
    return (
        <View style={styles.container}>
            <View style={styles.getStoneStyle("orange")}/>
            <View style={styles.getStoneStyle("lightpurple")}/>
            <View style={styles.getStoneStyle("lightgreen")}/>
            <View style={styles.getStoneStyle("blue")}/>
            <View style={styles.getStoneStyle("pink")}/>
            <View style={styles.getStoneStyle("yellow")}/>
        </View>
    );
}

export default Green;