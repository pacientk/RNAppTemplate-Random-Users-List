import React, { useState, useRef, useEffect, useMemo } from 'react';
import { View, Image, StyleSheet, FlatList, ScrollView, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton, Grid, Row, Col } from '../../components';
import styles from '../../utilites/GStyles';
import { UsersActions } from "../../store/actions"
import { testReduxStoreSelector, usersStoreSelector } from "../../store/selectors"
import * as types from "../../router/types"

const renderLoading = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color={'#1f618d'} />
        </View>
    );
}

const renderUser = (item, navigation) => {
    const userItem = item.item
    const navigateTo = () => navigation.navigate(types.USER_DETAILS_SCREEN, { user: userItem })

    return (
        <TouchableOpacity style={{ borderWidth: 1 }} onPress={() => navigateTo()}>
            <View style={[styles.flexRow, { marginTop: 10, marginBottom: 10 }]}>
                <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{
                    uri: userItem.picture.thumbnail,
                }} />
                <Text>
                    <Text>{userItem.name.first} </Text>
                    <Text>{userItem.name.last}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
};


const keyExtractor = (user, index) => index.toString()

const HomeScreen = ({ navigation }) => {
    const usersList = useSelector(usersStoreSelector)


    return (
        <View style={s.container}>
            {/*<ScrollView*/}
            {/*    contentInsetAdjustmentBehavior="automatic"*/}
            {/*    // style={backgroundStyle}*/}
            {/*>*/}
            {/*<Grid style={[styles.flex, {borderWidth: 2}]}>*/}
            {/*    <Row>*/}
            {/*        <Col>*/}
            {/*            <AppButton*/}
            {/*                invertButtonColors*/}
            {/*                disabled*/}
            {/*                title={'Button #1'}*/}
            {/*                onPress={() => alert('onPress')}*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*        <Col>*/}
            {/*            <AppButton*/}
            {/*                title={'Button #2'}*/}
            {/*                onPress={() => alert('onPress')}*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Grid>*/}

            {usersList?.length > 0
                ?
                <Grid>
                    <FlatList
                        style={styles.container}
                        data={usersList}
                        renderItem={(item) => renderUser(item, navigation)}
                        keyExtractor={(item, index) => `item ${index}`}
                        // onEndReached={() => this.props.fetchRandomUsers()}
                        onEndReachedThreshold={0.8}
                        // ListFooterComponent={renderLoading}
                    />
                </Grid>
                :
                renderLoading()
            }

            {/*</ScrollView>*/}
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
