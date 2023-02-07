import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ShopContext from '../context/ShopContext'
import { AntDesign } from '@expo/vector-icons';

const Addtocart = () => {
  const context = useContext(ShopContext);


  const { Cart, getcartitems, deletecartitems } = context


  const deletehandle = (id) => {
    deletecartitems(id);
  }

  useEffect(() => { getcartitems() }, [])
  return (


    <View style={{ paddingTop: 40, flex: 1, backgroundColor: 'snow', height: '100%', }}>

      <View style={{ alignItems: 'center', }}>
        <Text style={{ fontSize: 40, fontWeight: '500' }}>
          Cart
        </Text>
      </View>

      <ScrollView style={{ flex:4,marginTop:20 }}>
        <View style={{}}>
          {Cart.map((item) => {
            return (
              <View key={item._id} style={{ flexDirection: 'row', backgroundColor: 'white', borderWidth: 0.1, marginVertical: 5 }}>
                <View>
                  <Image style={{ width: 100, height: 100, }} source={{ uri: item.img }} />
                </View>

                <View>
                  <Text style={{ fontSize: 25, margin: 5 }}>{item.name}</Text>
                  <Text style={{ fontSize: 20, fontWeight: '500', margin: 5 }}>Rs.{item.price}</Text>
                  <Text style={{ fontSize: 20, fontWeight: '400', margin: 5 }}>quantity:{item.quantity}</Text>
                  <View>

                    <TouchableOpacity style={{ position: 'relative', left: 254, bottom: 5 }} onPress={() => { deletehandle(item._id) }}>
                      <AntDesign name="delete" size={28} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
      <View style={{flex:0.5,alignItems:'center',}}>
      <TouchableOpacity style={{ alignItems: 'center', width: 300, borderWidth: 1,marginTop:50,backgroundColor:'black',height:40,borderRadius:10  }}><Text style={{fontSize:20,color:'white',paddingTop:5}}>Checkout</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Addtocart

const styles = StyleSheet.create({})