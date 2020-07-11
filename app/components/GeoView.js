import React, {Component} from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import GeofenceFields from './GeofenceFields';
import GeoMap from './GeoMap';

class GeoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLat: 0.0,
      currentLong: 0.0,
    };
  }

  async componentDidMount() {
    const {actions} = this.props;

    await Geolocation.requestAuthorization('always');
    Geolocation.getCurrentPosition(
      ({coords}) => {
        this.setState({
          currentLat: coords.latitude,
          currentLong: coords.longitude,
        });
        actions.setLatitude(coords.latitude);
        actions.setLongitude(coords.longitude);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }

  render() {
    const {
      geo: {fenceLat, fenceLng, radius},
    } = this.props;
    const {currentLat, currentLong} = this.state;
    console.log(radius);
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <GeoMap lat={currentLat} lng={currentLong} radius={radius} />
          <GeofenceFields {...this.props} current={{currentLat, currentLong}} />
        </SafeAreaView>
      </View>
    );
  }
}

export default GeoView;
