import React from 'react';
// import { useSelector } from 'react-redux';
import * as types from './types';
import { createStackNavigator } from "@react-navigation/stack"
import { FadeInOutAnimation } from "./config"
import {SplashScreen} from "../screens"

const IntroStack = createStackNavigator();

const IntroNavigator = ({ navigation }) => {

    return (
        <>
            <IntroStack.Navigator
                initialRouteName={types.SPLASH_SCREEN}
                headerMode="screen"
                screenOptions={{
                    ...FadeInOutAnimation,
                    gestureEnabled: false,
                    header: false,
                }}>

                <IntroStack.Screen
                    name={types.SPLASH_SCREEN}
                    component={SplashScreen}
                    options={{
                        title: null,
                        headerShown: false,
                    }}
                />

            </IntroStack.Navigator>
        </>

    );
};

export default IntroNavigator;
