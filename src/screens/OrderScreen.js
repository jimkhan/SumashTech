import React, {useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, VirtualizedList } from 'react-native'

import { FlatList } from 'react-native-gesture-handler'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';


import Header from '../components/Header'
import AppTitleText from '../components/AppTitleText'
import AppMediumText from '../components/AppMediumText'

import OrderHistroy from '../components/OrderHistroy'
import Search from '../components/Search'
import colors from '../config/colors';

const OrderScreen = () => {
    return (
        <View style={styles.main} >
            <Header/>
            <AppTitleText style={styles.title} >My Orders</AppTitleText>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', width: wp(100), paddingBottom: hp(5), zIndex: 99, }}>
                 <AppMediumText style={styles.subtitle} >Active order</AppMediumText>

                <OrderHistroy/>
                <OrderHistroy/>
                <OrderHistroy/>
                <OrderHistroy/>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: colors.white,
    },
    title:{

    },
    subtitle:{

    },
})

export default OrderScreen
