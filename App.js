
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header.js';
import TaskList from './components/TaskList.js'

const App = () => {
  const tasks = ['task1', 'task2', 'task3']

  return (
    <View>
      <Header />
      <TaskList tasks={tasks} />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
