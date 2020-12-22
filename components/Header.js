import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const Header = () => {
    console.log(Dimensions.get('window'));
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
        height: (Dimensions.get('window').height * .05),
        margin: 0,
        padding: 0,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        margin: 'auto',
    }
})
