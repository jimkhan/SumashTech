import React from 'react'
import { Image, StyleSheet } from 'react-native'

import { Deals, Products, HomeI, User, Notification } from 'svg'


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();
// ios-cube-outline   Ionicon
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import colors from '../../config/colors'
import DealsScreen from '../DealsScreen'
import ExploreStack from '../navigations/ExploreStack'
import Home from '../Home'
import Profile from '../Profile'
import FavoriteItems from '../FavoriteItems'
import NotificationsScreen from '../NotificationsScreen'
import { heightPercentageToDP } from 'react-native-responsive-screen';

export function TabBarScreen(props){

    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#118A92"
        inactiveColor="#fff"
        tabBarLabel= ""
        barStyle={{ backgroundColor: '#fff',  }}
    >
      <Tab.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          tabBarLabel: 'Deals',
          tabBarIcon: ({ color }) => (
            <Deals hwight={26} width={26} fill={color} viewBox={"0 32 80 90"} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        initialRouteName={"Explore"}
        component={ExploreStack}
        tabPress={()=>{
          props.navigation.navigate("Explore")
        }}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color }) => (
            <Products hwight={30} width={30} fill={color} viewBox={"0 27 70 100"} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeI hwight={26} width={26} fill={color} viewBox={"0 30 90 80"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <User hwight={26} width={26} fill={color} viewBox={"0 0 30 53"} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifiacation',
          tabBarIcon: ({ color }) => (
            <Notification hwight={26} width={26} fill={color} viewBox={"0 0 80 300"} />
          ),
        }}
      />
    </Tab.Navigator>

        // <Tab.Navigator
        //     initialRouteName="Home"
        //     activeColor= {  colors.primaryLight }
        //     inactiveColor = { colors.black }
        //     barStyle={{ backgroundColor: colors.white }}
        
        // >
           
        //     {/* <Tab.Screen
        //         name="Explore"
        //         initialRouteName="Explore"
        //         component={ExploreStack}
        //         options={{
        //             tabBarLabel: 'Explore',
        //             // initialRouteName: "Explore",
        //             // tabBarColor: '#1f65ff',
        //             tabBarIcon: ({ color }) => (
        //                 <ExploreIcon name={"compass-outline"} size={26} color={color} />
        //             ),
        //         }}
        //     /> */}
        //     <Tab.Screen
        //         name="FavoriteItems"
        //         component={FavoriteItems}
        //         options={{
        //             tabBarLabel: 'Favorite',
        //             // tabBarColor: '#694fad',
        //             tabBarIcon: ({ color }) => (
        //                 <Icon name="heart-outline" color={color} size={26} />
        //             ),
        //         }}
        //     />
        //      <Tab.Screen
        //         name="Home"
        //         component={Home}
        //         options={{
        //             tabBarLabel: 'Home',
        //             // tabBarColor: '#009387',
        //             tabBarIcon: ({ color, size }) => (
        //                 <Icon name="home-outline" color={color} size={26} />
        //             ),
        //         }}
        //     />
        //     <Tab.Screen
        //         name="ChatSupport"
        //         component={ChatSupport}
        //         options={{
        //             tabBarLabel: 'Chat',
        //             // tabBarColor: '#d02860',
        //             tabBarIcon: ({ color, size }) => (
        //                 <Icon name="send-outline" color={color} size={26} />
        //             ),
        //         }}
        //     />
            
        // </Tab.Navigator>
    )

}
