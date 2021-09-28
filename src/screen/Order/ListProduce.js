import React from 'react';
import {View, Text, Animated, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Style';
const ListProduce = ({onMeasurement, data, render}) => {
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
          {menuItems.map((item, j) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                return render({item});
              }}>
              <Animated.View style={styles.item}>
                <View style={{flex: 8, justifyContent: 'space-between'}}>
                  <Text numberOfLines={1} style={styles.itemTitle}>
                    {item.name}
                  </Text>
                  <Text numberOfLines={2} style={styles.itemDescription}>
                    {item.description}
                  </Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
                <Image
                  style={styles.itemImage}
                  source={{uri: item.thumbnail}}
                />
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default ListProduce;
