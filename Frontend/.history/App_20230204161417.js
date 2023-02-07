import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Screens/Signup';
import Homepage from './Screens/Homepage';
import ProductPage from './Screens/ProductPage';
import ShopContext from './context/ShopContext';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();



export default function App() {
  const [isloggedin, setloggedin] = useState(false);

  const [Cart, setcart] = useState([])

  const addcartitems = async (item) => {
    const response = await fetch('http://192.168.0.104:5000/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': await AsyncStorage.getItem('token')

      },
      body: JSON.stringify({ "name": item.name, "description": item.description, "img": item.img, "price": item.price, "categories": item.categories })
    })
    const cart = await response.json();
    setcart(Cart.concat(cart));
  }

  const getcartitems = async () => {
    const response = await fetch('http://192.168.0.104:5000/cart/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": await AsyncStorage.getItem('token')
      },
    });
    const json = await response.json();
    setcart(json);
  }


  //delete note
  const deletecartitems = async (id) => {
    const response = await fetch(`http://192.168.0.104:5000/cart/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = response.json();
    const newcart = Cart.filter((cart) => { return cart._id !== id });
    setcart(newcart);
  }



  const login = async (Email, Password, navigation) => {
    const response = await fetch('http://192.168.0.104:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ 'email': Email, 'password': Password })
    })
    const json = await response.json();

    if (json.success) {
      await AsyncStorage.setItem('token', json.token);
      setloggedin(true);
    }
    else {
      alert("invalid credentials");
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setloggedin(false);
  }

  const loaddata = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setloggedin(true);
    }
    else {
      setloggedin(false);
    }

  }

  useEffect(() => {
    loaddata();
  }, [])

  return (
    <ShopContext.Provider value={{ login, logout, addcartitems, getcartitems, Cart }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='homepage'>
          {isloggedin ? (
            <>
              <Stack.Screen name='homepage' component={Homepage} options={{ headerShown: false }} />
              <Stack.Screen name='productpage' component={ProductPage} options={{ headerShown: false }} />
            </>

          ) : (
            <>
              <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
              <Stack.Screen name='signup' component={Signup} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ShopContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
