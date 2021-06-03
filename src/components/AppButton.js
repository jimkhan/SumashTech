import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import colors from '../config/colors';
import AppMediumText from './AppMediumText'

const Button = ({ name, style, textStyle, onPress, disabled }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disabled} >
            <AppMediumText style={[styles.buttontxt, textStyle]}>{name}</AppMediumText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: hp(18),
        height: hp(4),
        borderColor: colors.darkGray,
        backgroundColor: colors.darkGray,
        borderWidth: 1,
        borderRadius: hp('2%'),
        marginTop: 10,
        elevation: 8,
    },
    buttontxt: {
        color: colors.white,
        fontSize: RFValue(11),
    },
});
export default Button;
