import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
// Import data (Todo tasks)
import { tasks } from '../constants/utils'
import TaskItem from '../components/TaskItem'
import { ScrollView } from 'react-native-gesture-handler';

export default class todoScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      taskList: tasks,
    };
  }

  onChange = data => {
    this.setState({
      input: data,
    })
  }

  onSubmit = () => {
    const currentTasks = this.state.taskList;
    if (this.state.input !== '') {
      const newTask = {
        id: currentTasks.length + 1,
        body: this.state.input,
        status: 'Active'
      }
      const newTaskList = [...currentTasks, newTask];
      this.setState({
        taskList: newTaskList,
        input: '',
      })
    }
  }

  onPressTaskItem = (id) => {
    const currentTasks = this.state.taskList;
    const changedTask = currentTasks.find(task => task.id === id);
    changedTask.status = changedTask.status === 'Done' ? "Active" : "Done";
    const index = currentTasks.findIndex(task => task.id === id);
    currentTasks[index] = changedTask;
    this.setState({
      taskList: currentTasks
    },
      // Change navigator
      () => {
        setTimeout(() => {
          this.props.navigation.navigate('todoDetail', { data: changedTask });
        }, 1000)
      }
    )
  }

  onDeleteTask = id => {
    const currentTasks = this.state.taskList;
    const updatedTasks = currentTasks.filter(task => task.id !== id);
    this.setState({
      taskList: updatedTasks
    })
  }

  onLongPressTaskItem = task => {
    Alert.alert(
      'Delete your task?',
      task.body,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onDeleteTask(task.id) }
      ],
      { cancelable: true }
    );
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/bg.jpeg')} style={{ width: '100%', height: '100%' }}>
        <KeyboardAvoidingView
          enabled
          behavior="padding">
          <ScrollView contentContainerStyle={styles.container}>
            {this.state.taskList.map(item => {
              return <TaskItem
                key={item.id}
                data={item}
                onPressTaskItem={() => this.onPressTaskItem(item.id)}
                onLongPressTaskItem={() => this.onLongPressTaskItem(item)}></TaskItem>;
            })}
            <TextInput style={styles.taskInput} onChangeText={this.onChange} value={this.state.input}></TextInput>
            <TouchableOpacity onPress={this.onSubmit}>
              <Text style={styles.submitBtn}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 50,
  },
  taskInput: {
    width: 300,
    height: 40,
    marginVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 5,
    color: "white"
  },
  submitBtn: {
    fontSize: 20,
    color: "lightblue",
    fontWeight: "bold"
  }
})
