import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

function Player(props) {
    return (
        <View style={styles.player}>
            <Text style={styles.playerName}>{props.playerName}</Text>
            <Image source={{uri: props.option.uri}} style={styles.optionImage} resizeMode='contain'></Image>
        </View>
    );
}
const styles = StyleSheet.create({
    player: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerName: {
        flex: 0.2,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
    optionImage: {
        flex: 0.4,
        width: 150,
        height: 150,
    },
});
export default Player;