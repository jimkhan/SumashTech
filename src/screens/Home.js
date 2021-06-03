import React, {useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, VirtualizedList } from 'react-native'

import { FlatList } from 'react-native-gesture-handler'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';


import Header from '../components/Header'
import SearchParamiterCard from '../components/SearchParamiterCard'
import BestDealCard from '../components/BestDealCard'
import Search from '../components/Search'
import Categories from '../components/Categories'
import CardPromosion from '../components/CardPromosion'
import NewProductCart from '../components/NewProductCart'
import AppTitleText from '../components/AppTitleText'
import ProductCard from '../components/ProductCard'

import colors from '../config/colors'
import baseUrl from '../API/BaseUrl'

import axios from 'axios';


var num = 0;

const data = [

    {
        id: num++,
        alin: "jim",
    },
    {
        id: num++,
        alin: "jim",
    },
    {
        id: num++,
        alin: "jim",
    },
    {
        id: num++,
        alin: "jim",
    },
    {
        id: num++,
        alin: "jim",
    },
    {
        id: num++,
        alin: "jim",
    },
    {
        id: num++,
        alin: "jim",
    },
    {
        id: num++,
        alin: "jim",
    },
    {
        id: num++,
        alin: "jim",
    },
    {
        id: num++,
        alin: "jim",
    },

]


const Home = ({ navigation }) => {

    const renderItem = (item, index) => {
        return (
            <ProductCard

                title={"Xiaomi note 9 pro"}
                description={"64 GB memory"}
                previousPrice={"BDT 17,000/-"}
                currentPrice={"BDT 16,990/-"}
                saleOff={80}
                item={item}
            />
        )
    }
    const renderItemOne = (item, index) => {
        return (
            <NewProductCart

            />
        )
    }

    const getDataUsingSimpleGetCall = () => {
        axios
          .get(baseUrl+"categories")
          .then(function (response) {
            // handle success
            const data = JSON.stringify(response.data)
            // alert(data);
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          })
          .finally(function () {
            // always executed
            // alert('Finally called');
          });
      };

      useEffect(() => {
        getDataUsingSimpleGetCall()
      }, [])


    return (

        <View style={styles.container}>
            <Header />
            <Search />
        

            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', width: wp(100), paddingBottom: hp(5), zIndex: 99, }}>
            <AppTitleText style={styles.headerText} >New Launches Products</AppTitleText>


                <View style={styles.newitemsArea} >

                    <FlatList
                        data={data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        legacyImplementation={false}
                        // scrollEnabled={false}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItemOne}
                    />


                </View>

                <SearchParamiterCard/>


                <View style={styles.itemsArea} >
                <ScrollView horizontal  contentContainerStyle={{ height: hp(50), alignItems: 'center', width: wp(90), }}>

                    <FlatList
                        data={data}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        legacyImplementation={false}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    
                    />
                </ScrollView>

                </View>



                <View>
                <AppTitleText style={styles.headerText} >Best Deals</AppTitleText>
                    <BestDealCard
                        title={"iPhone 12 Max Pro"}
                        previousPrice={150000}
                        currentPrice={12000 }
                        image={require("../img/iphone.png")}
                    />
                    <BestDealCard
                        title={"iPhone 12 Max Pro"}
                        previousPrice={150000}
                        currentPrice={12000 }
                        image={require("../img/iphone.png")}
                    />
                    <BestDealCard
                        title={"iPhone 12 Max Pro"}
                        previousPrice={150000}
                        currentPrice={12000 }
                        image={require("../img/iphone.png")}
                    />
                    <BestDealCard
                        title={"iPhone 12 Max Pro"}
                        previousPrice={150000}
                        currentPrice={12000 }
                        image={require("../img/iphone.png")}
                    />
                    <BestDealCard
                        title={"iPhone 12 Max Pro"}
                        previousPrice={150000}
                        currentPrice={12000 }
                        image={require("../img/iphone.png")}
                    />
                    <BestDealCard
                        title={"iPhone 12 Max Pro"}
                        previousPrice={150000}
                        currentPrice={12000 }
                        image={require("../img/iphone.png")}
                    />
                    
                    
                </View>


            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    newitemsArea: {
        height: hp(25),

    },
    itemsArea: {
        marginTop: hp(1),
        height: hp(50),
        width: wp(90),
        alignItems: 'center',
        // flexDirection: 'row',
    },
    categotyBottom: {
        width: wp(90),
        borderColor: colors.secondaryBorder,
        borderBottomWidth: 1,
        marginBottom: hp(1),
    },
    headerText: {
        alignSelf: 'stretch',
        marginLeft: wp(5),
        marginTop: hp(2),
    },
    button: {
        width: wp(90),
        height: hp(7),
        marginBottom: hp(1),
        borderRadius: hp(4),
        borderColor: colors.secondaryBorder,
        borderWidth: 1,
    }

})

export default Home
