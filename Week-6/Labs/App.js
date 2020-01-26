import React, { Component } from 'react';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView from "react-native-maps"
import * as ImagePicker from 'expo-image-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    }
  }

  getCurrentLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync();
    let newLocations = [
      ...this.state.locations,
      { lat: currentLocation.coords.latitude, lon: currentLocation.coords.longitude }
    ];
    this.setState({
      locations: newLocations,
    })
  }

  addLocation = (coordinate) => {
    let lat = coordinate.latitude;
    let lon = coordinate.longitude;
    let newLocations = [
      ...this.state.locations,
      { lat, lon, img: null }
    ];
    this.setState({
      locations: newLocations,
    })
  }

  async componentDidMount() {
    await this.getCurrentLocation();
    let initialLoc = {
      latitude: this.state.locations[0].lat,
      longitude: this.state.locations[0].lon,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
    this.mapView.animateToRegion(initialLoc, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={(ref) => this.mapView = ref}
          style={{
            flex: 1,
            width: 500,
            height: 500
          }}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 10,
            longitudeDelta: 10
          }}
          onLongPress={(e) => {
            this.addLocation(e.nativeEvent.coordinate);
          }}
        >
          {this.state.locations.map(location => {
            return (
              <MapView.Marker
                key={location.lat}
                coordinate={{
                  latitude: location.lat,
                  longitude: location.lon,
                }}
                title={
                  `LAT: ${Number.parseFloat(location.lat).toFixed(3)}, LONG: ${Number.parseFloat(location.lon).toFixed(3)}`
                }
                description={"location"}
              >
                <MapView.Callout>
                    {location.img &&
                      <Image source={{ uri: location.img }} style={{ width: 200, height: 150 }} />
                    }
                    {!location.img &&
                      <Image source={require('./assets/03.jpg')} style={{ width: 200, height: 150 }} />
                      // <Text>123456789</Text>
                    }
                </MapView.Callout>
              </MapView.Marker>
            )
          })}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
