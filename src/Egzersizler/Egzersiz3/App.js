import React from 'react';
import { View, Text } from 'react-native';

// Styling
import styles from './AppStyles';
import Button from './Button';
import Circle from './Circle';

const colors = [
    "pink",
    "red",
    "blue",
    "green",
]

class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            currentColorIndex: 0,
        }
    }

    onPress_Previous = () => {
        let currentColorIndex = this.state.currentColorIndex;

        if (currentColorIndex === 0) {
            return;
        }

        currentColorIndex--;
        this.setState({
            currentColorIndex: currentColorIndex,
        })
    }

    onPress_Next = () => {
        let currentColorIndex = this.state.currentColorIndex;

        if (currentColorIndex === colors.length - 1) {
            return;
        }
        
        currentColorIndex++;
        this.setState({
            currentColorIndex: currentColorIndex,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circleContainer}>
                    <Circle color={colors[this.state.currentColorIndex]} />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        isButtonDisabled={this.state.currentColorIndex === 0}
                        text="Geri"
                        onPress={this.onPress_Previous} />
                    <Button
                        isButtonDisabled={this.state.currentColorIndex === colors.length - 1}
                        text="İleri"
                        onPress={this.onPress_Next} />
                </View>
            </View>
        );
    }
}

export default App;