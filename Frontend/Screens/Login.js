import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import ShopContext from '../context/ShopContext';

const Login = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [Password, setpassword] = useState('');

    const context = useContext(ShopContext);
    const { login } = context

    const loginhandle = () => {
        login(Email, Password, navigation);
    }

    return (
        <View style={styles.container}>

            <View style={styles.titlecont}>
                <Text style={styles.titletxt}>Shopping Zone</Text>
            </View>

            <View style={styles.textinputCont}>

                <TextInput style={styles.textinput} onChangeText={(Text) => { setEmail(Text) }} placeholderTextColor='white' placeholder='username or email' />
                <TextInput style={styles.textinput} onChangeText={(Text) => { setpassword(Text) }} placeholderTextColor='white' placeholder='password' />

                <TouchableOpacity style={styles.loginbutton} onPress={loginhandle}>
                    <Text style={styles.loginbuttonTxt}>Login</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ color: 'white', fontSize: 18 }} >Don't have an account? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('signup') }}>
                        <Text style={styles.signup}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue'
    },
    titlecont: {
        flex: 1,
        paddingTop: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titletxt: {
        fontSize: 40,
        color: 'white',
        paddingTop: 100
    },
    textinputCont: {
        flex: 2, width: '100%', alignItems: 'center'
    },
    textinput: {
        width: 300,
        marginVertical: 20,
        height: 40,
        backgroundColor: 'steelblue',
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingLeft: 10
    },
    loginbutton: {
        borderRadius: 20,
        width: 150,
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
    },
    loginbuttonTxt: {
        paddingTop: 10,
        fontSize: 20,
        color: 'steelblue',
        fontWeight: '500'
    },
    signup: {
        color: 'orange',
        fontWeight: '500',
        fontSize: 18
    }
})