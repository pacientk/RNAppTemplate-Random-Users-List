import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Grid, Row } from '../../components';
import styles from '../../utilites/GStyles';
import calcStore from '../../components/Calculator/store';

const BlankScreen = () => {
    const [value, setValue] = useState('0');

    const typeNumber = (val) => {
        if (value === '0') {
            setValue(val);
        } else {
            setValue(value + val);
        }
    };

    const handleAction = (val) => {
        if (val === 'C') {
            setValue('0');
        }

        if (val === 'CE' && value.length > 1) {
            setValue(value.slice(0, value.length - 1));
        }

        if (val === '=') {
            try {
                setValue(eval(value).toString());
            } catch {
                setValue('Error');
                setTimeout(() => {
                    setValue('0');
                }, 2000);
            }
        }
    };

    return (
        <ScrollView style={{ backgroundColor: 'white', }}>
            <Grid style={s.container}>
                <Row style={styles.flex0}>
                    <Col style={[styles.alignCenter, styles.jCenter]}>
                        <Text style={s.titleName}>Calculator</Text>
                    </Col>
                </Row>
                <Row style={styles.flex0}>
                    <Col>
                        <TextInput
                            defaultValue={value}
                            value={value}
                            style={s.inputContainer}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {calcStore.buttons.map((item, i) =>
                            <TouchableOpacity
                                key={i}
                                onPress={() => typeNumber(item.val)}
                                style={{ flex: 0, width: 70, height: 70, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                                <Text style={{ fontSize: 24 }}>{item.val}</Text>
                            </TouchableOpacity>
                        )}
                        {calcStore.actions.map((item, i) =>
                            <TouchableOpacity
                                key={i}
                                onPress={() => handleAction(item.val)}
                                style={{ flex: 0, width: 70, height: 70, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                                <Text style={{ fontSize: 24 }}>{item.val}</Text>
                            </TouchableOpacity>
                        )}
                    </Col>
                </Row>
            </Grid>
        </ScrollView>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styles.$white,
    },
    titleName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 12
    },
    inputContainer: {
        minHeight: 45,
        marginVertical: 24,
        fontSize: 46,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
        borderWidth: .5,
        borderRadius: 6,
        textAlign: 'right',
    }
});

export default BlankScreen;
