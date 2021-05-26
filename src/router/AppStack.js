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
                    // header: (props) => <TopHeaderShort {...props} />,
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

            {/*<Drawer.Navigator*/}
            {/*    initialRouteName={types.HOME_SCREEN}*/}
            {/*    screenOptions={{*/}
            {/*        headerShown: true,*/}
            {/*        // header: (props) => <TopHeader navigation={navigation} {...props} />,*/}
            {/*        gestureEnabled: false,*/}
            {/*    }}*/}
            {/*    drawerContent={(props) => <DrawerSideMenu {...props} />}*/}
            {/*    drawerContentOptions={{*/}
            {/*        activeTintColor: '#e91e63',*/}
            {/*        itemStyle: { marginVertical: 10, borderWidth: 1 },*/}
            {/*    }}*/}
            {/*    drawerStyle={{ width: 320 }}>*/}
            {/*    <Drawer.Screen*/}
            {/*        name={types.HOME_SCREEN}*/}
            {/*        component={HomeScreen}*/}
            {/*        options={{*/}
            {/*            title: 'Home Page',*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <Drawer.Screen*/}
            {/*        name={types.GRID_COMPS_SCREEN}*/}
            {/*        component={GridAndComponents}*/}
            {/*        options={{*/}
            {/*            title: 'Grid & Components Page',*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</Drawer.Navigator>*/}
        </>

    );
};

export default AppNavigator;
