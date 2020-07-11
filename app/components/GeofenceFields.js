import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import {isPointWithinRadius} from 'geolib';
import TextField from './TextField';

const GeofenceFields = ({actions, geo, current}) => {
  const [latitude, setLatitude] = useState(current.currentLat);
  const [longitude, setLongitude] = useState(current.currentLong);
  const [radius, setRadius] = useState(geo.radius);

  const [withinRadius, setWithinRadius] = useState(false);

  useEffect(() => {
    const isWithinRadius = isPointWithinRadius(
      {latitude: current.currentLat, longitude: current.currentLong},
      {latitude: geo.fence.lat, longitude: geo.fence.lng},
      geo.radius * 1000,
    );
    setWithinRadius(isWithinRadius);
  });

  updateFence = () => {
    actions.setLatitude(latitude);
    actions.setLongitude(longitude);
    actions.setRadius(radius);
  };

  return (
    <View
      style={{
        padding: 20,
        alignItems: 'center',
      }}>
      <Text style={{margin: 20}}>
        Current location: {current.currentLat}, {current.currentLong}. Enter a
        latitude, longitude and radius to create a geofence. Current location is
        {withinRadius ? ' within' : ' outside'} the geofence
      </Text>

      <Text style={{alignSelf: 'center'}}>Latitude</Text>
      <TextField
        placeholder="Latitude"
        value={String(latitude)}
        onChangeText={(text) => setLatitude(text)}
        keyboardType={'numeric'}
      />
      <Text style={{alignSelf: 'center'}}>Longitude</Text>
      <TextField
        placeholder="Longitude"
        value={String(longitude)}
        onChangeText={(text) => setLongitude(text)}
        keyboardType={'numeric'}
      />
      <Text style={{alignSelf: 'center'}}>Radius (km)</Text>
      <TextField
        placeholder="Radius"
        value={String(radius)}
        onChangeText={(text) => setRadius(text)}
        keyboardType={'numeric'}
      />
      <Button title={'Update Geofence'} onPress={updateFence} />
    </View>
  );
};

export default GeofenceFields;
