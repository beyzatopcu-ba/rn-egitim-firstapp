import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './AppStyles';
import CustomInput from './CustomInput';
import TransparentButton from './TransparentButton';
import WhiteButton from './WhiteButton';

class App extends React.Component {
    

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logoImage}
                        source={require('./Assets/logo.png')} />
                </View>
                <View style={styles.inputsContainer}>
                    <CustomInput />
                    <CustomInput />
                </View>
                <View style={styles.buttonsContainer}>
                    <WhiteButton />
                    <TransparentButton />
                </View>
                <View style={styles.appNameContainer}>
                    <Text style={styles.appNameText}>MEKAN</Text>
                </View>
            </View>
        );
    }
}

export default App;