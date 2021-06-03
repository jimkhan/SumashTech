import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

import CommonHeadWithButton from '../components/CommonHeadWithButton'
import OrderHistroy from '../components/OrderHistroy'
import ItemDetails from '../components/ItemDetails'
import AppText from '../components/AppText'
import AppTitleText from '../components/AppTitleText'
import AppButton from '../components/AppButton'
import CardButton from '../components/CardButton'

const OrderDetailsScreen = () => {
    return (
        <View style={styles.container} >
            <CommonHeadWithButton
                iconLeft={"chevron-left"}
                textLeft={"Order Details"}
            // iconRight={"logout-variant"}
            // iconColor={colors.secondaryLight}
            />
            <OrderHistroy
                disabled={true}
                style={styles.order}
                orderid={"ih585431545"}
                time={"10:31 pm, Sept 27, 2020"}
                amount={987}
            />
            

            <AppText style={styles.itemtext} >Items</AppText>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', width: wp(100), }}>
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
                <ItemDetails
                    prise={123}
                    weight={"850gm"}
                    units={3}
                    totalPrice={246}
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    order: {
        backgroundColor: colors.white,
        borderWidth: 0,
    },
    itemtext: {
        alignSelf: 'stretch',
        paddingLeft: wp(5),
    }
})

export default OrderDetailsScreen
