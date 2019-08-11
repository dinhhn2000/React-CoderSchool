import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class todoDetailScreen extends Component {
    render() {
        const { navigation } = this.props;
        const taskDetail = navigation.getParam('data', '')
        return (
            <View style={styles.container}>
                <Text style={styles.status}> {taskDetail.status} </Text>
                <Text style={{ fontSize: 18 }}> Content: </Text>
                <Text> {taskDetail.body} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 30,
        flexDirection: "column"
    },
    status: {
        color: "green",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },

})
