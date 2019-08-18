import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const WeatherInfo = props => {
    const info = props.data;
    return (
        <View style={styles.infoCard}>
            <Text style={styles.city}>{info.city}</Text>
            <View style={styles.windInfo}>
                <Feather name='wind' style={{ fontSize: 18, color: 'white' }} />
                <Text style={styles.wind}>{info.wind}</Text>
            </View>
            <View style={styles.weatherInfo}>
                <MaterialCommunityIcons name='weather-cloudy' style={{ fontSize: 18, color: 'white' }} />
                <Text style={styles.weather}>{info.weather}</Text>
            </View>
            <View style={styles.temperatureInfo}>
                <MaterialCommunityIcons name='oil-temperature' style={{ fontSize: 18, color: 'white' }} />
                <Text style={styles.temperature}>{info.temperature}</Text>
                <MaterialCommunityIcons name='temperature-celsius' style={{ fontSize: 18, color: 'white' }} />
            </View>
        </View>
    );
}

export default WeatherInfo;

const styles = StyleSheet.create({
    infoCard: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
        height: 180,
        width: 300,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center'
    },
    city: {
        fontSize: 20,
        color: 'white'
    },
    wind: {
        fontSize: 18,
        color: "white",
        marginLeft: 10
    },
    weather: {
        fontSize: 18,
        color: "white",
        marginLeft: 10
    },
    temperature: {
        fontSize: 18,
        color: "white",
        marginLeft: 10,
    },
    windInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    weatherInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    temperatureInfo: {
        flexDirection: "row",
        alignItems: "center"
    }
})