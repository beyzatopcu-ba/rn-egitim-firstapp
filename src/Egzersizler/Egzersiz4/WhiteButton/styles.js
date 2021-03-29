import { StyleSheet } from 'react-native';
import { width } from '../Constants/Metrics';

export default StyleSheet.create({
    touchable: {
        backgroundColor: 'white',
        height: width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        fontSize: width * 0.04,
        fontWeight: 'bold',
    },
});