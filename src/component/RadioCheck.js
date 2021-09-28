import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {COLORS, SIZES} from '../constants';
const RadioCheck = () => {
  const DATA = [
    {
      id: 2520,
      code: '10010134',
      price: 0,
      price_str: '0',
      name: 'Vừa',
      min: null,
      max: null,
    },
    {
      id: 2529,
      code: '10010138',
      price: 5000,
      price_str: '5000',
      name: 'Lớn',
      min: null,
      max: null,
    },
  ];
  const [checked, setChecked] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Size</Text>
        <Image
          style={styles.imageTitle}
          source={require('../assets/images/asterisk.png')}
        />
      </View>
      <Text>Chọn 1 loại size</Text>
      {DATA.map((val, index) => (
        <TouchableOpacity
          onPress={() => setChecked(index)}
          style={{
            height: 40,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {index == checked ? (
              <Image
                style={styles.rbt}
                source={require('../assets/images/unchecked.png')}
              />
            ) : (
              <Image
                style={styles.rbt}
                source={require('../assets/images/circle.png')}
              />
            )}
            <Text style={styles.size}>{val.name}</Text>
          </View>
          <Text>{val.price}</Text>
          {/* {index != DATA.length ? <View style={styles.line} /> : <View />} */}
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginTop: 5,
    paddingVertical: 10,
  },
  rbt: {
    width: 15,
    height: 15,
  },
  size: {
    paddingLeft: 10,
    fontSize: SIZES.body3,
  },
  imageTitle: {
    width: 10,
    height: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  title: {
    fontSize: SIZES.h4,
  },
  line: {
    width: SIZES.width,
    height: 1,
    backgroundColor: COLORS.lightGray4,
  },
});
export default RadioCheck;
