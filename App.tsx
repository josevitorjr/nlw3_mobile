import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -22.470541,
          longitude: -44.4553737,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025,
        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -22.470541,
            longitude: -44.4553737,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
