import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Topbar from './Topbar'
import Products from '../Data/Product'
import ShopContext from '../context/ShopContext'

const Home = ({ navigation }) => {

    const Context = useContext(ShopContext);
    const { getcartitems} = Context;

    const productpage = (item) => {
        navigation.navigate('productpage', item);
    }

    useEffect(() => { getcartitems() }, [])
    return (
        <>

            <View style={styles.container}>

                <Topbar />

                <ScrollView style={{ flex: 1, backgroundColor: 'snow' }}>
                    <View style={{ flexWrap: 'wrap', flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 7, paddingVertical: 5 }}>
                        {Products.map((item) => {
                            return (
                                <TouchableOpacity key={item.id} onPress={() => { productpage(item) }} style={{ width: '48%', borderWidth: 0.1, backgroundColor: 'white', marginVertical: 6, }}>
                                    <Image source={{ uri: item.img }} style={{ height: 180, width: '100%' }} />
                                    <View style={{}}>
                                        <Text style={{ fontWeight: '700', fontSize: 20 }}>Rs.{item.price}</Text>
                                        <Text>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}

                    </View>
                </ScrollView>
            </View>

        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    }
})