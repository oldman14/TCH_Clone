import React from 'react';
import {View, Text, Animated, Image} from 'react-native';
import {styles} from './Style';
const ListProduce = ({onMeasurement, data}) => {
  return (
    <View>
      {data?.map(({name, data: menuItems}, index) => (
        <View
          style={styles.section}
          key={index}
          onLayout={({
            nativeEvent: {
              layout: {y: anchor},
            },
          }) => {
            return onMeasurement(index, {name, anchor: anchor - 60});
          }}>
          <Text style={styles.headerSectionlist}>{name}</Text>
          {menuItems.map(({title, description, price, thumbnail}, j) => (
            <Animated.View style={styles.item}>
              <View style={{flex: 8, justifyContent: 'space-between'}}>
                <Text numberOfLines={1} style={styles.itemTitle}>
                  {name}
                </Text>
                <Text numberOfLines={2} style={styles.itemDescription}>
                  {description}
                </Text>
                <Text style={styles.itemPrice}>{price}</Text>
              </View>
              <Image style={styles.itemImage} source={{uri: thumbnail}} />
            </Animated.View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default ListProduce;
