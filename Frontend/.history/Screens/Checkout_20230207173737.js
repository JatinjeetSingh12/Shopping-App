import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Checkout = () => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:40}}>Total</Text>
        
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})