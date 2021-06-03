import React, {useContext, useState, useEffect} from 'react'
import { View, StyleSheet, ScrollView, FlatList } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';


import Header from '../components/Header'
import Search from '../components/Search'
import SearchParamiterCard from '../components/SearchParamiterCard'
import ProductCard from '../components/ProductCard'

import colors from '../config/colors'

import ShopContext from '../Context/shop-context'

var num = 0;

import baseUrl from '../API/BaseUrl'

import axios from 'axios';


const Explore = ({ navigation }) => {

    const context = useContext(ShopContext);
    const [apiData, setApiData]= useState("")


    const getDataUsingSimpleGetCall = () => {
        axios
          .get(baseUrl+"products/allproducts")
          .then(function (response) {
            // handle success
            const data = JSON.stringify(response.data)
            // const data = JSON.stringify(data.ProductCount)
            // const { products } = data;
            // alert(JSON.stringify(response.data.products));
            setApiData(response.data.products)
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
        // console.log(apiData)
        // fetchData()
      }, [])



    const renderItem = ({item}) => {
        return (
            <>
            
            <ProductCard

                title={item.title}
                image={item.image1}
                description={item.memory}
                previousPrice={item.previousPrice}
                currentPrice={item.regularPrice}
                saleOff={item.saleOff}
                item={item}
            />

            </>
        )
    }

 

    return (
        <View style={styles.container} >
            <Header />
            <Search />
            <SearchParamiterCard/>

            <FlatList
                data={apiData}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                legacyImplementation={false}
                keyExtractor={data => data._id}
                renderItem={renderItem}
                style={{ alignSelf: "center" }}

            />
            {/* {
                this.data.map( d => console.log(d))
            } */}

            




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

export default Explore
