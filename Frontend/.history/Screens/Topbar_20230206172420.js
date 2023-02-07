import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';


const Topbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconsbar}>
                <View>
                    <Text style={styles.titletxt}>
                        ShopZ
                    </Text>
                </View>
            </View>
            <View style={styles.searchbar}>

                <TextInput placeholder='search' onChangeText={()=>{searchhandle()}} style={{ width: '90%', }} />
                <AntDesign name="search1" size={24} color="black" />

            </View>
        </View>
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