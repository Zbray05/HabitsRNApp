import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.taskContainer}>
            <Text>{props.task.name}</Text>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskContainer:{
        backgroundColor: 'darkgrey'
    }
})
