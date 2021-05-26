import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './rootNavigation';

import * as types from './types';
import { FadeInOutAnimation } from './config';
import AppStack from "./AppStack"
import IntroStack from "./IntroStack"
import { UsersActions } from "../store/actions"

const RootStack = createStackNavigator();

const RootNavigator = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UsersActions.setUsers());
    }, []);

    return (
        <RootStack.Navigator
            initialRouteName={types.INTRO_STACK}
            headerMode="float"
            screenOptions={{
                ...FadeInOutAnimation,
                gestureEnabled: false,
            }}>

            <RootStack.Screen
                name={types.INTRO_STACK}
                component={IntroStack}
                options={{ headerShown: false }}
            />

            <RootStack.Screen
                name={types.APP_STACK}
                component={AppStack}
                options={{
                    headerShown: false,
                }}
            />
        </RootStack.Navigator>
    );
};

const Root = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <RootNavigator />
        </NavigationContainer>
    );
};

export default Root;
