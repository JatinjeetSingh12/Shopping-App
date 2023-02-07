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
      <View style={{ height: 200, backgroundColor: 'steelblue' }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 40, }}>
          <AntDesign name="user" size={114} color="white" />
        </View>
      </View>
      <View>
        <Text style={styles.txt}>Name:  {user.name}</Text>
        <Text style={styles.txt}>Email: {user.email}</Text>
        <Text style={styles.txt}>Mobile Number: {}</Text>
        <Text style={styles.txt}>Address: WZ-329 Tilak Nagar,New Delhi,110018</Text>
      </View>

      <TouchableOpacity onPress={logouthandle}><Text>Logout</Text></TouchableOpacity>
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
  }
})