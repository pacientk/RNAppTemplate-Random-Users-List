import React from 'react';
import * as types from './types';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, UserDetails, BlankScreen } from '../screens';
import { FadeInOutAnimation } from './config';

const AppStack = createStackNavigator();

const AppNavigator = ({ navigation }) => {

    return (
        <>
            <AppStack.Navigator
                initialRouteName={types.BLANK_SCREEN}
                headerMode="screen"
                screenOptions={{
                    ...FadeInOutAnimation,
                    // gestureEnabled: false,
                }}>

                <AppStack.Screen
                    name={types.BLANK_SCREEN}
                    component={BlankScreen}
                    options={{
                        // headerShown: false,
                        title: 'Blank Screen',
                    }}
                />

                <AppStack.Screen
                    name={types.HOME_SCREEN}
                    component={HomeScreen}
                    options={{
                        // headerShown: false,
                        title: 'Contact List',
                    }}
                />

                <AppStack.Screen
                    name={types.USER_DETAILS_SCREEN}
                    component={UserDetails}
                    options={{
                        headerShown: false,
                        title: 'User Details',
                    }}
                />
            </AppStack.Navigator>
        </>

    );
};

export default AppNavigator;
