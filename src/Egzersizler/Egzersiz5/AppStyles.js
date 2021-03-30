import { StyleSheet } from 'react-native';
import { width } from './Constants/Metrics';

let styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#DE6F35",
    },
    container: {
        flex: 1,
        paddingHorizontal: width * 0.05,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: width * 0.1,
        alignItems: 'center',
    },
});

export default styles;