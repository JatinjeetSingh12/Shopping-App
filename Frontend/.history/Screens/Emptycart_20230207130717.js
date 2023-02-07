import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import ShopContext from '../context/ShopContext';


const Emptycart = () => {
    const context = useContext(ShopContext);

    const { getcartitems } = context
    useEffect(() => { getcartitems() }, [])

    return (
        <View style={styles.container}>
            <View style={styles.cart}>
                <Text style={styles.carttxt}>Cart</Text>
            </View>
            <View style={styles.logo} >
                <AntDesign name="shoppingcart" size={154} color="steelblue" />
                <Text style={{ fontSize: 30, marginVertical: 10 }}>Cart is Empty</Text>
            </View>
            <View>

            <TouchableOpacity style={{width:'90%'}}>
                <Text>Start Shopping</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Emptycart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: 'snow'
    },
    cart: {
        flex: 1,
    },
    carttxt: {
        fontSize: 40,
        fontWeight: '500',
    },
    logo: {
        flex: 3,
        marginVertical: 50
    }
})