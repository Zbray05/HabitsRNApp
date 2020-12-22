import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import Task from './Task.js';

const TaskList = (props) => {
    return (
        <View style={styles.taskListContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.tasksTitle}>{props.name}</Text>
                <View style={styles.buttonContainer}><Button title='Add' onPress={() => console.log('pressed')}/></View>
            </View>
            <FlatList data={props.tasks} renderItem={({item}) => <Task task={item} key={item.key} deleteTask={props.deleteTask}/> }/>
        </View>
    )
}

export default TaskList

const styles = StyleSheet.create({
    taskListContainer: {
        height: (Dimensions.get('window').height * .475),
        margin: 0,
        padding: 0
    },
    tasksTitle: {
        fontSize: 30
    },
    buttonContainer: {
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    titleContainer: {
        flexDirection: "row",
    }
})
