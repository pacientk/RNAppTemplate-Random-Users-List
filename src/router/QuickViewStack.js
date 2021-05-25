import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as types from './types';
import {
    QuickViewAgreementScreen,
    QuickViewRegistrationScreen,
    QuickViewRegistrationSuccessScreen,
    QuickViewPasswordEntranceScreen,
} from '../screens';
import { FadeInOutAnimation } from './config';
import { TopHeaderShort } from '../components';
import IsConnectionWarningBanner from '../components/IsConnectionWarningBanner';
import { useSelector } from 'react-redux';
import { isConnectedSelector } from '../store/selectors';

const QuickView = createStackNavigator();

const QuickViewNavigator = () => {
    const isConnected = useSelector(isConnectedSelector);

    return (
        <>
            {!isConnected ? (
                <IsConnectionWarningBanner />
            ) : (
                <QuickView.Navigator
                    initialRouteName={types.QUICK_VIEW_AGREEMENT}
                    screenOptions={{
                        ...FadeInOutAnimation,
                        gestureEnabled: false,
                        header: (props) => <TopHeaderShort {...props} />,
                    }}>
                    <QuickView.Screen
                        name={types.QUICK_VIEW_AGREEMENT}
                        component={QuickViewAgreementScreen}
                        options={{ title: 'Quick View Agreement Page' }}
                    />

                    <QuickView.Screen
                        name={types.QUICK_VIEW_REGISTRATION}
                        component={QuickViewRegistrationScreen}
                        options={{ title: 'Quick View Registration Page' }}
                    />

                    <QuickView.Screen
                        name={types.QUICK_VIEW_REGISTRATION_SUCCESS}
                        component={QuickViewRegistrationSuccessScreen}
                        options={{ title: 'Quick View Registration Success Page' }}
                    />
                </QuickView.Navigator>
            )}
        </>
    );
};

export default QuickViewNavigator;
