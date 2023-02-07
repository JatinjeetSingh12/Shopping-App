import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

const Categories = () => {
  const context = useContext(ShopContext);
  const {Cart} = context
  return (
    <View style={{ backgroundColor: 'white', height: '100%',alignItems:'center',justifyContent:'center' }}>
      <FlatList data={Cart} renderItem={({item})=>{
        <>
        <Text>{Cart.name}</Text>
        </>
      }} />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})