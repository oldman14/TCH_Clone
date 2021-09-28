import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {COLORS, SIZES} from '../constants';

const CheckBox = ({item}) => {
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
  const ages = [3, 10, 18, 20];

  ages.findIndex(checkAge); // Returns 3
  console.log('ages.findIndex(checkAge), ', ages.findIndex(checkAge));
  function checkAge(age) {
    return age > 18;
  }

  console.log(checkAge);
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    console.log('checked', checked);
  }, [checked]);
  const handleCheck = item => {
    console.log(checked);
    if (checked.length < 1) {
      const checkedNow = [...checked];
      checkedNow.push(item);
      setChecked(checkedNow);
    } else {
      const index = checked.findIndex(check => check.id === item.id);
      console.log(index);
      if (index < 0) {
        const checkedNow = [...checked];
        checkedNow.push(item);
        console.log('push', checkedNow);
        setChecked(checkedNow);
      } else {
        const checkedNow = [...checked];
        checkedNow.splice(index, 1);
        console.log('splice', checkedNow);
        setChecked(checkedNow);
      }
    }
  };
  //   console.log('checked', checked);

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Topping</Text>
        <Image
          style={styles.imageTitle}
          source={require('../assets/images/asterisk.png')}
        />
      </View>
      <Text>Chọn tối đa 2 loại</Text>
      {DATA.map((val, index) => (
        <TouchableOpacity
          onPress={() => handleCheck(val)}
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
            {checked.findIndex(item => item.id === val.id) >= 0 ? (
              <Image
                style={styles.rbt}
                source={require('../assets/images/checked-checkbox.png')}
              />
            ) : (
              <Image
                style={styles.rbt}
                source={require('../assets/images/unchecked-checkbox-48.png')}
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
export default CheckBox;
