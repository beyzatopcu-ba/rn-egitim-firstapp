import React from 'react';
import {Text} from 'react-native';

let exportEdilmeyenDegisken = 5;

export let variableToExport = 123;

export const CompToExport = ()=> {
    return (
        <Text>Export edildim.</Text>
    )
}

export const sum = (a,b) => {
    return a + b;
};

const CompToExportAsDefault = () => {
    return (
        <Text>Varsayılan Exportum.</Text>
    )
}


export default CompToExportAsDefault;

