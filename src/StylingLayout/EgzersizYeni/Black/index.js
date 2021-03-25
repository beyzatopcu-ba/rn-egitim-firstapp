import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import styles from './styles';

const Black = () => {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>BİR YAZI</Text>
            </View>
        </SafeAreaView>
    );
}

export default Black;