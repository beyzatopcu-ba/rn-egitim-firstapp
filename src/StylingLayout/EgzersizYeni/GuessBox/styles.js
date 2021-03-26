import { StyleSheet } from 'react-native';
import { width } from '../Constants/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#33312E',
        flexDirection: 'row',
        padding: width * 0.02,
        alignItems: 'center',
    },
    stonesContainer: {
        flexDirection: 'row',
        flex: 0.65,
        justifyContent: 'space-around',
        paddingRight: width * 0.02,
    },
    cluesContainer: {
        flexDirection: 'row',
        flex: 0.35,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: "#86837E",
        borderWidth: 1,
        borderRadius: 10,
        height: width * 0.1,
        paddingHorizontal: width * 0.01,
    }
});

export default styles;