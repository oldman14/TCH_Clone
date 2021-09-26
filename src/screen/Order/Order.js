import React, {useEffect, useState, useRef, useCallback, useMemo} from 'react';
import {View, Text, Image, SectionList, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderOrder from '../../component/HeaderOrder';
import {styles} from '../Order/Style';
import {fetchData, productActions} from '../Order/porductSlice';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetModalProvider,
  useBottomSheet,
  bottomSheetModalRef,
  BottomSheetModal,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {COLORS} from '../../constants';
import Content from '../Store/Content';
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
  const items = [
    {
      title: 'Long Hongdae Nights',
      description:
        'Korean fried chicken glazed with Gochujang, garnished with sesame & spring onions, served with fries & Miss Miu Mayo',
      price: '26 CHF',
    },
    {
      title: 'Late Sunset',
      description:
        'Korean fried chicken starter with dirty cheese sauce and Artisan Hot Sauce - the naughty version new, favourite',
      price: '13.50 CHF',
    },
    {
      title: 'Cabbage Kimchi',
      description: 'Portion, vegan',
      price: '5.00 CHF',
    },
    {
      title: 'Namur by Pieces',
      description:
        'Homemade steamed dim sum with minced pork, shiitake mushrooms and smokey honey flavour, four pcs',
      price: '10.50 CHF',
    },
    {
      title: 'Silim Lights',
      description:
        'Beef Bibimbap, sesame oil, rice, beans, spinach, carrots, spring onions, Chinese cabbage, shiitake mushrooms, roasted onions and egg',
      price: '26.50 CHF',
    },
  ];

  const menu = [
    {name: 'Starters', items},
    {name: 'Order Again', items},
    {name: 'Picked for you', items},
    {name: 'Gimbap Sushi', items},
  ];
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
  // setmenu(dataTransformed);
  // setmenu(DATA);
  const HeaderSection = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.typeProduct}>
          <TouchableOpacity
            onPress={handlePresentModalPress}
            style={styles.typeProduct}>
            <Text>{typeProduct}</Text>
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
        {/* {dataTransformed != undefined ? (
          <Animated.SectionList
            sections={dataTransformed}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Item title={item} />}
            renderSectionHeader={({section}) => {
              return (
                <Text style={styles.headerSectionlist}>{section.title}</Text>
              );
            }}
            contentContainerStyle={{margin: 15}}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: false},
            )}
            stickySectionHeadersEnabled={false}
          />
        ) : (
          <View />
        )} */}
        <Animated.ScrollView
          contentContainerStyle={{margin: 10}}
          contentOffset={{x: 0, y: 0}}
          // onScroll={Animated.event(
          //   [{nativeEvent: {contentOffset: {x: scrollX, y: scrollY}}}],
          //   {useNativeDriver: false},
          // )}
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
