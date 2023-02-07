import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import ShopContext from '../context/ShopContext';


const Emptycart = ({navigation}) => {
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
            <View style={{alignItems:'center',marginBottom:2}}>
            <TouchableOpacity style={{width:350,height:50, alignItems:'center',backgroundColor:'black',borderRadius:20}}>
                <Text style={{color:'white',fontSize:20,paddingTop:10}}>Start Shopping</Text>
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