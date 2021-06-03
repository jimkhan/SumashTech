import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';


import CommonHeadWithButton from '../components/CommonHeadWithButton'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTitleText from '../components/AppTitleText'

import colors from '../config/colors'
const PaymentMathod = ({ navigation }) => {

    const [button, setButton] = useState(false)
    const [buttonOnline, setButtonOnline] = useState(false)
    const active = {
        backgroundColor: colors.yellowLight,
        borderColor: colors.green,
        borderRadius: hp(.5),
        borderWidth: hp(.6),
    }
    const inActive = {
        backgroundColor: colors.lightGrayMOre,
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 0,
    }
    const [activeColors, setActiveColors] = useState(inActive)
    const [activeColorsOnline, setActiveColorsOnline] = useState(inActive)


    return (
        
        <View style={styles.container} >
            <CommonHeadWithButton
                textLeft={"Checkout"}
                iconRight={"window-close"}
                iconColor={colors.danger}
            />
            <AppText style={styles.textTop} >How do you wanna pay?</AppText>
            <View style={styles.subcontainer} >
                <View style={styles.common} ><AppTitleText style={styles.numberColor} >1</AppTitleText></View>
                <View style={styles.barColor} ></View>
                <View style={styles.common} ><AppTitleText style={styles.numberColor} >2</AppTitleText></View>
                <View style={styles.barColor} ></View>
                <View style={styles.common} ><AppTitleText style={styles.numberColor} >3</AppTitleText></View>
                <View style={styles.barColor} ></View>
                <View style={styles.common} ><AppTitleText style={styles.numberColor}>4</AppTitleText></View>
            </View>
            <AppTitleText style={[styles.activeText, styles.title]} >Payment Method</AppTitleText>
            <TouchableOpacity style={[styles.paymentOption, activeColors]} onPress={() => { setButton(!button), button === true ? setActiveColors(active) : setActiveColors(inActive) }} >
                <View>
                    <Image source={require("../img/CashOnDelivery.png")} style={styles.img} />
                </View>
                <View style={styles.textContainer} >
                    <AppTitleText style={styles.titleText} >Cash on Delivery</AppTitleText>
                    <AppText style={styles.descriptext} >Pay the cash to the delivery man after you recieve your goods.</AppText>

                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.paymentOption, activeColorsOnline]} onPress={() => { setButtonOnline(!buttonOnline), buttonOnline === true ? setActiveColorsOnline(active) && setButton(false) : setActiveColorsOnline(inActive) }} >
                <View>
                    <Image source={require("../img/OnlinePayment.png")} style={styles.img} />
                </View>
                <View style={styles.textContainer} >
                    <AppTitleText style={styles.titleText}  >Pay Online</AppTitleText>
                    <AppText style={styles.descriptext} >Use the payment option of your choice and pay right now.</AppText>


                </View>
            </TouchableOpacity>
            <AppButton name={"Finish Payment"}
                onPress={() => navigation.navigate("OrderSuccessful")}
                style={styles.button} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    img: {
        width: hp(10),
        height: hp(10),
        marginHorizontal: wp(5),
    },
    button: {
        alignSelf: 'center',
        marginTop: hp(8),
    },
    descriptext: {
        alignSelf: "stretch",
    },
    titleText: {
        alignSelf: 'stretch',
        color: colors.black,
    },
    textContainer: {
        width: wp(55),
        minHeight: hp(12),
        justifyContent: 'space-around'
    },
    paymentOption: {
        width: wp(90),
        minHeight: hp(16),
        marginTop: hp(2),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',


    },
    title: {
        marginBottom: hp(2),
    },
    textTop: {
        color: colors.danger,
        alignSelf: 'stretch',
        paddingLeft: wp(3),
        fontSize: RFValue(16),
    },
    subcontainer: {
        width: wp(80),
        height: hp(10),
        // backgroundColor: colors.yellow,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    activeBack: {
        backgroundColor: colors.secondaryBorder,
    },
    activeText: {
        color: colors.primary,
    },
    common: {
        alignItems: 'center',
        justifyContent: 'center',
        width: hp(5),
        height: hp(5),
        borderRadius: hp(3),
        backgroundColor: colors.secondaryBorder,
    },
    barColor: {
        width: wp(7),
        height: hp(.5),
        backgroundColor: colors.secondaryBorder,
    },
    numberColor: {
        color: colors.primary,
    }
})

export default PaymentMathod
