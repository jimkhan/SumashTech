import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Image } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

import Header from '../components/Header'
import OrderHistroy from '../components/OrderHistroy'
import AppText from '../components/AppText'
import AppTitleText from '../components/AppTitleText'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'

const Profile = () => {

    const [buttonName, setButtonName] = useState("Edit profile");
    const [isDisabeled, setIsDisabeled ] =  useState(true);
    const [isEditable, setIsEditable ] =  useState(false);
    const [name, setName ] =  useState("Stephen hawkin");
    const [mobile, setSetMobile ] =  useState("+8801678452627");
    const [address, setAdderss ] =  useState("Deara, Rupsha, Khulna");


    // const email = "johndoe@placeholder.com"
    // const phoneNumber = "+8801989562431"
    // const address = "123, Unreal Street, Imaginary City, Place Holder Town"

    return (

        <View style={styles.main} >
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', width: wp(100), }}>
            <View style={styles.userInfo} >

                <View style={styles.imageArea} >
                    <Image source={require('../img/profile.png')} style={styles.img} />

                </View>


                <View style={styles.textArea} >

                    <AppTextInput
                        value={name}
                        onChangeText={(val)=>  setName(val)}
                        styleMain={{ alignSelf: 'center', }}
                        style={{ backgroundColor: colors.white, width: wp(80), elevation: 1 , }}
                        styletext={{ width: wp(60),color: colors.grayText, }}
                        icon={"md-create-outline"}
                        iconColor={{ color: colors.grayDark }}
                        editable={isEditable}
                    />
                    <AppTextInput
                        value={mobile}
                        onChangeText={(val)=>  setSetMobile(val)}
                        styleMain={{ alignSelf: 'center', }}
                        style={{ backgroundColor: colors.white, width: wp(80), elevation: 1, }}
                        styletext={{ width: wp(60), color: colors.grayText, }}
                        icon={"md-create-outline"}
                        iconColor={{ color: colors.grayDark }}
                        editable={isEditable}

                    />
                    <AppTextInput
                        title={"Delevery address"}
                        value={address}
                        onChangeText={(val)=>  setAdderss(val)}
                        styleMain={{ alignSelf: 'center', }}
                        style={{ backgroundColor: colors.white, width: wp(80), elevation: 1, height: hp(10), alignItems: "flex-start" }}
                        styletext={{ width: wp(60),color: colors.grayText, }}
                        icon={"md-create-outline"}
                        iconColor={{ color: colors.grayDark }}
                        editable={isEditable}
                        multiline
                        numberOfLines={4}

                    />

                </View>
                <AppButton name={buttonName}textStyle={{ fontSize: RFValue(14) }}  style={styles.button}  onPress={()=> {
                    { buttonName === "Edit profile" ? setButtonName("Update profile"): setButtonName("Edit profile") };
                    setIsEditable(!isEditable)
                }} />
            </View>
           
                <OrderHistroy/>
                <OrderHistroy/>
                <OrderHistroy/>
                <OrderHistroy/>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white,

    },
    img: {
        width: hp(12),
        height: hp(12),
        borderRadius: hp(6),

    },
    text: {
        alignSelf: 'stretch'
    },
    button:{
        width: wp(40),
        borderRadius: hp(3),
        marginTop: hp(3),
        height: hp(5),
    },
    textOrder: {
        alignSelf: 'stretch',
        marginTop: hp(3),
        color: colors.gray,
        marginHorizontal: wp(5),
        fontFamily: 'Exo-Bold'
    },
    userInfo: {
        width: wp(90),
        minHeight: hp(30),
        alignItems: 'center',
        paddingVertical: hp(3),
        borderRadius: hp(1),
        backgroundColor: colors.lightGrayMOre,
        borderColor: colors.lightGray,
        borderWidth: 1,
    },

    imageArea: {
        width: hp(12),
        height: hp(12),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "blue",
        borderColor: colors.secondaryBorder,
        borderWidth: 1,
        borderRadius: hp(7),


    },
    titleArea: {
        paddingHorizontal: wp(5),
    },
    textArea: {
        marginTop: wp(2),

    },
    editArea: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(1),
    },
    titleText: {
        fontSize: RFValue(16)
    },
    editText: {
        fontSize: RFValue(12),
        marginRight: wp(2),
        color: colors.lightGray,
    },
    email: {
        marginBottom: hp(1),
    },
    phone: {
        marginBottom: hp(1),
    },
    address: {
        marginBottom: hp(1),
    }

})
export default Profile
