import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import ShopContext from '../context/ShopContext';


const Account = ({ navigation }) => {
  const context = useContext(ShopContext);
  const { logout, user } = context
  const logouthandle = () => {
    logout();
  }
  return (
    <View style={styles.container}>
      <View style={styles.logocont}>
        <View style={styles.logo}>
          <AntDesign name="user" size={114} color="white" />
        </View>
      </View>
      <View>
        <Text style={styles.txt}>Name:  {user.name}</Text>
        <Text style={styles.txt}>Email: {user.email}</Text>
        <Text style={styles.txt}>Mobile Number: {user.mobile_no}</Text>
        <Text style={styles.txt}>Address:{user.Address}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={logouthandle}>
        <Text style={styles.btntxt}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%'
  },
  txt: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 15
  },
  logocont: {
    height: 200,
    backgroundColor: 'steelblue'
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center', paddingTop: 40,
  },
  btn:{
    borderWidth:1,
    alignItems:'center'
  },btntxt:[]
})