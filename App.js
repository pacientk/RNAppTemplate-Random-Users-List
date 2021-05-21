/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';
import { Provider, useDispatch } from 'react-redux'
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { BasicActions } from './src/store/actions'
import ReduxStore from './src/store'


const Section = ({ children, title }): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App = () => {
    // const dispatch = useDispatch();
    //
    const [title, setTitle] = useState('TEST')
    useEffect(() => {
        // dispatch(BasicActions.appFullyLoaded());
        setTimeout(() => {
            setTitle('STET')
        }, 2000)
    }, [])

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Provider store={ReduxStore.store}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={backgroundStyle}>
                    <Header />
                    <View
                        style={{
                            backgroundColor: isDarkMode ? Colors.black : Colors.white,
                        }}>
                        <Button
                            onPress={() => alert(ReduxStore.store)}
                            title={title}
                            color="red"
                        />
                        <Section title="Step One">
                            Edit <Text style={styles.highlight}>App.js</Text> to change this
                            screen and then come back to see your edits.
                        </Section>
                        <Section title="See Your Changes">
                            <ReloadInstructions />
                        </Section>
                        <Section title="Debug">
                            <DebugInstructions />
                        </Section>
                        <Section title="Learn More">
                            Read the docs to discover what to do next:
                        </Section>
                        <LearnMoreLinks />
                    </View>
                </ScrollView>
            </Provider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
