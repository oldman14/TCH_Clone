import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import {COLORS, SIZES} from '../constants';

const Header = props => {
  const {title} = props;
  const offset = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 50}],
    };
  });
  console.log(offset.value);
  console.log(title);
  useEffect(() => {
    offset.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  });
  const HeaderIos = () => {
    return (
      <View style={{backgroundColor: '#fff'}}>
        <SafeAreaView>
          <View style={{height: SIZES.statusBar_Height}}></View>
          <Animated.View
            style={[
              {height: SIZES.header_Height},
              styles.conatainer,
              animatedStyles,
            ]}>
            <Animated.Text style={styles.title}>{title}</Animated.Text>
          </Animated.View>
        </SafeAreaView>
      </View>
    );
  };
  const HeaderAndroid = () => {
    return (
      <View style={styles.conatainer}>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.white}
          barStyle="dark-content"
        />
        <Animated.View
          style={[
            {height: SIZES.header_Height},
            styles.conatainer,
            animatedStyles,
          ]}>
          <Animated.Text style={styles.title}>{title}</Animated.Text>
        </Animated.View>
      </View>
    );
  };
  return (
    <View>{Platform.OS === 'ios' ? <HeaderIos /> : <HeaderAndroid />}</View>
  );
};

export default Header;

const styles = StyleSheet.create({
  conatainer: {
    height: 44,
    width: SIZES.width,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
});
