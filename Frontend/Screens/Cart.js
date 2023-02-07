import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import Emptycart from './Emptycart'

import Addtocart from './Addtocart'
const Cart = ({navigation}) => {

    const context = useContext(ShopContext);
    const { Cart } = context

    return (
        <>
            {Cart.length == 0 ? (
                <Emptycart navigation={navigation} />
            ) : (
                <Addtocart navigation={navigation} />
            )}
        </>
    )
}

export default Cart

const styles = StyleSheet.create({})