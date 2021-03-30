import React, { useState } from 'react';
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

const AppWithHooks = () => {

    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const onPress_Previous = () => {
        // eğer ilk renkteyse hiçbir şey yapılmasın
        if (currentColorIndex === 0) {
            return;
        }

        setCurrentColorIndex(currentColorIndex - 1);
    }

    const onPress_Next = () => {
        // eğer son renkteyse hiçbirşey yapılmasın
        if (currentColorIndex === colors.length - 1) {
            return;
        }

        setCurrentColorIndex(currentColorIndex + 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <Circle color={colors[currentColorIndex]} />
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    isButtonDisabled={currentColorIndex === 0}
                    text="Geri"
                    onPress={onPress_Previous} />
                <Button
                    isButtonDisabled={currentColorIndex === colors.length - 1}
                    text="İleri"
                    onPress={onPress_Next} />
            </View>
        </View>
    );
}

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

export default AppWithHooks;



///// ARRAY DESTRUCTURING
/*
const arr = [
    'abc',
    5,
    true,
];

const birinciEleman = arr[0];
const ikinciEleman = arr[1];

const [ birinciElemanDestr, ikinciElemanDestr ] = arr;
console.log(birinciElemanDestr)
*/