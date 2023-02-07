import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ShopContext from '../context/ShopContext'

const Addtocart = () => {
  const context = useContext(ShopContext);
  const { Cart, getcartitems } = context
  useEffect(() => { getcartitems() }, [])
  return (
    <View style={{ backgroundColor: 'white', height: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 40 }}>
      <View>
        <Text>
          Add
        </Text>
      </View>
      <FlatList data={Cart} renderItem={({ item }) => {
        return (
          <>
            <View>
              <Text>{item.name}</Text>
            </View>
          </>
        )
      }} />
    </View>
  )
}

export default Addtocart

const styles = StyleSheet.create({})