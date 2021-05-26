import React, { useState, useRef, useEffect, useMemo } from 'react';
import { View, Image, StyleSheet, FlatList, ScrollView, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton, Grid, Row, Col } from '../../components';
import styles from '../../utilites/GStyles';
import { UsersActions } from "../../store/actions"
import { testReduxStoreSelector, usersStoreSelector } from "../../store/selectors"

const UserDetails = ({ route, navigation }) => {
    const { user } = route.params;

    return (
        <View style={s.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                // style={backgroundStyle}
            >
                <Grid style={[styles.flex, { borderWidth: 2 }]}>
                    <Row>
                        <Col>
                            <AppButton
                                invertButtonColors
                                disabled
                                title={`${user.name.first} ${ user.name.last}`}
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

export default UserDetails;
