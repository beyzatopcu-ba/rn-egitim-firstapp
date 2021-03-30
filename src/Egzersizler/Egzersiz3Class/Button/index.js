import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Styling
import styles from './styles';

class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity
                disabled={this.props.isButtonDisabled}
                style={[
                    styles.container,
                    this.props.disabled ? { backgroundColor: 'grey' } : null
                ]}
                onPress={this.props.onPress}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;