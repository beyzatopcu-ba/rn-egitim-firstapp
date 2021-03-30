import { StyleSheet } from 'react-native';

import { width } from '../Constants/Metrics';

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: width * 0.12,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: width * 0.05,
        justifyContent: 'center',
        marginVertical: width * 0.015,
    },
    textInput: {
        color: 'white',
        fontSize: width * 0.04,
    }
});