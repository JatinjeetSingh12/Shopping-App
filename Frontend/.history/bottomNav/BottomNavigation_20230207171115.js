import { StyleSheet, } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Account from '../Screens/Account';
import Cart from '../Screens/Cart';
import { Entypo ,AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();




const BottomNavigation = () => {
    return (
        <Tab.Navigator initialRouteName='home' >
            <Tab.Screen name='home' component={Home} options={{
                headerShown: false, tabBarIcon: () => {
                     return   <Entypo name="home" size={24} color="blue" />
                        
                    }
                }} />
            <Tab.Screen name='cart' component={Cart}  options={{ headerShown: false, tabBarIcon:()=>{
              return  <AntDesign name="shoppingcart" size={24} color="black" />
            }}} />
            <Tab.Screen name='account' component={Account} options={{ headerShown: false,tabBarIcon:()=>{
             return   <AntDesign name="user" size={24} color="black" />
            } }}  />
        </Tab.Navigator>
    )
}


export default BottomNavigation
const styles = StyleSheet.create({})