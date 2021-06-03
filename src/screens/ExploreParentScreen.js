import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

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


const ExploreParentScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Header />
            <Search />
            <AppTitleText style={styles.title} >Sub Category</AppTitleText>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', width: wp(100), }}>
                <Categories
                    name={"Cooking Stuff"}
                    onPress={()=> navigation.navigate("ExploreChildScreen")}
                />
                <Categories
                    name={"Cooking Stuff"}

                />
                <Categories
                    name={"Cooking Stuff"}

                />
                <Categories
                    name={"Cooking Stuff"}

                />
                <Categories
                    name={"Cooking Stuff"}

                />
                <Categories
                    name={"Cooking Stuff"}

                />

                <View style={styles.categotyBottom} />

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
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
export default ExploreParentScreen
