import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Routes from './src/navigation/Routes';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import menuApi from './src/api/menuApi';
const App = () => {
  // useEffect(() => {
  //   menuApi.getAll().then(res => {
  //     console.log(res);
  //   });
  // }, []);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
