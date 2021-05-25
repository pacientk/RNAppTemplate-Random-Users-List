import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import * as types from './types';
import {
    SplashScreen,
    WelcomeScreen,
    RegisterScreen,
    RegistrationSuccessScreen,
    LoginTabsScreen,
    ForgotPasswordScreen,
    ForgotPasswordChangedSuccessfullyScreen,
    ResetPasswordScreen,
    ResetPasswordSuccessfullyScreen,
    ForgotUserNameScreen,
    ForgotUserNameChangedSuccessfullyScreen,
} from '../screens';
import { FadeInOutAnimation } from './config';
import { TopHeaderShort } from '../components';
import IsConnectionWarningBanner from '../components/IsConnectionWarningBanner';
import { appFullyLoadedSelector, isConnectedSelector } from '../store/selectors';

const IntroStack = createStackNavigator();

const WelcomeNavigator = () => {
    const appLoaded = useSelector(appFullyLoadedSelector);
    const isConnected = useSelector(isConnectedSelector);
    return (
        <>
            {appLoaded && !isConnected ? (
                <IsConnectionWarningBanner />
            ) : (
                <IntroStack.Navigator
                    initialRouteName={types.SPLASH_SCREEN}
                    // initialRouteName={types.REGISTER_SUCCESS_SCREEN}
                    headerMode="screen"
                    screenOptions={{
                        ...FadeInOutAnimation,
                        gestureEnabled: false,
                        header: (props) => <TopHeaderShort {...props} />,
                    }}>
                    <IntroStack.Screen
                        name={types.SPLASH_SCREEN}
                        component={SplashScreen}
                        options={{
                            title: null,
                            headerShown: false,
                        }}
                    />

                    <IntroStack.Screen
                        name={types.WELCOME_SCREEN}
                        component={WelcomeScreen}
                        options={{
                            headerShown: false,
                            title: 'Welcome Page',
                        }}
                    />

                    <IntroStack.Screen
                        name={types.LOGIN_TABS_SCREEN}
                        component={LoginTabsScreen}
                        options={{ title: 'Login Page' }}
                    />

                    <IntroStack.Screen
                        name={types.REGISTER_SCREEN}
                        component={RegisterScreen}
                        options={{ title: 'Register Page' }}
                    />

                    <IntroStack.Screen
                        name={types.REGISTER_SUCCESS_SCREEN}
                        component={RegistrationSuccessScreen}
                        options={{ title: 'Registration Success Page' }}
                    />

                    <IntroStack.Screen
                        name={types.FORGOT_PASSWORD}
                        component={ForgotPasswordScreen}
                        options={{ title: 'Forgot Password Page' }}
                    />

                    <IntroStack.Screen
                        name={types.FORGOT_PASSWORD_CHANGED_SUCCESSFULLY}
                        component={ForgotPasswordChangedSuccessfullyScreen}
                        options={{ title: 'Forgot Password Changed Successfully Page' }}
                    />

                    <IntroStack.Screen
                        name={types.RESET_PASSWORD}
                        component={ResetPasswordScreen}
                        options={{ title: 'Change Password Page' }}
                    />

                    <IntroStack.Screen
                        name={types.RESET_PASSWORD_SUCCESSFULLY}
                        component={ResetPasswordSuccessfullyScreen}
                        options={{ title: 'Changed Password Successfully Page' }}
                    />

                    <IntroStack.Screen
                        name={types.FORGOT_USER_NAME}
                        component={ForgotUserNameScreen}
                        options={{ title: 'Forgot User Name Page' }}
                    />

                    <IntroStack.Screen
                        name={types.FORGOT_USER_NAME_CHANGED_SUCCESSFULLY}
                        component={ForgotUserNameChangedSuccessfullyScreen}
                        options={{ title: 'Forgot User Name Page' }}
                    />
                </IntroStack.Navigator>
            )}
        </>
    );
};

export default WelcomeNavigator;
