import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ShopContext from '../context/ShopContext'
import { AntDesign } from '@expo/vector-icons';

const Addtocart = () => {
  const context = useContext(ShopContext);
  const { Cart, getcartitems,deletecartitems } = context
  const deletehandle = () => {

   }
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
              <View key={item._id} style={{ flexDirection: 'row', borderWidth: 1, }}>
                <View>
                  <Image style={{ width: 100, height: 100 }} source={{ uri: item.img }} />
                </View>

                <View>
                  <Text style={{ fontSize: 25, margin: 5 }}>{item.name}</Text>
                  <Text style={{ fontSize: 20, fontWeight: '500', margin: 5 }}>Rs.{item.price}</Text>
                  <View>
                    <TouchableOpacity onPress={deletehandle}>
                      <AntDesign name="delete" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          })}

        </View>
      </View>
    </ScrollView>
  )
}

export default Addtocart

const styles = StyleSheet.create({})