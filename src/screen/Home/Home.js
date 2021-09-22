import React, {useRef, useMemo, useCallback, useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import Header from '../../component/Header';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import HeaderHome from '../../component/HeaderHome';
import {decrement, increment, selectCount} from './counterSlice';
import {useDispatch, useSelector} from 'react-redux';
const Home = options => {
  const width = useSharedValue(50);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <View>
      <HeaderHome title="Home" />
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Text>{count} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#f90',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 500,
    alignItems: 'center',
  },
});
export default Home;
