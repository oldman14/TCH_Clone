import React, {useRef, useMemo, useCallback, useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
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

const Home = options => {
  const width = useSharedValue(50);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });
  return (
    <View>
      <HeaderHome title="Home" />
      <Animated.View style={[styles.box, style]} />
      <Button onPress={() => (width.value = Math.random() * 300)} title="Hey" />
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
