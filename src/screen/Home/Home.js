import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Image, Text, FlatList, Animated} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import HeaderHome from '../../component/HeaderHome';
import {SIZES} from '../../constants';
import {styles} from './Styles';
const Home = () => {
  const dataBanner = [
    {
      id: 1,
      image:
        'https://minio.thecoffeehouse.com/image/admin/CPG-COMBO-WEB-01.jpg_530519.png',
    },
    {
      id: 2,
      image:
        'https://minio.thecoffeehouse.com/image/admin/baner-home-web_510005.jpg',
    },
    {
      id: 3,
      image:
        'https://minio.thecoffeehouse.com/image/admin/GANKET_web_734379.jpg',
    },
  ];

  // let refFlatlist;
  // const replaceScroll = () => {
  //   const lengthOfData = dataBanner.length;
  //   let scrollValue = 0;
  //   let scrolled = 0;
  //   setInterval(() => {
  //     scrolled++;
  //     if (scrolled < lengthOfData) {
  //       scrolled = scrollValue + SIZES.width;
  //     } else {
  //       scrollValue = 0;
  //       scrolled = 0;
  //     }
  //   }, 2000);
  //   refFlatlist.scrollToOffset({animated: true, offset: scrollValue});
  // };

  const scrollX = useRef(new Animated.Value(0)).current;
  let position = Animated.divide(scrollX, SIZES.width);
  const DeliveryView = () => {
    return (
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryLeft}>
          <Image
            style={styles.deliveryimage}
            source={require('../../assets/images/Delivery2.png')}
          />
          <Text style={styles.deliveryText}>Giao hàng</Text>
        </View>
        <View style={styles.deliveryMid}></View>
        <View style={styles.deliveryRight}>
          <Image
            style={styles.deliveryimage}
            source={require('../../assets/images/Pickup2.png')}
          />
          <Text style={styles.deliveryText}>Mang đi</Text>
        </View>
      </View>
    );
  };
  console.log(scrollX);
  const Paginator = ({scrollX}) => {
    console.log('scrollX', scrollX);
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {dataBanner.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 3,
                width: 20,
                backgroundColor: '#000',
                margin: 10,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    );
  };
  const Banner = () => {
    const carousel = ({index, item}) => {
      console.log(item);
      return (
        <View
          style={{
            justifyContent: 'center',
            marginHorizontal: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <Image
            style={{
              width: SIZES.width - 40,
              height: 150,
              borderRadius: 8,
            }}
            source={{uri: item.image}}
          />
        </View>
      );
    };
    return (
      <View style={{width: SIZES.width, height: 155}}>
        <Animated.FlatList
          // ref={refFlatlist => (this.refFlatlist = refFlatlist)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal={true}
          data={dataBanner}
          renderItem={carousel}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            marginRight: 20,
          }}
          scrollEventThrottle={32}
          // onScroll={Animated.event(
          //   [{nativeEvent: {contentOffset: {x: scrollX}}}],
          //   {useNativeDriver: false},
          // )}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderHome title="Home" />
      <DeliveryView />
      <Banner />
      <Paginator scrollX={scrollX} />
    </View>
  );
};

export default Home;
