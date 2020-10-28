
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header.js';
import TaskList from './components/TaskList.js'

const App = () => {
  const dailytasksData = [{name: 'task1', key: '1'}, {name: 'task2', key: '2'}, {name: 'task3', key: '3'},{name: 'task4', key: '4'}, {name: 'task5', key: '5'}, {name: 'task6', key: '6'},]
  
  const [dailyTasks, setdailyTasks] = useState(dailytasksData)
  const deleteTask = (key) =>  setdailyTasks(dailyTasks.filter(task => task.key != key));

  return (
    <View>
      <Header />
      <TaskList tasks={dailyTasks} deleteTask={deleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
