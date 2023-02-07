import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Emptycart = () => {
  return (
    <View style={styles.container}>
        <View>
            
        </View>
      <Text>Cart</Text>
    </View>
  )
}

export default Emptycart

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})