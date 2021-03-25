import { StyleSheet, Dimensions } from 'react-native';
import { width } from '../Constants/Metrics';

const styles = StyleSheet.create({
    safeAreaContainer: {
        backgroundColor: 'black',
    },
    container: {
        alignItems: 'center',
        padding: width * 0.02,
    },
    text: {
        color: 'orange',
        fontSize: width * 0.1,
    }
});

export default styles;