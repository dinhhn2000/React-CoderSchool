import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TaskItem extends Component {
  render() {
    const content = this.props.data.body;
    const status = this.props.data.status;
    const onPressTaskItem = this.props.onPressTaskItem;
    const onLongPressTaskItem = this.props.onLongPressTaskItem;
    const taskBtn = status === 'Active' ? styles.ActiveBtn : styles.normalBtn
    const taskContent = status === 'Active' ? styles.ActiveContent : styles.normalContent
    return (
      <TouchableOpacity style={taskBtn} onPress={onPressTaskItem} onLongPress={onLongPressTaskItem}>
        <Text style={taskContent}>{content}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ActiveBtn: {
    justifyContent: "center",
    backgroundColor: "#F7ED88",
    marginVertical: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 4
  },
  normalBtn: {
    justifyContent: "center",
    backgroundColor: "lightblue",
    marginVertical: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 4
  },
  ActiveContent: {
    color: "gray",
    fontSize: 20,
  },
  normalContent: {
    color: "white",
    fontSize: 20,
  }
})