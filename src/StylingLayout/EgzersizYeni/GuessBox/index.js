import React from 'react';
import { View } from 'react-native';
import ClueCircle from '../ClueCircle';

import StonePit from '../StonePit';

import styles from './styles';

const stones = [
    {
        id: 1,
        color: "#FF7860",
    },
    {
        id: 2,
        color: "#9D80FD",
    },
    null,
    null,
];

const clues = {
    rightStoneRightPlace: 2,
    rightStoneWrongPlace: 1,
};

const GuessBox = props => {

    const renderStonePits = () => {
        let stoneComponents = stones.map((stone, index) => {
            return (
                <StonePit key={index} stone={stone}/>
            )
        })

        /*
        stoneComponents = [
            <StonePit stone={stones[0]} />,
            <StonePit stone={stones[1]} />,
            <StonePit stone={stones[2]} />,
            <StonePit stone={stones[3]} />,
        ]
        */

        return stoneComponents; 
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.stonesContainer}>
                {renderStonePits()}
            </View>
            <View style={styles.cluesContainer}>
                <ClueCircle />
                <ClueCircle />
                <ClueCircle />
                <ClueCircle />
            </View>
        </View>
    );
}

export default GuessBox;