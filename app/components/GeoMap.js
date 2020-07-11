import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const GeoMap = ({lat, lng, radius}) => (
  <MapView
    provider={PROVIDER_GOOGLE}
    style={styles.map}
    zoomEnabled
    showsUserLocation
    region={{
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    }}>
    <MapView.Circle
      center={{
        latitude: lat,
        longitude: lng,
      }}
      radius={2000}
      strokeWidth={2}
      strokeColor="#3399ff"
      fillColor="#80bfff"
    />
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    backgroundColor: 'red',
    width: '100%',
    height: '40%',
  },
});

export default GeoMap;
