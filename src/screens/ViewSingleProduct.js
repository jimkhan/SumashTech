import React, { useState, useRef, useEffect, useContext } from 'react'
import { View, ScrollView, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import colors from '../config/colors';

import { Picker } from '@react-native-picker/picker';

import Header from '../components/Header'
import AppText from '../components/AppText'
import AppTitleText from '../components/AppTitleText'
import AppMediumText from '../components/AppMediumText'
import AppButton from '../components/AppButton'
import Search from '../components/Search'

// for galry

const IMAGE_SIZE = hp(8);
const SPACING = wp(3);
const width = hp(30)
const height = hp(30)

// for galry

import ShopContext from '../Context/shop-context'


const ViewSingleProduct = ({ title, price, unit, description, route, navigation }) => {

    const context = useContext(ShopContext);

    const [iiD, setID] = useState(0);

    const { image, item } = route.params;
    console.log(item)


    /// for galary

    const horaizantalRef = useRef();
    const varticalRef = useRef();
    let iD = 0;

    const imgData = [
        { id: iD++, image: image, },
        { id: iD++, image: item.image2, },
        { id: iD++, image: item.image3, },
        { id: iD++, image: item.image4, },
        { id: iD++, image: item.image5, },
        // { id: iD++, image: item.image6, },
        // { id: iD++, image: item.image7, },
        // { id: iD++, image: item.image8, },

    ]
    const [images, setimages] = useState([

    ]);
    const [data, setData] = useState([]);

    const [activeIndex, setActiveIndex] = useState(0)


    const scroolToActiveIndex = (index) => {
        setActiveIndex(index)
        horaizantalRef.current?.scrollToOffset({
            offset: index * width,
            animated: true
        })

        if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
            varticalRef?.current.scrollToOffset({
                offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
                animated: true
            })
        } else {
            varticalRef?.current.scrollToOffset({
                offset: 0,
                animated: true
            })

        }

    }



    ///




    return (
        <View style={styles.main} >
            {/* <Header /> */}
            <Header />
            <Search />

            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', width: wp(100), }}>

                <AppMediumText>Say Hello To</AppMediumText>
                <AppTitleText>{item.title}</AppTitleText>
                <AppText><AppMediumText>Category:</AppMediumText> {item.category.categoryName}</AppText>
                <AppText><AppMediumText>Brand:</AppMediumText> {item.model}</AppText>



                {/* <AppTitleText style={styles.titleText} >Porem Ipsum Extended Product Name </AppTitleText> */}

                {/* galary */}

                <View style={styles.container} >

                    <FlatList
                        ref={horaizantalRef}
                        data={imgData}
                        style={styles.bigImage}
                        horizontal
                        pagingEnabled
                        onMomentumScrollEnd={(ev) => {
                            scroolToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
                        }}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        // keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.imagArea} >
                                    {/* {console.log(item.id)} */}
                                    <Image source={{ uri: item.image }} // Use item to set the image source
                                        key={item.id} // Important to set a key for list items
                                        style={styles.imgf}

                                    />
                                </View>
                            )
                        }}
                    />

                </View>
                <View style={styles.flatListTwo} >
                    <FlatList
                        ref={varticalRef}
                        data={imgData}
                        horizontal
                        // pagingEnabled
                        // style={styles.imageHoraizantal}
                        contentContainerStyle={{ paddingHorizontal: 10, }}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => scroolToActiveIndex(index)} >
                                    <Image source={{ uri: item.image }} // Use item to set the image source
                                        key={item.id} // Important to set a key for list items

                                        style={[styles.imgH, { borderColor: activeIndex === index ? colors.primary : "transparent", }]}
                                    />
                                </TouchableOpacity>
                            )

                        }}

                    />
                </View>
                {/* galary */}

                <AppTitleText>Available colors</AppTitleText>

                <View style={styles.keyFeature} >
                    {/* <AppMediumText style={[styles.keyText, styles.keyTextTitle]} >Key features</AppMediumText> */}

                    {/* <FlatList
                        data={item.keyFeatures}
                        keyExtractor={(item)=> item}
                        renderItem={({item})=>{
                            <AppText style={[styles.keyText,]} >{'\u2B24'} {item}</AppText>
                        }}
                    /> */}

                    {/* <AppText style={[styles.keyText,]} >{'\u2B24'} Octacore processor</AppText>
                    <AppText style={[styles.keyText,]} >{'\u2B24'} 13 MP Camera</AppText>
                    <AppText style={[styles.keyText,]} >{'\u2B24'} 5020 mAh battery</AppText> */}
                    <AppMediumText style={[styles.keyText, styles.keyTextTitle]} >Key features</AppMediumText>
                    <ScrollView horizontal contentContainerStyle={{  width: wp(90), }}>
                        <FlatList

                            data={item.keyFeatures}
                            // style={{ marginBottom: hp(5), }}
                            showsVerticalScrollIndicator={false}
                            legacyImplementation={false}
                            keyExtractor={(item) => item}
                            renderItem={({item})=>{

                                return(
                                        <AppText style={styles.keyText} >{'\u2B24'} {item}</AppText>
                                )
                                
                            }}


                        />
                    </ScrollView>

                </View>
                <View style={styles.buttonArea} >
                    <AppButton name={"Buy now"} style={styles.button} onPress={() => {
                        context.addProductToCart(item);
                        navigation.navigate("ShopingCartScreen")

                    }} />
                    <AppButton name={"Add to cart"} style={[styles.button, styles.buttonTwo]} onPress={context.addProductToCart.bind(this, item)} />

                </View>


                <AppTitleText>Full specification</AppTitleText>
                {image &&
                    <View style={styles.imageSixArea} >
                        <Image source={{ uri: item.image6 }} style={styles.imageSix} />

                    </View>
                }



                <AppTitleText>{item.thirdTitle}</AppTitleText>
                {image &&
                    <View style={styles.imageSixArea} >
                        <Image source={require("../img/Image5.jpg")} style={styles.imageSix} />

                    </View>
                }

                <AppTitleText>{item.titleFour}</AppTitleText>
                {image &&
                    <View style={styles.imageSixArea} >
                        <Image source={{ uri: item.image8 }} style={styles.imageSix} />

                    </View>
                }
                <AppText>{item.subtitle}</AppText>






            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageSixArea: {
        width: wp(90),
        // height: hp(33),
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonTwo: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,

    },
    buttonArea: {
        width: wp(90),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly',

    },
    imageSix: {
        width: hp(30),
        height: hp(30),
    },
    flatListTwo: {
        width: wp(80),
        height: hp(14),
        // backgroundColor: colors.gray,
        alignItems: 'center',
        paddingTop: hp(2),

    },
    fullSpecification: {
        width: wp(90),
        minHeight: hp(15),
    },
    keyFeature: {
        width: wp(90),

    },
    keyTextTitle: {
        alignSelf: "stretch",
        paddingLeft: wp(0),
        fontSize: RFValue(16)
    },
    keyText: {
        alignSelf: "stretch",
        // color: colors.danger,
        // paddingLeft: wp(5),
    },
    button: {
        width: hp(20),
        height: hp(5.5),
        borderRadius: hp(3),
        marginBottom: hp(3),
        marginTop: hp(2),
    },



    ///

    container: {
        width: hp(30),
        height: hp(31),
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: hp(1),
        // backgroundColor: colors.green,
    },
    imagArea: {
        margin: hp(1),

    },
    imgf: {
        width: hp(28),
        height: hp(30),
        borderRadius: hp(2),

    },

    imgH: {
        width: hp(8),
        height: hp(8),
        borderRadius: SPACING,
        marginRight: SPACING,
        borderWidth: 3,

    }

})

export default ViewSingleProduct
