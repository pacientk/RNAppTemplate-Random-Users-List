import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Image, View, ActivityIndicator } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import styles from '../../utilites/GStyles';
import { Grid, Row, Col } from "../../components"
import * as types from "../../router/types"
import { useSelector } from "react-redux"
import { usersStoreSelector } from "../../store/selectors"

const renderLoading = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", marginTop: 20 }}>
            <ActivityIndicator size="small" color={styles.$spun_pearl} />
        </View>
    );
}

const SplashScreen = ({ navigation }) => {
    const usersList = useSelector(usersStoreSelector)

    useEffect(() => {

        setTimeout(() => {
            usersList?.length > 0 && navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: types.APP_STACK }],
                }),
            );
        }, 2200)
    })

    return (
        <Grid style={s.container}>
            <Row style={styles.flex0}>
                <Col style={[styles.alignCenter, styles.jCenter]}>
                    <Image
                        resizeMode={'contain'}
                        style={{ height: 100 }}
                        source={require("./../../assets/img/kt_avatar.png")} />

                    <Text style={s.myName}>Kirill Ter</Text>
                </Col>
            </Row>
            <Row style={styles.flex0}>
                {renderLoading()}
            </Row>
            <View style={s.creditsHolder}>
                <Text style={s.creditsTitle}>Exam for:</Text>
                <Row style={[styles.flex0]}>
                    <Col style={[styles.alignCenter, styles.jCenter]}>
                        <Image
                            resizeMode={'contain'}
                            style={{ height: 45 }}
                            source={require("./../../assets/img/att-logo.png")} />
                    </Col>
                </Row>
            </View>

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
    creditsHolder: {
        width: '60%',
        marginTop: 50,
        borderTopWidth: .5,
        borderColor: styles.$spun_pearl,
        alignItems: 'center'
    },
    creditsTitle: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 12
    }
});
