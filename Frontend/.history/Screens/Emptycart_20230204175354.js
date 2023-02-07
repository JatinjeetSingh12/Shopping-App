import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const Emptycart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cart}>
                <Text>Cart</Text>
            </View>
            <View style={styles.logo} >
            <AntDesign name="shoppingcart" size={114} color="black" />
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
        paddingTop:40
    },
    cart:{
        flex:1
    },
    carttxt:{}
    logo:{
        flex:3
    }
})