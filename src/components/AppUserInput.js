import React, { useState } from 'react'
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors'
import AppMediumText from './AppMediumText'

const AppTextInput = ({ title, styletext, icon, style, ...otherProps }) => {

    const [isEditable, setIsEditable] = useState(false)
    return (
        <>
            <View style={styles.main} >

                {title && <AppMediumText style={styles.text} >{title}</AppMediumText>}
                {icon && (
                    <TouchableOpacity style={{
                        width: hp(3), height: hp(3), position: "absolute",
                        right: wp(6),
                        top: hp(-1), zIndex: 20, justifyContent: 'center', alignItems: 'center'
                    }} onPress={() => setIsEditable(!isEditable)} >
                        <Icon name={icon} size={RFValue(20)} style={styles.icon} />
                    </TouchableOpacity>)

                }
                <View style={[styles.conatiner, style]}>
                    <TextInput
                        style={[styles.inputtext, styletext]}
                        placeholderTextColor="#777878"
                        editable={isEditable}
                        {...otherProps}
                    />
                </View>

            </View>
        </>
    )
}
const styles = StyleSheet.create({

    main: {
        marginVertical: hp(1),
    },
    conatiner: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp(80),
        paddingHorizontal: wp(3),
        marginVertical: hp(.3),
        borderWidth: 1,
        borderRadius: hp(.7),
        backgroundColor: colors.white,
        borderColor: colors.white,
        alignSelf: 'center',
        elevation: 3,
    },
    text: {

        alignSelf: 'stretch',
        fontSize: RFValue(13),
        paddingHorizontal: wp(6),
        marginBottom: hp(.2),
        color: colors.darkGray
    },
    icon: {
        color: colors.grayDark,
    },
    inputtext: {
        width: wp('75%'),
        minHeight: hp('5.6%'),
        fontSize: RFValue(15),
        fontFamily: 'Montserrat-Regular',
        color: colors.black,
    },
})

export default AppTextInput;
