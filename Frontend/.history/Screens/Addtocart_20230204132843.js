import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ShopContext from '../context/ShopContext'

const Addtocart = () => {
  const context = useContext(ShopContext);
  const { Cart, getcartitems } = context
  useEffect(() => { getcartitems() }, [])
  return (
    <ScrollView style={{ backgroundColor: 'snow', height: '100%', }}>
      <View style={{ paddingTop: 40, flex: 1 }}>
        <View>
          <Text style={{ fontSize: 30, }}>
            Cart
          </Text>
        </View>
        {Cart.map((item) => {
          return (
            <>
              <View style={{ flexDirection: 'row' }}>
                <Image style={{width:100,height:100}} source={{uri:item.img}} />
              </View>
            </>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Addtocart

const styles = StyleSheet.create({})