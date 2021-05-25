import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { navigationRef } from './rootNavigation';

import * as types from './types';
import { FadeInOutAnimation } from './config';
import IntroStack from './IntroStack';
import AppStack from './AppStack';
import QuickViewStack from './QuickViewStack';
import { BasicActions, NetworkActions } from '../store/actions';
import { startUpSaga } from '../store/rootSaga';
import { AccessibilityInfo } from 'react-native';
import { QuickViewPasswordEntranceScreen } from '../screens';
import { getConfig } from '../utilities/utilities';

const RootStack = createStackNavigator();

const RootNavigator = () => {
    const dispatch = useDispatch();
    const netInfo = useNetInfo();

    const hasConnection = netInfo.isConnected && netInfo.isInternetReachable;

    const _initGlassBoxSdk = () => {
        const { Storyboard } = require('react-native-glassbox');
        // those two last params - isHybridMode and isInternalPolicy must be valued otherwise glassbox won't work properly.

        Storyboard.start(getConfig().glassboxUrl, getConfig().glassboxTestUUID, false, true); // TODO: update to handle test/prod switch
    };

    useEffect(() => {
        dispatch(startUpSaga()); // initialize app before screens shown.
    }, []);

    return (
        <RootStack.Navigator
            initialRouteName={types.APP_STACK}
            // initialRouteName={types.INTRO_STACK}
            headerMode="float"
            screenOptions={{
                ...FadeInOutAnimation,
                gestureEnabled: false,
            }}>
            {/*<RootStack.Screen name={types.INTRO_STACK} component={IntroStack} options={{ headerShown: false }} />*/}

            {/*<RootStack.Screen*/}
            {/*    name={types.QUICK_VIEW_AGREEMENT}*/}
            {/*    component={QuickViewStack}*/}
            {/*    options={{ headerShown: false }}*/}
            {/*/>*/}

            {/*<RootStack.Screen*/}
            {/*    name={types.QUICK_VIEW_PASSWORD_ENTRANCE_SUCCESS}*/}
            {/*    component={QuickViewPasswordEntranceScreen}*/}
            {/*    options={{ headerShown: false }}*/}
            {/*/>*/}

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
