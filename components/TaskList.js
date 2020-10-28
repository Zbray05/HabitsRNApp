import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Task from './Task.js';

const TaskList = (props) => {
    return (
        <View>
            <Text style={styles.tasksTitle}>Daily Goals</Text>
            <FlatList data={props.tasks} renderItem={({item}) => <Task task={item} key={item.key} deleteTask={props.deleteTask}/> }/>
        </View>
    )
}

export default TaskList

const styles = StyleSheet.create({
    tasksTitle: {
        fontSize: 25
    }
})
