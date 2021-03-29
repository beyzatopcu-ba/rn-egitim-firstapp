import { StyleSheet } from 'react-native';
import { width } from '../Constants/Metrics';

export default StyleSheet.create({
    touchable: {
        height: width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: width * 0.035,
        fontWeight: 'bold',
    },
});