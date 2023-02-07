import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

const Categories = () => {
  const context = useContext(ShopContext);
  const {Cart} = context
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      {C}
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})