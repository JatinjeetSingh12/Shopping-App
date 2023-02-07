import { FlatList, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Products from '../Data/Product';


const Topbar = ({navigation}) => {
    const [search, setsearch] = useState('');
    const searchhandle = (text) => {
        setsearch(text)
    }

    const productpage = (item) => {
        navigation.navigate('productpage', item);
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.iconsbar}>
                    <View>
                        <Text style={styles.titletxt}>
                            ShopZ
                        </Text>
                    </View>
                </View>
                <View style={styles.searchbar}>

                    <TextInput placeholder='search' onChangeText={(text) => { searchhandle(text) }} style={{ width: '90%', }} />
                    {search!=''?(
                        
                    ):()}
                    <AntDesign name="search1" size={24} color="black" />

                </View>
            </View>
            {search != '' &&
                <View style={{ height: '100%' }}>
                    <FlatList data={Products} renderItem={({ item }) => {
                        if (item.name.includes(search)) {
                            return (
                                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                    <AntDesign name="arrowright" size={24} color="black" />
                                    <TouchableOpacity onPress={() => {productpage(item)}}>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    }} />
                </View>}

        </>
    )
}

export default Topbar

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: 'steelblue'
    },
    iconsbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 3
    },
    searchbar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        backgroundColor: 'white',
        paddingLeft: 5,
        height: 40,
        borderRadius: 20,
        marginVertical: 20,
        marginLeft: 20
    },
    titletxt: {
        fontSize: 25,
        fontWeight: '500',
        color: 'white'
    }

})