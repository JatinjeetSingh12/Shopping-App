import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import ShopContext from '../context/ShopContext';
import { AntDesign } from '@expo/vector-icons';

const ProductPage = ({ navigation, route }) => {

    const item = route.params;

    const [itemcount, setitemcount] = useState(0);




    const minushandle = () => {
        if (itemcount == 0) {

        }
        else {
            setitemcount(itemcount - 1);
        }
    }

    const plushandle = () => {
        setitemcount(itemcount + 1);
    }

    const context = useContext(ShopContext);

    const { addcartitems, Cart, getcartitems } = context;

    const carthandle = () => {
        addcartitems(item);
    }

    console.log(item)
    console.log(Cart)
    for

    useEffect(() => { getcartitems() }, [])

    return (
        <>
            <ScrollView style={styles.container}>
                <View >
                    <Image style={styles.img} source={{ uri: item.img }} />
                </View>
                <View style={{ width: 40, borderWidth: 0.5, alignItems: 'center', position: 'relative', bottom: 290, borderRadius: 10, left: 10 }}>
                    <AntDesign onPress={() => { navigation.navigate('home') }} name="back" size={28} color="black" />
                </View>

                <View >

                    <View style={styles.name}>
                        <Text style={styles.nameTxt}>{item.name} (White)</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                            <TouchableOpacity onPress={minushandle}
                                style={styles.minusbtn}>
                                <Text style={styles.btntxt}>-</Text>
                            </TouchableOpacity>

                            <Text style={styles.itemcount}>{itemcount}</Text>

                            <TouchableOpacity onPress={plushandle}
                                style={styles.plsbtn}>
                                <Text style={styles.btntxt}>+</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginRight: 5 }}>
                            <Text style={styles.pricetxt}>Rs.{item.price}</Text>
                        </View>
                    </View>

                    <View style={styles.desc}>
                        <Text>{item.description}</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={carthandle} style={styles.button}>
                            <Text style={styles.addtxt}>
                                ADD TO Cart
                            </Text>
                        </TouchableOpacity>


                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default ProductPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 33,
    },
    img: {
        width: '100%', height: 300, borderWidth: 1, borderWidth: 2
    },
    name: {
        marginVertical: 25,
        marginLeft: 8
    },
    nameTxt: {
        fontSize: 25,
        fontWeight: '500'
    },
    button: {
        width: '80%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        backgroundColor: 'steelblue',
        borderRadius: 10,
        marginVertical: 20
    },
    btntxt: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
    },
    desc: {
        marginVertical: 25,
        marginHorizontal: 9,
    },
    addtxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    pricetxt: {
        fontSize: 28, fontWeight: '500'
    },
    itemcount: {
        fontSize: 30,
        width: 50,
        textAlign: 'center'
    },
    minusbtn: {
        backgroundColor: 'steelblue',
        width: 50,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    plsbtn: {
        backgroundColor: 'steelblue',
        width: 50,
        borderTopRightRadius: 5,
        borderBottomRIGHTRadius: 5
    }
})