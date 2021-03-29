import { StyleSheet } from 'react-native';
import { width } from './Constants/Metrics';

let styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#DE6F35",
    },
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: width * 0.05,
    },
    logoContainer: {
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'center',
    },
    logoImage: {
        width: undefined,
        height: '80%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    inputsContainer: {
        marginBottom: width * 0.1,
    },
    buttonsContainer: {
        marginBottom: width * 0.1,
    },
    appNameContainer: {
        paddingVertical: width * 0.05,
        alignItems: 'center',
    },
    appNameText: {
        color: 'white',
        fontSize: width * 0.056,
        fontWeight: 'bold',
    },
});

export default styles;