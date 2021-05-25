import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import ReduxStore from './src/store'
import Styles from './src/utilites/GStyles'
// import { AppButton, Grid, Col, Row, StateStatus } from "./src/components"
import Router from './src/router';




const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    // const backgroundStyle = {
    //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={styles.$white} translucent={false} hidden={false} barStyle="dark-content" />
            <Provider store={ReduxStore.store}>
                <Provider store={ReduxStore.store}>
                    <SafeAreaView style={styles.safeTop} />
                    <SafeAreaView style={styles.safeBottom}>
                        <Router />
                    </SafeAreaView>
                </Provider>
            </Provider>

            {/*<SafeAreaView style={backgroundStyle}>*/}
            {/*    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
            {/*    <Provider store={ReduxStore.store}>*/}
            {/*        <ScrollView*/}
            {/*            contentInsetAdjustmentBehavior="automatic"*/}
            {/*            style={backgroundStyle}>*/}
            {/*            <Header />*/}
            {/*            <StateStatus />*/}
            {/*            <View*/}
            {/*                style={{*/}
            {/*                    backgroundColor: isDarkMode ? Colors.black : Colors.white,*/}
            {/*                }}>*/}
            {/*                <Grid>*/}
            {/*                    <Row>*/}
            {/*                        <Col>*/}
            {/*                            <AppButton*/}
            {/*                                invertButtonColors*/}
            {/*                                disabled*/}
            {/*                                title={'Button #1'}*/}
            {/*                                onPress={() => alert('onPress')}*/}
            {/*                            />*/}
            {/*                        </Col>*/}
            {/*                        <Col>*/}
            {/*                            <AppButton*/}
            {/*                                title={'Button #2'}*/}
            {/*                                onPress={() => alert('onPress')}*/}
            {/*                            />*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                </Grid>*/}
            {/*                <Section title="Step One">*/}
            {/*                    Edit <Text style={styles.highlight}>App.js</Text> to change this*/}
            {/*                    screen and then come back to see your edits.*/}
            {/*                </Section>*/}
            {/*                <Section title="See Your Changes">*/}
            {/*                    <ReloadInstructions />*/}
            {/*                </Section>*/}
            {/*                <Section title="Debug">*/}
            {/*                    <DebugInstructions />*/}
            {/*                </Section>*/}
            {/*                <Section title="Learn More">*/}
            {/*                    Read the docs to discover what to do next:*/}
            {/*                </Section>*/}
            {/*                <LearnMoreLinks />*/}
            {/*            </View>*/}
            {/*        </ScrollView>*/}
            {/*    </Provider>*/}
            {/*</SafeAreaView>*/}
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
        backgroundColor: 'pink'
    },
});

export default App;
