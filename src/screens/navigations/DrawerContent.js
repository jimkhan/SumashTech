import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

export function DrawerContent(props) {
    const paperTheme = useTheme();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section
                        style={{
                            borderBottomWidth: wp(0.1),
                            borderColor: colors.iconColor,
                            paddingBottom: hp(2),
                            width: wp(90),
                        }}>
                        <TouchableRipple
                            style={styles.userInfoSection}
                            onPress={() => props.navigation.navigate('Profile')}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://via.placeholder.com/150',
                                    }}
                                    size={60}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>John Doe</Title>
                                    <Caption style={styles.caption}>
                                        johndoe@placeholder.con
                  </Caption>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home-outline" color={'#118A92'} size={size} />
                            )}
                            label="Home"
                            labelStyle={styles.drawerItemLable}
                            onPress={() => {
                                props.navigation.navigate('Home');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="shopping-outline" color={'#118A92'} size={size} />
                            )}
                            label="Orders"
                            labelStyle={styles.drawerItemLable}
                            onPress={() => {
                                props.navigation.navigate('OrderScreen');
                            }}
                        />
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ticket-percent-outline" 
                                color={"#118A92"}
                                size={size}
                                />
                            )}
                            label="Promos"
                            labelStyle={styles.drawerItemLable}
                            onPress={() => {props.navigation.navigate('PromoScreen')}}
                        /> */}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="focus-field" color={'#118A92'} size={size} />
                            )}
                            label="Product"
                            labelStyle={styles.drawerItemLable}
                            onPress={() =>
                                props.navigation.navigate('Explore', { screen: 'Explore' })
                            }
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="cog-outline" color={'#118A92'} size={size} />
                            )}
                            label="Settings"
                            labelStyle={styles.drawerItemLable}
                            onPress={() => {
                                props.navigation.navigate('SettingsScreen');
                            }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="help-circle-outline"
                                    color={'#118A92'}
                                    size={size}
                                />
                            )}
                            label="Help/FAQ"
                            labelStyle={styles.drawerItemLable}
                            onPress={() => {
                                props.navigation.navigate('FAQ');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="information-outline"
                                    color={'#118A92'}
                                    size={size}
                                />
                            )}
                            label="About us"
                            labelStyle={styles.drawerItemLable}
                            onPress={() => {
                                props.navigation.navigate('AboutUs');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="logout" color={'#118A92'} size={size} />
                            )}
                            label="Logout"
                            labelStyle={styles.drawerItemLable}
                            onPress={() => {
                                props.navigation.navigate('LogIn');
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    drawerItemLable: {
        fontFamily: 'Exo-Regular',
        fontWeight: '400',
        fontSize: 16,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
