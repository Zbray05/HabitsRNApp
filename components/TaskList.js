import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Task from './Task.js';

const TaskList = (props) => {
    return (
        <View>
            <Text>{props.tasks}</Text>
            <FlatList data={[{name: 'task1', key: '1'}]} renderItem={({item}) => <Task task={item} key={item.key}/> }/>
        </View>
    )
}

export default TaskList

const styles = StyleSheet.create({})
