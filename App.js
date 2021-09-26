import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Routes from './src/navigation/Routes';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import menuApi from './src/api/menuApi';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

const App = () => {
  // useEffect(() => {
  //   menuApi.getAll().then(res => {
  //     console.log(res);
  //   });
  // }, []);
  // const [location, setlocation] = useState({latitude: '', longitude: ''});
  // // const location = useRef()
  // Geocoder.init('AIzaSyBsHG0HXsQkYacvDUvwPpXsWFeEuFDHG4o');
  // Geolocation.getCurrentPosition(info => console.log(info));
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const initialPosition = JSON.stringify(position);
  //       setlocation(position.coords);
  //     },
  //     error => Alert.alert('Error', JSON.stringify(error)),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //   );
  // }, []);
  // useEffect(() => {
  //   console.log('locatio.long', location.latitude);
  //   console.log(location.latitude > 0);
  //   if (location.latitude > 0) {
  //     console.log('locatio', location.latitude);
  //     Geocoder.from(10.8518652, 106.621842)
  //       .then(json => {
  //         var addressComponent = json.results[0].address_components[0];
  //         console.log(addressComponent);
  //       })
  //       .catch(error => console.warn(error));
  //   }
  // }, [location]);
  //AIzaSyBd0qq10ktUwEol-a6DLd5SKk0pG_PXkiU

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
