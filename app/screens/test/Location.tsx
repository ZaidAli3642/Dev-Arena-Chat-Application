import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';

const Location = () => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      let loc = {
        lat: info.coords.latitude,
        lng: info.coords.longitude,
      };
      console.log(info);

      if (loc.lat)
        Geocoder.geocodePosition(loc)
          .then(res => {
            // res is an Array of geocoding object (see below)
            console.log(res[0].formattedAddress);
          })
          .catch(err => console.log(err));
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      <Text style={{textAlign: 'center'}}>{JSON.stringify(location)}</Text>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({});
