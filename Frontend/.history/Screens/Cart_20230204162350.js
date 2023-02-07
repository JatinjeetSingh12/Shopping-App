import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

const Cart = () => {

    const context = useContext(ShopContext);
    const { Cart } = context

    return (
        <View>
            {}
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})