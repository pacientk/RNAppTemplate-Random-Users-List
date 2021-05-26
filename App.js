import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import Router from './src/router';
import 'react-native-gesture-handler';
import ReduxStore from './src/store'
import Styles from './src/utilites/GStyles'


const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={styles.$white} translucent={false} hidden={false} barStyle="dark-content" />
            <Provider store={ReduxStore.store}>
                <SafeAreaView style={styles.safeTop} />
                <SafeAreaView style={styles.safeBottom}>
                    <Router />
                </SafeAreaView>
            </Provider>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Styles.$white,
    },
    safeTop: {
        flex: 0,
        backgroundColor: Styles.$white,
    },
    safeBottom: {
        flex: 1,
    },
});

export default App;
