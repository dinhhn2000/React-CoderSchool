import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
// import { Feather } from '@expo/vector-icons';

var moment = require('moment');

const fullWidth = Dimensions.get('window').width; //full width

// const Article = props => {
export default class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data;
        const author = data.author === null ? 'Unknown' : data.author;
        const imgUri = data.urlToImage === null ?
            'https://media.giphy.com/media/2kXLNQypdX9O1A3zxX/giphy.gif' : data.urlToImage;
        const source = data.source.name === null ? 'Unknown' : data.source.name;
        const description = data.description === null ? 'Unknown' : data.description;
        const publishedTime = data.publishedAt === null ?
            'Unknown' : moment(data.publishedAt).add(1, 'day').format('LLL');
        return (
            <View style={styles.container} >
                <Text style={styles.title} >{data.title}</Text>
                <Image style={styles.img} source={{ uri: `${imgUri}` }} />
                <View style={styles.articleAuthor}>
                    <Text style={{ fontWeight: 'bold' }}>Author: </Text>
                    <Text>{author}</Text>
                </View>
                <View style={styles.articleSource}>
                    <Text style={{ fontWeight: 'bold' }}>Source: </Text>
                    <Text>{source}</Text>
                </View>
                <View style={styles.articleDescription}>
                    <Text style={{ fontWeight: 'bold' }}>Description: </Text>
                    <Text style={{ flexWrap: 'wrap' }}>{description}</Text>
                </View>
                <View style={styles.articlePublished}>
                    <Text style={{ fontWeight: 'bold' }}>Published: </Text>
                    <Text style={{ flexWrap: 'wrap', color: 'grey' }}>
                        {publishedTime}
                    </Text>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                    <TouchableOpacity style={styles.readMoreBtn}
                        onPress={() => { Linking.openURL(`${data.url}`) }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            READ MORE
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        marginHorizontal: 10,
        marginTop: 20,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        width: fullWidth - 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    img: {
        width: fullWidth - 22, // 22 = width of container - borderWidth
        height: 200,
        marginVertical: 10,
    },
    articleAuthor: {
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    articleSource: {
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    articleDescription: {
        paddingHorizontal: 5,
    },
    articlePublished: {
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    readMoreBtn: {
        width: fullWidth / 2,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
});