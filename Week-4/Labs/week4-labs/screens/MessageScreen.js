import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

let data = [
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'AAAAAA',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'BBBBB',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'CCCCCC',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'DDDDDD',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'EEEEEE',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'AAAAAA',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'BBBBB',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'CCCCCC',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'DDDDDD',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        name: 'EEEEEE',
        time: '2:15 PM',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.menuIcon}>
                    <Feather name="menu"></Feather>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 30 }}>Messages</Text>
                </View>
                <View style={styles.menuIcon}></View>
            </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                {data.map(user => {
                    return (
                        <TouchableOpacity style={styles.message} key={user}>
                            <Image source={{
                                uri: user.img
                            }} style={styles.messageImg} resizeMode="contain"></Image>
                            <View style={styles.messageContent}>
                                <View style={styles.messageHeader}>
                                    <Text style={styles.userName}>{user.name}</Text>
                                    <Text style={styles.sentTime}>{user.time}</Text>
                                </View>
                                <Text style={styles.content}
                                numberOfLines={2}>{user.message}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 0.1,
        flexDirection: "row"
    },
    menuIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {

    },
    message: {
        justifyContent: "space-between",
        marginBottom: 3,
        marginTop: 3,
        paddingRight: 10,
        flexDirection: "row",
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
    },
    messageImg: {
        width: 70,
        height: 70,
        flex: 0.3,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    messageContent: {
        flex: 0.7,
        flexDirection: "column"
    },
    messageHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userName:{
        fontSize: 14,
        fontWeight: "bold"
    },
    sentTime:{
        fontSize: 14
    },
    content: {
    }

});
