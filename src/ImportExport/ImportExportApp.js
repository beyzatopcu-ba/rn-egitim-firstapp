import React from 'react';
import {View, Text} from 'react-native';

import DefaultExport, { variableToExport as varWithNewName, CompToExport, sum } from './ImportExportExample';
// import DefaultExport from './ImportExportExample';
// import { CompToExport } from './ImportExportExample';

class App extends React.Component {

    render() {
        let sumOfOneAndTwo = sum(1,2);
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{"Imported: " + varWithNewName}</Text>
                <Text>{sumOfOneAndTwo}</Text>
                <Text>{sum(3,5)}</Text>
                <CompToExport />
                <DefaultExport />
            </View>
        );
    }
}

export default App;