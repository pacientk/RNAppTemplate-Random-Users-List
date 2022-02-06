import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Col, Grid, Row } from '../../components';
import styles from '../../utilites/GStyles';
import { CommonActions } from '@react-navigation/native';
import * as types from '../../router/types';

const BlankScreen = ({ navigation }) => {

    const navigateTo = () => navigation.navigate(types.HOME_SCREEN);


    return (
        <Grid style={s.container}>
            <Row style={styles.flex0}>
                <Col style={[styles.alignCenter, styles.jCenter]}>
                    <Text style={s.myName}>Kirill Ter</Text>
                </Col>
            </Row>
            <Row style={styles.flex0}>
                <Col style={[styles.alignCenter, styles.jCenter]}>
                    <Button onPress={() => navigateTo()} title={'Users List'} />
                </Col>
            </Row>
        </Grid>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styles.$white,
    },
    myName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 12
    },
});

export default BlankScreen;
