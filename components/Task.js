import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Switch, Dimensions, Button } from 'react-native'

const Task = (props) => {
    const [isEnabled, setEnabled] = useState(false);
    const [textStyle, setTextStyle] = useState({});

    const xyz = () => isEnabled ? {...styles.task, ...styles.taskStrike} : {...styles.task};

    const toggleSwitch = () => {
        setEnabled(!isEnabled);
    };
    
    useEffect(() => {
        setTextStyle(xyz())
    }, [isEnabled])

    return (
        <View style={styles.taskContainer} >
            <Switch value={isEnabled} onValueChange={toggleSwitch}></Switch>
            <Text style={textStyle} onPress={toggleSwitch}>{props.task.name}</Text>

           <View style={styles.buttonWrapper}><Button color='red' title='X' onPress={() => props.deleteTask(props.task.key)}/></View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskContainer:{
        backgroundColor: 'darkgrey',
        flexDirection: "row"
    },
    task:{
        fontSize: 40,
    },
    taskStrike: {
        textDecorationLine: "line-through",
    },
    buttonWrapper: {
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
    }

})
