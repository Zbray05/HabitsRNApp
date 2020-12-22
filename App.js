
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header.js';
import TaskList from './components/TaskList.js'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const dailytasksData = [{name: 'task1', key: '1'}, {name: 'task2', key: '2'}, {name: 'task3', key: '3'},{name: 'task4', key: '4'}, {name: 'task5', key: '5'}, {name: 'task6', key: '6'},]
  
  const [dailyTasks, setdailyTasks] = useState(dailytasksData)
  const deleteTask = (key) =>  setdailyTasks(dailyTasks.filter(task => task.key != key));

  return (
    <NavigationContainer>
      <View>
        <Header />
        <TaskList tasks={dailyTasks} name='Daily Goals' deleteTask={deleteTask} />
        <TaskList tasks={dailyTasks} name='Things to do' deleteTask={deleteTask} />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
