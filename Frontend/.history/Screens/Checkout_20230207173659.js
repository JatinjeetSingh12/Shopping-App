import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Checkout = () => {
  return (
    <View style={styles.container}>
        <Text>Total</Text>
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})