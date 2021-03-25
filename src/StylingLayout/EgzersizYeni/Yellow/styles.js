import { StyleSheet } from 'react-native';
import { width } from '../Constants/Metrics';

const styles = StyleSheet.create({
    safeAreaContainer: {
        backgroundColor: 'orange',
    },
    container: {
        alignItems: 'center',
        padding: width * 0.02,
    },
    text: {
        color: 'black',
        fontSize: width * 0.1,
    },
});

export default styles;