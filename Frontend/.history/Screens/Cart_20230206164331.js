import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import Emptycart from './Emptycart'

import Addtocart from './Addtocart'
const Cart = () => {

    const context = useContext(ShopContext);
    const { Cart } = context

    console.log(Cart.length)

    return (
        <>
            {Cart.length == 0 ? (
                <Emptycart />
            ) : (
                <Addtocart />
            )}
        </>
    )
}

export default Cart

const styles = StyleSheet.create({})