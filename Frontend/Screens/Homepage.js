import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import BottomNavigation from '../bottomNav/BottomNavigation'


const Homepage = ({navigation}) => {
    return (
        <>
            <BottomNavigation />
        </>
    )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})