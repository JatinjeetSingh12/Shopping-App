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
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 40, fontWeight: '500' }}>
            Cart
          </Text>
        </View>
        <View style={{ borderWidth: 1 }}>
          {Cart.map((item) => {
            return (
              <>
                <View style={{ flexDirection: 'row', borderWidth: 1 }}>
                  <View>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: item.img }} />
                  </View>
                  <View>
                    <View>
                      <Text style={{ fontSize: 25, margin: 5 }}>{item.name}</Text>
                      <Text style={{ fontSize: 20, fontWeight: '500', margin: 5 }}>Rs.{item.price}</Text>
                    </View>
                    <View>
                      Remove
                    </View>
                  </View>
                </View>
              </>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

export default Addtocart

const styles = StyleSheet.create({})