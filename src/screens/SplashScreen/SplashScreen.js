import React, { useEffect } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import styles from '../../utilites/GStyles';
import { Grid, Row, Col } from "../../components"

const SplashScreen = ({ navigation }) => {

    return (
        <Grid style={s.container}>
            <Row style={[styles.flex0]}>
                <Col style={[styles.alignCenter, styles.jCenter]}>
                    <Image
                        resizeMode={'contain'}
                        style={{ width: 150, height: 100 }}
                        source={require("./../../assets/img/kt_avatar.png")} />

                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 12 }}>Kirill Ter</Text>
                </Col>
            </Row>

            <View style={{
                width: '60%',
                marginTop: 50,
                borderTopWidth: .5,
                borderColor: 'gray',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 12 }}>Exam for:</Text>
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
        // borderWidth:2
    },
});
