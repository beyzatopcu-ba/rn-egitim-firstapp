import React from 'react';
import {View} from 'react-native';

import GuessBox from '../GuessBox';

import styles from './styles';

const Gray = () => {
    return (
        <View style={styles.container}>
            <GuessBox />
        </View>
    );
}

export default Gray;