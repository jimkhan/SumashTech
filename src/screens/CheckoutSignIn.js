import React from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';


import CommonHeadWithButton from '../components/CommonHeadWithButton'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import Categories from '../components/Categories'
import CardPromosion from '../components/CardPromosion'
import AppTitleText from '../components/AppTitleText'
import ProductCard from '../components/ProductCard'

import colors from '../config/colors'
const CheckoutSignIn = ({ navigation }) => {
      
    return (
        <View style={styles.container} >
            <CommonHeadWithButton
                textLeft={"Checkout"}
                iconRight={"window-close"}
                iconColor={colors.danger}
            />
            <AppText style={styles.textTop} >Please sign in to continue</AppText>
            <View style={styles.subcontainer} >
                <View style={[styles.common, styles.activeBack]} ><AppTitleText style={[styles.numberColor, styles.activeText]} >1</AppTitleText></View>
                <View style={[styles.barColor, styles.activeBack]} ></View>
                <View style={[styles.common, styles.activeBack]} ><AppTitleText style={[styles.numberColor, styles.activeText]} >2</AppTitleText></View>
                <View style={styles.barColor} ></View>
                <View style={styles.common} ><AppTitleText style={styles.numberColor} >3</AppTitleText></View>
                <View style={styles.barColor} ></View>
                <View style={styles.common} ><AppTitleText style={styles.numberColor}>4</AppTitleText></View>
                
            </View>
            <View style={styles.main}>
            
            <AppTitleText style={styles.activeText} >Sign In</AppTitleText>
            <View style={styles.inputArea} >
                <AppTextInput
                    title={"Email"}
                />
                <AppTextInput
                    title={"Password"}
                    icon={"md-eye-off-outline"}
                />
            </View>
            <AppButton
                name={"LOGIN"}
                onPress={()=> navigation.navigate("ShippingInfoScreen")}
            />
            <AppTitleText style={styles.forgetText} >Forgot Password?</AppTitleText>
            <View style={styles.textArea} >
                <AppText style={styles.dontText} >Don't have any account?</AppText>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} >
                    <AppTitleText style={styles.createText} >Create account</AppTitleText>

                </TouchableOpacity>
            </View>

        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    inputArea: {
        marginTop: hp(5),
    },
    textTop: {
        color: colors.danger,
        alignSelf: 'stretch',
        paddingLeft: wp(3),
        fontSize: RFValue(16),
    },
    subcontainer:{
        width: wp(80),
        height: hp(10),
        // backgroundColor: colors.yellow,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center', 
    },
    activeBack:{
        backgroundColor: colors.secondaryBorder,
    },
    activeText:{
        color: colors.primary,
    },
    common:{
        alignItems: 'center',
        justifyContent: 'center',
        width: hp(5),
        height: hp(5),
        borderRadius: hp(3),
        backgroundColor: colors.lightGrayMOre,
    },
    barColor:{
        width: wp(7),
        height: hp(.5),
        backgroundColor: colors.lightGrayMOre,
    },
    numberColor:{
        color: colors.secondaryBorder,
    },
    main: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    inputArea: {
        marginTop: hp(5),
    },
    logo: {
        alignSelf: 'center',
        marginBottom: hp(6),
    },
    textArea: {
        marginTop: hp(5),
    },
    forgetText: {
        marginTop: hp(4),
        fontSize: RFValue(14),
        color: colors.darkGray,
    },
    dontText: {

    },
    createText: {
        color: colors.primary,
        fontSize: RFValue(16)
    },
    bottomText: {

        color: colors.lightGray,
        fontSize: RFValue(19)
    },
    footer: {
        position: 'absolute',
        bottom: hp(8),
    }
})

export default CheckoutSignIn
