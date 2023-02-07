import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Account from '../Screens/Account';
import Cart from '../Screens/Cart';



const Tab = createBottomTabNavigator();




const BottomNavigation = () => {
    return (
        <Tab.Navigator initialRouteName='home' tabBarOption={{
            showLabel: false
        }}>
            <Tab.Screen name='home' component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name='cart' component={ Cart} options={{ headerShown: false }} />
            <Tab.Screen name='account' component={Account} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}


export default BottomNavigation
const styles = StyleSheet.create({})