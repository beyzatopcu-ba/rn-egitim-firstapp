import React from 'react';
import {View, SafeAreaView} from 'react-native';

// Components
import Black from './Black';
import Gray from './Gray';
import Green from './Green';
import Yellow from './Yellow';

// styling
import styles from './AppStyles';

const App = () => {
    return (
        <View style={styles.container}>
            <Black />
            <Gray />
            <Green />
            <Yellow />
        </View>
    );
}

export default App;