import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Text style={{ fontSize: 20, color: 'white' }}>Signup page</Text>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 18 }} >Already  have an account? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('login') }}>
          <Text style={styles.signup}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue'
  },
  signup: {
    color: 'orange',
    fontWeight: '500',
    fontSize: 18
  }
})