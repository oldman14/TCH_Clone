import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
// import {fetchData, productActions} from '../screen/Order/porductSlice';
// import {useDispatch, useSelector} from 'react-redux';
const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Routes;
