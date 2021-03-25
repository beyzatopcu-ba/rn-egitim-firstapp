import { StyleSheet, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get("window");
const height = windowDimensions.height;
const width = windowDimensions.width;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 0.1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'orange',
        fontSize: width * 0.1,
    }
});

export default styles;