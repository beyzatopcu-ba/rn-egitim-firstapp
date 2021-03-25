import { StyleSheet } from 'react-native';
import { width } from '../Constants/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        height: width * 0.17,
        // flexGrow: 0.1,
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    stone: {
        width: width * 0.1,
        height: width * 0.1,
        backgroundColor: 'pink',
        borderRadius: 1000,
    },
});

const getStoneStyle = (backgroundColor) => {
    return [
        styles.stone,
        {backgroundColor: backgroundColor},
    ];
}

export default {
    ...styles,
    getStoneStyle,
};