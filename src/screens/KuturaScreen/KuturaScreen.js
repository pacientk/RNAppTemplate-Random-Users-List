import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Grid, Col, Counter } from '../../components';
import styles from '../../utilites/GStyles';
import { usersStoreSelector } from "../../store/selectors"
import * as types from "../../router/types"
import { set } from "react-native-reanimated"


const KuturaScreen = ({ navigation }) => {
    const [timeSec, setTimeSec] = useState('0')
    const [isPaused, setIsPaused] = useState(false)

    const onChangeNumber = (num) => {
        if (num.length > 0)
            setTimeSec(Number(num))
    }

    const pauseCounter = () => {
        setIsPaused(!isPaused)
    }

    return (
        <View style={s.container}>
            <Grid>
                <Col>
                    {/*<TextInput*/}
                    {/*    style={s.input}*/}
                    {/*    onChangeText={onChangeNumber}*/}
                    {/*    value={timeSec}*/}
                    {/*    placeholder="Placeholder"*/}
                    {/*    keyboardType="numeric"*/}
                    {/*/>*/}

                    <Button title={isPaused ? 'Unpause Counter' : 'Pause Counter'} onPress={pauseCounter} />

                    <Text>Counter:</Text>
                    <Counter time={timeSec} pauseCounter={isPaused} />
                </Col>
            </Grid>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 20,
        backgroundColor: styles.$white,
    },
    input: {
        borderWidth: 1,
        height: 40,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    }
});

export default KuturaScreen;
