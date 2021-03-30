import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    circleContainer: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flex: 0.4,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

export default styles;