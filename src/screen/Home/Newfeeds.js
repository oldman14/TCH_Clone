import React from 'react';
import {View, Text} from 'react-native';
import WebView from 'react-native-webview';

const Newfeeds = ({route}) => {
  const {params} = route;
  return <WebView source={{uri: params.item.url}} />;
};

export default Newfeeds;
