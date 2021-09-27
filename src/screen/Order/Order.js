import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  bottomSheetModalRef,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import HeaderOrder from '../../component/HeaderOrder';
import {COLORS} from '../../constants';
import {fetchData} from '../Order/porductSlice';
import {styles} from '../Order/Style';
import ListProduce from './ListProduce';

const Order = () => {
  const [scrollYCurrent, setscollYCurrent] = useState();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [tabs, settab] = useState([]);
  const [typeProduct, setTypeProduct] = useState('');
  const _onMeasurement = (index, tab) => {
    tabs[index] = tab;
    settab([...tabs]);
  };
  // variables
  // const snapPoints = useMemo(() => ['50%', '50%'], []);
  // const [menu, setmenu] = useState();
  let dataTransformed;
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const DATA = useSelector(state => state.product.menu);
  if (DATA != undefined) {
    dataTransformed = DATA.map(
      ({
        id: id,
        name: name,
        products: data,
        slug: slug,
        style: style,
        thumbnail: thumbnail,
        title: title,
      }) => ({
        id,
        name,
        data,
        slug,
        style,
        thumbnail,
        title,
      }),
    );
  }
  useEffect(() => {
    if (tabs != undefined) {
      tabs?.map((val, i) => {
        if (i === val.length) {
          scrollYCurrent >= val.anchor;
        } else {
          if (scrollYCurrent >= val.anchor) {
            setTypeProduct(dataTransformed[i]?.name);
          }
        }
      });
    }
  }, [scrollYCurrent]);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  console.log(dataTransformed);
  console.log(typeProduct);
  const HeaderSection = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.typeProduct}>
          <TouchableOpacity
            onPress={handlePresentModalPress}
            style={styles.typeProduct}>
            <Text style={styles.typeText}>
              {typeProduct ? typeProduct : `Thực đơn`}
            </Text>
            <Image
              style={styles.typeImage}
              source={require('../../assets/images/expand-arrow.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/search.png')}
          />
        </View>
        <View style={styles.likeContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/heart.png')}
          />
        </View>
      </View>
    );
  };
  const renderHandle = () => {
    return (
      <View
        style={{
          height: 50,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          shadowOffset: {width: 1, height: 1},
          shadowColor: COLORS.background,
        }}>
        <Text style={{fontWeight: '600'}}>Thực đơn</Text>
        <Image
          style={{
            position: 'absolute',
            right: 10,
            width: 20,
            height: 20,
          }}
          source={require('../../assets/images/idelete.png')}
        />
      </View>
    );
  };

  const Item = ({title}) => {
    // console.log('title', title);
    return (
      <Animated.View style={styles.item}>
        <View style={{flex: 8, justifyContent: 'space-between'}}>
          <Text numberOfLines={1} style={styles.itemTitle}>
            {title.name}
          </Text>
          <Text numberOfLines={2} style={styles.itemDescription}>
            {title.description}
          </Text>
          <Text style={styles.itemPrice}>{title.price}</Text>
        </View>
        <Image style={styles.itemImage} source={{uri: title.thumbnail}} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <BottomSheetModalProvider>
        <HeaderOrder />
        <HeaderSection />
        <Animated.ScrollView
          contentContainerStyle={{margin: 10}}
          contentOffset={{x: 0, y: 0}}
          onScroll={event =>
            setscollYCurrent(event.nativeEvent.contentOffset.y)
          }
          scrollEventThrottle={1}>
          <View style={styles.divider} />
          <ListProduce onMeasurement={_onMeasurement} data={dataTransformed} />
        </Animated.ScrollView>
        <BottomSheetModal
          bottomInset={1}
          handleComponent={renderHandle}
          handleIndicatorStyle={{backgroundColor: '#f90', opacity: 0}}
          enableOverDrag={false}
          backdropComponent={renderBackdrop}
          enableDismissOnClose={true}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default Order;
