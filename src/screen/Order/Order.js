import {
  BottomSheet,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Touchable,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderOrder from '../../component/HeaderOrder';
import RadioCheck from '../../component/RadioCheck';
import {COLORS, SIZES} from '../../constants';
import {fetchData} from '../Order/porductSlice';
import {styles} from '../Order/Style';
import ListProduce from './ListProduce';
import CheckBox from '../../component/CheckBox';
const Order = () => {
  const [scrollYCurrent, setscollYCurrent] = useState();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [tabs, settab] = useState([]);
  const [typeProduct, setTypeProduct] = useState('');
  const [dataItemBottomSheet, setDataItemBottomSheet] = useState();
  const [quantity, setQuantity] = useState(1);

  const _onMeasurement = (index, tab) => {
    tabs[index] = tab;
    settab([...tabs]);
  };

  // variables
  const bottomSheetModalRef = useRef(null);
  const bottomSheetModalRefItem = useRef(null);

  const refScroll = useRef(null);

  let dataTransformed;
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    console.log({bottomSheetModalRef});
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  // variables
  const snapPoints = useMemo(() => ['55%', '55%'], []);
  const snapPoints2 = useMemo(() => ['100%', '100%'], []);

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
  const scrollToProduct = item => {
    console.log(refScroll.current.scrollTo);
    console.log(tabs[item].anchor);
    bottomSheetModalRef.current?.close();
    refScroll.current?.scrollTo({x: 0, y: tabs[item].anchor, animated: true});
  };
  const ItemBottomSheet = () => {
    const renderItemBottom = ({index, item}) => {
      return (
        <TouchableOpacity
          onPress={() => scrollToProduct(index)}
          style={{
            flexDirection: 'row',
            height: 65,
            width: SIZES.width / 2 - 20,
            marginHorizontal: 5,
            marginVertical: 5,
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: 'white',
          }}>
          <Image
            style={{margin: 5, width: 55, height: 55, borderRadius: 5}}
            source={{uri: item.thumbnail}}
          />
          <Text style={{flex: 1}}>{item.title}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={dataTransformed}
        keyExtractor={item => item.id}
        renderItem={renderItemBottom}
        numColumns={2}
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: 5,
          backgroundColor: COLORS.lightGray3,
        }}
      />
    );
  };
  const BottomSheetItemModal = () => {
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

    // callbacks
    const handleSheetChanges = useCallback(index => {
      console.log('handleSheetChanges', index);
    }, []);

    // renders
    const renderBackdrop = useCallback(
      props => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={1}
          appearsOnIndex={2}
        />
      ),
      [],
    );
    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    );
  };
  const renderBottomSheetItem = ({item}) => {
    setDataItemBottomSheet(item);
    bottomSheetModalRefItem.current?.present();
  };
  console.log(dataItemBottomSheet);
  const renderBottomButton = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        {/* Bookmark */}
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            marginVertical: SIZES.base,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#eee',
            justifyContent: 'center',
          }}
          onPress={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}>
          <Text>-</Text>
        </TouchableOpacity>

        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              width: 30,
              fontSize: SIZES.h2,
              color: COLORS.black,
              marginHorizontal: 20,
              marginVertical: SIZES.base,
            }}>
            {quantity}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 5,
            marginVertical: SIZES.base,
            alignItems: 'center',
            backgroundColor: '#eee',
            justifyContent: 'center',
          }}
          onPress={() => setQuantity(quantity + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const RenderItemBottom = () => {
    const size = dataItemBottomSheet?.options[0];
    const topping = dataItemBottomSheet?.options[1];
    console.log(topping);
    return (
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <Image
            style={{width: SIZES.width, height: SIZES.width}}
            source={{uri: dataItemBottomSheet.thumbnail}}
          />
          <View style={styles.itemBotSheetViewBtnExit}>
            <Image
              style={styles.itemBotSheetBtnExit}
              source={require('../../assets/images/delete-white.png')}
            />
          </View>
        </View>
        <View style={styles.infoItemContainer}>
          <View style={styles.centerViewRow}>
            <Text style={styles.itemBotSheetName}>
              {dataItemBottomSheet.name}
            </Text>
            <Image
              style={styles.itemBotSheetImage}
              source={require('../../assets/images/heart.png')}
            />
          </View>
          <Text style={styles.itemBotSheetPrice}>
            {dataItemBottomSheet.price}
          </Text>
          <Text numberOfLines={3} style={styles.itemBotSheetDes}>
            {dataItemBottomSheet.description}
          </Text>
        </View>
        <RadioCheck item={size} />
        <CheckBox />
      </BottomSheetScrollView>
    );
  };
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const snapPoints3 = useMemo(() => ['95%']);

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    item => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  return (
    <View style={styles.container}>
      <BottomSheetModalProvider>
        <HeaderOrder />
        <HeaderSection />
        <Animated.ScrollView
          ref={refScroll}
          contentContainerStyle={{margin: 10}}
          contentOffset={{x: 0, y: 0}}
          onScroll={event =>
            setscollYCurrent(event.nativeEvent.contentOffset.y)
          }
          scrollEventThrottle={1}>
          <View style={styles.divider} />
          <ListProduce
            render={renderBottomSheetItem}
            onMeasurement={_onMeasurement}
            data={dataTransformed}
          />
        </Animated.ScrollView>

        <BottomSheetModal
          // enableContentPanningGesture={false}
          // enableHandlePanningGesture={false}
          // enableOverDrag={false}
          handleComponent={null}
          ref={bottomSheetModalRefItem}
          enableDismissOnClose={true}
          index={0}
          snapPoints={snapPoints3}>
          <RenderItemBottom />
        </BottomSheetModal>
        <BottomSheetModal
          bottomInset={1}
          handleComponent={renderHandle}
          handleIndicatorStyle={{backgroundColor: '#f90', opacity: 0}}
          enableOverDrag={false}
          backdropComponent={renderBackdrop}
          enableDismissOnClose={true}
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <ItemBottomSheet />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default Order;
