import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Hello</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 10
    }
})
