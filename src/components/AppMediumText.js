import React from 'react'
import { Text, StyleSheet, } from 'react-native'

import colors from '../config/colors'
import { RFValue } from "react-native-responsive-fontsize";

const AppMediumText = ({ children, style }) => {
    return (

        <Text style={[styles.textcommon, style]} >{children}</Text>
    )
}
const styles = StyleSheet.create({
    textcommon: {
        fontSize: RFValue(14),
        alignSelf: 'center',
        color: colors.black,
        fontFamily: 'Montserrat-Medium',

    }
})

export default AppMediumText;
