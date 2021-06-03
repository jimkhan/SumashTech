import React, { useContext } from 'react'
import { View, StyleSheet, ScrollView, FlatList } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../config/colors'

import Header from '../components/Header'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import Search from '../components/Search'
import Categories from '../components/Categories'
import CardPromosion from '../components/CardPromosion'
import AppTitleText from '../components/AppTitleText'
import ProductCard from '../components/ProductCard'

import ShopContext from '../Context/shop-context'

const ExploreChildScreen = () => {

    const context = useContext(ShopContext);


    return (
        <View style={styles.container} >
            <Header />
            <Search />
            <AppTitleText style={styles.title} >Category Items</AppTitleText>
            <View style={styles.list} >
                <FlatList

                    data={context.products}
                    keyExtractor={(products) => products.id}
                    renderItem={(product) => {
                        return (
                            <ProductCard
                                title={product.item.title}
                                price={product.item.price}
                                onPressAddToCart={context.addProductToCart.bind(this, product.item)}


                            />
                        )
                    }}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    list:{
        flex: 1,
        width: wp(100),
        alignItems: 'center',
    },
    categotyBottom: {
        width: wp(90),
        borderColor: colors.secondaryBorder,
        borderBottomWidth: 1,
        marginBottom: hp(1),
    },
    title: {
        alignSelf: 'stretch',
        marginTop: 0,
        paddingLeft: wp(5),
        marginBottom: hp(2),
    }
})

export default ExploreChildScreen
