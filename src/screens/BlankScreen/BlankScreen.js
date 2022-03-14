import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

let labels = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', '.', '+/-'],
    ['+', '-', '*', '/'],
    ['ln', 'C', '=',]
];


export default function App() {
    const [operation, setOperation] = useState(null);
    const [firstOperand, setFirstOperand] = useState('');
    const [secondOperand, setsecondOperand] = useState('');
    const [display, setDisplay] = useState('');

    let functionMapping = {
        '+': () => {
            setOperation(() => (a, b) => {return a + b;});
            setFirstOperand(display);
            setDisplay('');
        },
        '-': () => {
            setOperation(() => (a, b) => {return a - b;});
            setFirstOperand(display);
            setDisplay('');
        },
        '*': () => {
            setOperation(() => (a, b) => {return a * b;});
            setFirstOperand(display);
            setDisplay('');
        },
        '/': () => {
            setOperation(() => (a, b) => {return a / b;});
            setFirstOperand(display);
            setDisplay('');
        },
        'ln': () => {
            setOperation(() => (a, b) => {return Math.log(a);});
            setFirstOperand(display);
        },
        'C': () => {
            setFirstOperand('');
            setsecondOperand('');
            setOperation(null);
            setDisplay('');
        },
        '+/-': () => {
            setDisplay((+display) * (-1) + '');
        },
        '.': () => {
            if (display.indexOf('.') === -1)
                setDisplay(display + '.');
        },
        '=': () => {
            setsecondOperand(display);
            let rezult = operation(+firstOperand, +display);
            setDisplay(rezult);
        }
    };
    for (let i = 0; i < 10; i++) {
        functionMapping[i + ''] = () => {setDisplay(display + i);};
    }
    return (
        <View style={styles.root}>
            <View style={styles.display}>
                <Text style={{ fontSize: 40 }}>
                    {display}
                </Text>
            </View>
            <View style={styles.keyboard}>
                {labels.map((value, index, array) => {
                    return <View style={styles.row}>
                        {value.map((item) => {
                            return <TouchableOpacity style={styles.cell} onPress={() => {functionMapping[item]();}}>
                                <Text style={{ fontSize: 35 }}>{item}</Text>
                            </TouchableOpacity>;
                        })}
                    </View>;
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40
    },
    display: {
        flex: 2,
        backgroundColor: 'lightblue',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    keyboard: {
        flex: 9,
        width: '100%',
        backgroundColor: 'lightgrey',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    cell: {
        flex: 1,
        borderWidth: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});
