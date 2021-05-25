import React, { useState, useRef, useEffect, useMemo } from 'react';
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton, Grid, Row, Col } from '../../components';
import styles from '../../utilites/GStyles';
import { UsersActions } from "../../store/actions"

const Section = ({ children, title }): Node => {
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: 'black',
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: 'black',
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const renderLoading = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color={colors.dark_blue} />
        </View>
    );
}

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(UsersActions.setUsers());
    }, [])

    return (
        <View style={s.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                // style={backgroundStyle}
            >
                <Grid>
                    <Row>
                        <Col>
                            <AppButton
                                invertButtonColors
                                disabled
                                title={'Button #1'}
                                onPress={() => alert('onPress')}
                            />
                        </Col>
                        <Col>
                            <AppButton
                                title={'Button #2'}
                                onPress={() => alert('onPress')}
                            />
                        </Col>
                    </Row>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                </Grid>
            </ScrollView>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styles.$white,
    },
    goodEveningTitle: {
        fontSize: 22,
        lineHeight: 28,
        // fontFamily: styles.Regular,
        color: styles.$navy_blue,
        textAlign: 'left',
        writingDirection: 'rtl',
        marginLeft: 16,
    },
    joinQuickViewContainer: {
        flex: 0,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: styles.$alto,
        borderBottomWidth: 1,
        borderBottomColor: styles.$alto,
        paddingTop: 6,
        paddingBottom: 20,
        backgroundColor: styles.$light_gray,
        marginVertical: 30,
    },
    joinQuickViewTitle: {
        fontSize: 26,
        lineHeight: 34,
        fontFamily: styles.SemiBold,
        color: styles.$navy_blue,
        textAlign: 'left',
        writingDirection: 'rtl',
    },
    joinQuickViewSubTitle: {
        fontSize: 18,
        lineHeight: 24,
        // fontFamily: styles.Regular,
        color: styles.$ship_grey,
        textAlign: 'left',
        writingDirection: 'rtl',
    },
});

export default HomeScreen;
