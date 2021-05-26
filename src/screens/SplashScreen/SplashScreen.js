import React, { useEffect } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import styles from '../../utilites/GStyles';
import { Grid, Row, Col } from "../../components"
import { navigate } from "../../router/rootNavigation"
import * as types from "../../router/types"

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: types.APP_STACK }],
                }),
            );
        }, 2000)
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
        borderColor: 'gray',
        alignItems: 'center'
    },
    creditsTitle: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 12
    }
});
