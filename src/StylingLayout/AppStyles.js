import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 50,
    },
    text: {
        color: 'blue',
    },
    box: {
        flex: 1,
        backgroundColor: 'green',
        margin: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-evenly',
        alignItems: 'flex-end',
    },
    boxInner1: {
        backgroundColor: 'white',
    },
    boxInner2: {
        backgroundColor: 'purple',
    },
    boxInner3: {
        backgroundColor: 'red',
    },
    boxInner4: {
        backgroundColor: 'blue',
    },
});

export default styles;