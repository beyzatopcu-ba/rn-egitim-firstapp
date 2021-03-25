import React from 'react';
import { View, Text } from 'react-native';

// Styling
import styles from './AppStyles';

class App extends React.Component {
    render() {
        return (
            // inline styling
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.boxInner1}>
                        <Text>Box 1</Text>
                    </View>
                    <View style={styles.boxInner2}>
                        <Text>Box 2</Text>
                    </View>
                    <View style={styles.boxInner3}>
                        <Text>Box 3</Text>
                    </View>
                    <View style={styles.boxInner4}>
                        <Text>Box 4</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default App;