import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import GStyles from '../../utilites/GStyles';

const AppButton = (props) => {
    const { disabled, containerStyle, invertButtonColors, titleStyle } = props;

    const onPressAction = () => {
        props.onPress();
    };

    return (
        <TouchableOpacity
            style={[
                s.buttonContainer,
                containerStyle,
                disabled ? s.disabledButtonContainer : null,
                invertButtonColors ? s.whiteBtn : null,
            ]}
            activeOpacity={disabled ? 1 : 0.7}
            onPress={disabled ? null : onPressAction}>

            <Text
                style={[
                    s.buttonTitle,
                    titleStyle,
                    invertButtonColors ? s.whiteBtnTitle : null,
                    disabled ? s.disabledButtonTitle : null,
                ]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const s = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        borderRadius: 4,
        backgroundColor: GStyles.$blue,
        borderWidth: 1,
        borderColor: GStyles.$blue,
        paddingHorizontal: 4,
        marginVertical: 12,
    },
    buttonTitle: {
        fontSize: 18,
        lineHeight: 18,
        // fontFamily: GStyles.SemiBold,
        color: GStyles.$white,
        writingDirection: 'rtl',
        textAlign: 'center',
        paddingTop: 5,
    },
    whiteBtnTitle: {
        color: GStyles.$blue,
    },
    whiteBtn: {
        backgroundColor: GStyles.$white,
    },
    disabledButtonContainer: {
        borderColor: GStyles.$mercury,
        backgroundColor: GStyles.$mercury,
    },
    disabledButtonTitle: {
        color: GStyles.$topaz,
    },
});
export default AppButton;
