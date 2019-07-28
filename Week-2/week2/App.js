import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const imgData = [
  { id: 1, imgSource: require('./assets/01.png') },
  { id: 2, imgSource: require('./assets/02.jpg') },
  { id: 3, imgSource: require('./assets/03.jpg') },
  { id: 4, imgSource: require('./assets/04.jpg') },
  { id: 5, imgSource: require('./assets/05.jpg') },
  { id: 6, imgSource: require('./assets/06.jpg') },
  { id: 5, imgSource: require('./assets/07.jpg') },
  { id: 6, imgSource: require('./assets/08.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image style={{ width: 110, height: 110 }}
            source={require('./assets/avatar.png')}></Image>
        </View>
        <View style={styles.userInfo}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Dinh Ho Ngoc</Text>
          <Text style={{ fontSize: 15 }}>Developer</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={{ color: "white", fontSize: 16 }}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendBtn}>
              <MaterialIcons name="send" size={27} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.figures}>
        <View style={styles.photos}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>150</Text>
          <Text>Photos</Text>
        </View>
        <View style={styles.followers}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>150</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.following}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>150</Text>
          <Text>Following</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 0.5 }}>
        <View style={styles.pictures}>
          <View style={{ flexDirection: "column" }}>
            {imgData.slice(0, centerImgData).map(item => {
              return (<Image source={item.imgSource} style={styles.images}></Image>)
            })}
          </View>
          <View style={{ flexDirection: "column" }}>
            {imgData.slice(centerImgData).map(item => {
              return (<Image source={item.imgSource} style={styles.images}></Image>)
            })}
          </View>
        </View>
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
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    flex: 0.4,
    // justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  buttons: {
    flexDirection: "row",
  },
  followBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#3C71FC',
    borderRadius: 20,
    height: 40,
    width: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  sendBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#56D8FC',
    borderRadius: 20,
    height: 40,
    width: 60,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  figures: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  photos: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  followers: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  following: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pictures: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  images: {
    width: 180,
    height: 180,
    margin: 5,
    borderColor: '#D8DDED',
    borderWidth: 0.5,
    borderRadius: 16,
  },

});
