import React, {useEffect} from 'react';
import {
  Image,
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

const HeaderHome = props => {
  const {title} = props;
  const offset = useSharedValue(-40);
  const op = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });
  const animatedStylesImage = useAnimatedStyle(() => {
    return {
      opacity: op.value,
    };
  });
  useEffect(() => {
    offset.value = withTiming(0, {
      duration: 500,
      easing: Easing.in(Easing.sin),
    });
    op.value = withTiming(1, {
      duration: 500,
      easing: Easing.in(Easing.exp),
    });
  });
  const HeaderIos = () => {
    return (
      <View style={{backgroundColor: '#fff'}}>
        <SafeAreaView>
          <View style={{height: SIZES.statusBar_Height}}></View>
          <Animated.View
            style={[{height: SIZES.header_Height}, styles.conatainer]}>
            <Animated.Image
              style={[styles.image, animatedStylesImage]}
              source={require('../assets/images/icons8-night-100.png')}
            />
            <Animated.Text style={[styles.title, animatedStyles]}>
              Chào buổi tối, Ngô Hoàng Thái
            </Animated.Text>
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
          style={[{height: SIZES.header_Height}, styles.conatainer]}>
          <Animated.Image
            style={[styles.image, animatedStylesImage]}
            source={require('../assets/images/icons8-night-100.png')}
          />
          <Animated.Text style={[styles.title, animatedStyles]}>
            Chào buổi tối, Ngô Hoàng Thái
          </Animated.Text>
        </Animated.View>
      </View>
    );
  };
  return (
    <View>{Platform.OS === 'ios' ? <HeaderIos /> : <HeaderAndroid />}</View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  conatainer: {
    flexDirection: 'row',
    height: 44,
    width: SIZES.width,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: SIZES.body4,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
