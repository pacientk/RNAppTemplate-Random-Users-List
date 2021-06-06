import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import GStyles from '../../utilites/GStyles';
import { useDispatch, useSelector } from "react-redux"
import { BasicActions } from "../../store/actions"
import { testReduxStoreSelector, usersStoreSelector } from "../../store/selectors"

const Counter = ({ time, pauseCounter }) => {
    const [count, setCount] = useState(0)

    let timer = useRef(null)

    const ms = time > 0 ? time * 1000 : 1000

    if (pauseCounter) {
        clearTimeout(timer.current)
    } else {
        timer.current = setTimeout(() => {
            let d = count
            d = d + 1
            setCount(d)
        }, ms)
    }

    return (
        <View style={s.container}>
            <Text>{count}</Text>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        // flex: 1
    }
});
export default Counter;
