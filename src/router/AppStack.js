import React from 'react';
import { useSelector } from 'react-redux';
// import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';

import * as types from './types';
import { HomeScreen, UserDetails } from '../screens';
// import { TopHeader, DrawerSideMenu, TopHeaderShort } from '../components';
import { createStackNavigator } from "@react-navigation/stack"
import { FadeInOutAnimation } from "./config"

// const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();

const AppNavigator = ({ navigation }) => {

    return (
        <>
            <AppStack.Navigator
                initialRouteName={types.HOME_SCREEN}
                headerMode="screen"
                screenOptions={{
                    ...FadeInOutAnimation,
                    gestureEnabled: false,
                }}>

                {/*<IntroStack.Screen*/}
                {/*    name={types.SPLASH_SCREEN}*/}
                {/*    component={SplashScreen}*/}
                {/*    options={{*/}
                {/*        title: null,*/}
                {/*        headerShown: false,*/}
                {/*    }}*/}
                {/*/>*/}

                <AppStack.Screen
                    name={types.HOME_SCREEN}
                    component={HomeScreen}
                    options={{
                        // headerShown: false,
                        title: 'Welcome',
                    }}
                />

                <AppStack.Screen
                    name={types.USER_DETAILS_SCREEN}
                    component={UserDetails}
                    options={{
                        // headerShown: false,
                        title: 'User Details',
                    }}
                />
            </AppStack.Navigator>
        </>

    );
};

export default AppNavigator;
