import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import { Grid, Row, Col } from '../../components';
import styles from '../../utilites/GStyles';

const backButton = (navigation) => {
    return (
        <Pressable style={s.backBtnHolder} onPress={() => navigation.goBack()}>
            <View style={styles.flexRow}>
                <Text style={{ fontSize: 28, lineHeight: 32 }}>←</Text>
                <Text style={{ fontSize: 16, lineHeight: 30, marginLeft: 8 }}>Back to List</Text>
            </View>
        </Pressable>
    )
}

const UserDetails = ({ route, navigation }) => {
    const { user } = route.params;

    return (
        <View style={s.container}>
            {backButton(navigation)}

            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Grid style={[styles.flex, { marginTop: 50 }]}>
                    <Row>
                        <Col style={styles.alignCenter}>
                            <Image
                                resizeMode={'contain'}
                                style={{ width: 150, height: 150, borderRadius: 75 }}
                                source={{ uri: user.picture.large }} />
                        </Col>
                    </Row>

                    <Row>
                        <Col style={styles.alignCenter}>
                            <Text style={{
                                fontSize: 16,
                                color: styles.$spun_pearl,
                                marginTop: 24
                            }}>{user.name.title}.{'\u00A0'}</Text>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                            }}>{user.name.first}{'\u00A0'}{user.name.last}</Text>
                        </Col>
                    </Row>

                    <View style={s.detailsHolder}>
                        <Col>
                            <Text style={s.detailsTextTitle}>Phone</Text>
                            <Text style={s.detailsText}>{user.phone}</Text>
                            <Text style={s.detailsTextTitle}>Cell</Text>
                            <Text style={s.detailsText}>{user.cell}</Text>
                        </Col>
                        <Col>
                            <Text style={s.detailsTextTitle}>Email</Text>
                            <Text style={s.detailsText}>{user.email}</Text>
                        </Col>
                        <Col>
                            <Text style={s.detailsTextTitle}>Address</Text>
                            <Text style={[s.detailsText, { marginBottom: 6 }]}>{user.location.street.number}{'\u00A0'}{user.location.street.name}</Text>
                            <Text style={[s.detailsText, { marginBottom: 6 }]}>{user.location.city}</Text>
                            <Text style={s.detailsText}>{user.location.country}, {user.location.postcode}</Text>
                        </Col>
                    </View>
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
    backBtnHolder: {
        position: 'absolute',
        marginLeft: 18,
        zIndex: 999
    },
    detailsHolder: {
        borderTopColor: styles.$spun_pearl,
        borderTopWidth: .5,
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 20
    },
    detailsText: {
        fontSize: 18,
        marginBottom: 20,
    },
    detailsTextTitle: {
        fontSize: 14,
        color: styles.$spun_pearl
    },
});

export default UserDetails;
