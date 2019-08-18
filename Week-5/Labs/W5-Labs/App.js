import React, { Component } from 'react';
import * as Location from 'expo-location';
import * as Permissions from "expo-permissions";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import WeatherInfo from './Components/Weather_Info';
import { LOCATIONS } from './utils/location';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      wind: '',
      weather: '',
      temperature: '',
    }
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return;
    }

    const location = await Location.getCurrentPositionAsync();
    return location.coords;
  };

  updateWeatherInfo = async (latitude, longitude) => {
    let lat, lon;
    if (latitude === undefined || longitude === undefined) {
      let coordinate = await this.getLocationAsync();
      lat = coordinate.latitude;
      lon = coordinate.longitude;
    } else {
      lat = latitude;
      lon = longitude;
    }
    let API_KEY = "7d252044332d0f1aa4b3b3b78550c666";
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    try {
      const res = await fetch(api);
      const jsonData = await res.json();
      if (jsonData.cod === 200) {
        this.setState({
          city: jsonData.name,
          wind: jsonData.wind.speed,
          weather: jsonData.weather[0].main,
          // From Kevin to Celsius
          temperature: (jsonData.main.temp - 272.15).toFixed(2), 
        });
      }
    } catch{
      console.log(error);
    }
  }

  async componentDidMount() {
    this.updateWeatherInfo();
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.jpg')} style={{ flex: 1 }}>
        <View style={styles.container}>
          <WeatherInfo data={this.state} />
          <View style={styles.locationOptions}>
            <TouchableOpacity style={styles.currentLocation}
              onPress={() => this.updateWeatherInfo()}>
              <Text style={{ color: 'white' }}>Current Location</Text>
            </TouchableOpacity>
            {LOCATIONS.map(location => {
              return (
                <TouchableOpacity key={location.name} style={styles.location}
                  onPress={() => this.updateWeatherInfo(location.latitude, location.longitude)}>
                  <Text style={{ color: 'white', fontSize: 11 }}>{location.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  locationOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentLocation: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 250,
    marginHorizontal: 100,
    marginVertical: 10,
    backgroundColor: 'rgba(200, 218, 234, 0.4)',
    alignItems: "center",
    justifyContent: 'center'
  },
  location: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 100,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  }
});
