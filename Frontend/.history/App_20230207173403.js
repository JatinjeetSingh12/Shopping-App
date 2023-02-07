import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Screens/Signup';
import Homepage from './Screens/Homepage';
import ProductPage from './Screens/ProductPage';
import ShopContext from './context/ShopContext';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkout from './Screens/Checkout';


const Stack = createNativeStackNavigator();



export default function App() {

  const ipaddress = "192.168.0.106";

  const [isloggedin, setloggedin] = useState(false);

  const [Cart, setcart] = useState([])

  const [user, setuser] = useState({});




  const addcartitems = async (item,itemcount) => {
    const response = await fetch(`http://${ipaddress}:5000/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': await AsyncStorage.getItem('token')

      },
      body: JSON.stringify({ "name": item.name, "description": item.description, "img": item.img, "price": item.price, "categories": item.categories,"quantity": itemcount})
    })
    const cart = await response.json();
    setcart(Cart.concat(cart));
  }

  const getuser = async () => {
    const response = await fetch(`http://${ipaddress}:5000/auth/getUser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": await AsyncStorage.getItem('token')
      },
    })
    const json = await response.json();
    setuser(json);
  }

  const getcartitems = async () => {
    const response = await fetch(`http://${ipaddress}:5000/cart/get`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": await AsyncStorage.getItem('token')
      },
    });
    const json = await response.json();
    setcart(json);
  }

  const deletecartitems = async (id) => {
    const response = await fetch(`http://${ipaddress}:5000/cart/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': await AsyncStorage.getItem('token')
      },
    });
    const json = response.json();
    const newcart = Cart.filter((cart) => { return cart._id !== id });
    setcart(newcart);
  }

  const login = async (Email, Password, navigation) => {
    const response = await fetch(`http://${ipaddress}:5000/auth/login`, {
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

  useEffect(() => {
    getuser()
  }, [])

  return (
    <ShopContext.Provider value={{ login, logout, addcartitems, getcartitems, Cart, deletecartitems, user }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='homepage'>
          {isloggedin ? (
            <>
              <Stack.Screen name='homepage' component={Homepage} options={{ headerShown: false }} />
              <Stack.Screen name='productpage' component={ProductPage} options={{ headerShown: false }} />
              <Stack.Screen name='checkout' component={Checkout} options={{ headerShown: false }} />
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
