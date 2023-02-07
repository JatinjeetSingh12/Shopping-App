import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ShopContext from '../context/ShopContext'

const Addtocart = () => {
  const context = useContext(ShopContext);
  const { Cart, getcartitems } = context
  useEffect(() => { getcartitems() }, [])
  return (
    <View style={{ backgroundColor: 'snow', height: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 40, flex: 1 }}>
      <View>
        <Text style={{ fontSize: 30 }}>
          Cart
        </Text>
      </View>
      {Cart}
    </View>
  )
}

export default Addtocart

const styles = StyleSheet.create({})