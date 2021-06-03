import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import { DrawerContent } from './src/screens/navigations/DrawerContent'
import { TabBarScreen } from './src/screens/navigations/TabBarScreen'
import RootStackScreen from './src/screens/navigations/RootStackScreen'

import DealsScreen from './src/screens/DealsScreen'
import OrderScreen from './src/screens/OrderScreen'
import FAQ from './src/screens/FAQ'
import AboutUs from './src/screens/AboutUs'
import Profile from './src/screens/Profile'
import OrderDetailsScreen from './src/screens/OrderDetailsScreen'
import ShopingCartScreen from './src/screens/ShopingCartScreen'
import CheckoutSignIn from './src/screens/CheckoutSignIn'
import ShippingInfoScreen from './src/screens/ShippingInfoScreen'
import PaymentMathod from './src/screens/PaymentMathod'
import OrderSuccessful from './src/screens/OrderSuccessful'

import GlobalState from './src/Context/GlobalState'



const App = () => {

    const [islogIn, setIslogIn] = useState(true)
    return (

        <GlobalState>

        
            <NavigationContainer>
                { islogIn === true ? 
                    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
                    >
                        <Drawer.Screen name={"TabBarScreen"} component={TabBarScreen} />
                        {/* <Drawer.Screen name={"StackScreens"} component={StackScreens} /> */}
                        <Drawer.Screen name={"OrderScreen"} component={OrderScreen} />
                        <Drawer.Screen name={"DealsScreen"} component={DealsScreen} />
                        <Drawer.Screen name={"FAQ"} component={FAQ} />
                        <Drawer.Screen name={"AboutUs"} component={AboutUs} />
                        <Drawer.Screen name={"Profile"} component={Profile} />
                        <Drawer.Screen name={"OrderDetailsScreen"} component={OrderDetailsScreen} />
                        <Drawer.Screen name={"ShopingCartScreen"} component={ShopingCartScreen} />
                        <Drawer.Screen name={"CheckoutSignIn"} component={CheckoutSignIn} />
                        <Drawer.Screen name={"ShippingInfoScreen"} component={ShippingInfoScreen} />
                        <Drawer.Screen name={"PaymentMathod"} component={PaymentMathod} />
                        <Drawer.Screen name={"OrderSuccessful"} component={OrderSuccessful} />
                    </Drawer.Navigator>
                :
                    <RootStackScreen/>
                }

            </NavigationContainer>

        </GlobalState>
     
    )
}

export default App
