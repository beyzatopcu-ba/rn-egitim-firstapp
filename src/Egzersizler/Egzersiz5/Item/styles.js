import { StyleSheet } from 'react-native';
import { width } from '../Constants/Metrics';

export default StyleSheet.create({
    
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: width * 0.07,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingHorizontal: width * 0.05,
        marginBottom: width * 0.02,
        borderRadius: 10,

    }
});