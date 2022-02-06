import React, { useEffect } from 'react';
import { Text, StyleSheet, Image, View, ActivityIndicator } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import styles from '../../utilites/GStyles';
import { Grid, Row, Col } from '../../components';
import * as types from '../../router/types';

const renderLoading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>
            <ActivityIndicator size="small" color={styles.$spun_pearl} />
        </View>
    );
};

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: types.APP_STACK }],
                }),
            );
        }, 3200);
    });

    return (
        <Grid style={s.container}>
            <Row style={styles.flex0}>
                <Col style={[styles.alignCenter, styles.jCenter]}>
                    <Image
                        resizeMode={'contain'}
                        style={{ height: 100 }}
                        source={require('./../../assets/img/kt_avatar.png')} />

                    <Text style={s.myName}>Kirill Ter</Text>
                </Col>
            </Row>
            <Row style={styles.flex0}>
                {renderLoading()}
            </Row>
        </Grid>
    );
};

export default SplashScreen;

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
