import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GStyles from '../../utilites/GStyles';
import { useDispatch, useSelector } from "react-redux"
import { testReduxStoreSelector } from "../../store/selectors"
import { UsersActions } from "../../store/actions"

const StateStatus = (props) => {
    const { titleStyle } = props;
    const dispatch = useDispatch()
    const testReduxStore = useSelector(testReduxStoreSelector)

    useEffect(()=>{
        dispatch(UsersActions.setUsers());
    },[])

    return (
        <View style={{
            backgroundColor: 'blue',
        }}>
            <Text
                style={[
                    s.buttonTitle,
                    titleStyle,
                ]}>
                {props.title} {testReduxStore.payload ? 'ON' : 'OFF'}
            </Text>
        </View>
    );
};

const s = StyleSheet.create({
    buttonTitle: {
        fontSize: 18,
        lineHeight: 18,
        // fontFamily: GStyles.SemiBold,
        color: GStyles.$white,
        writingDirection: 'rtl',
        textAlign: 'center',
        paddingTop: 5,
    },
});
export default StateStatus;
