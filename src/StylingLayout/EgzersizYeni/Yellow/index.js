import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './styles';

const Yellow = () => {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>BİR YAZI</Text>
            </View>
        </SafeAreaView>
    );
}

export default Yellow;