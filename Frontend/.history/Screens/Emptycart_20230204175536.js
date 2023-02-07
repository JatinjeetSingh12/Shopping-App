import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const Emptycart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cart}>
                <Text style={styles.carttxt}>Cart</Text>
            </View>
            <View style={styles.logo} >
            <AntDesign name="shoppingcart" size={154} color="steelblue" />
            <Text>Cart is Empty</Text>
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
        paddingTop:40,
        backgroundColor:'white'
    },
    cart:{
        flex:1
    },
    carttxt:{
        fontSize:40,
        fontWeight:'500'
    },
    logo:{
        flex:3
    }
})