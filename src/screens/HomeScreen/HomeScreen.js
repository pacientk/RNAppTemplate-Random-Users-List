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
        <TouchableOpacity style={{ }} onPress={() => navigateTo()}>
            <View style={[styles.flexRow, styles.alignCenter, { marginTop: 10, marginBottom: 10 }]}>
                <Image resizeMode={'contain'} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 20 }} source={{
                    uri: userItem.picture.thumbnail,
                }} />
                <Col>
                    <Text style={{
                        fontSize: 18
                    }}>{userItem.name.first} {userItem.name.last}</Text>
                    <Text style={{
                        fontSize: 12,
                        color: 'gray'
                    }}>{userItem.location.country}</Text>
                </Col>
            </View>
        </TouchableOpacity>
    )
};

const HomeScreen = ({ navigation }) => {
    const usersList = useSelector(usersStoreSelector)
    console.log("@@@@ ",usersList)

    return (
        <View style={s.container}>
            {usersList?.length > 0
                ?
                <Grid>
                    <FlatList
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
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: styles.$white,
    },
});

export default HomeScreen;
