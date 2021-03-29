import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class RememberMe extends React.Component {

    constructor(props) {
        super(props);

        console.log('child constructor')
    }

    componentDidMount() {
        console.log('child componentDidMount')
        console.log('child props', this.props);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('child componentDidUpdate');
        console.log('child prevProps', prevProps);
        console.log('child current props', this.props);
    }

    render() {
        console.log('child render')
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={{color: this.props.isSelected ? 'blue': 'grey'}}>Beni Hatırla</Text>
            </TouchableOpacity>
        );
    }
}

export default RememberMe;