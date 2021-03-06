import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Order, Other, Points, Store} from '../screen/index';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants/index';
import {getHeaderTitle} from '@react-navigation/elements';
import Header from '../component/Header';
import Newfeeds from '../screen/Home/Newfeeds';
import {useRoute} from '@react-navigation/core';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MyBackButton = () => {
  return (
    <View>
      <MaterialCommunityIcons name="chevron-left" />
    </View>
  );
};
const HomeStack = ({navigation, route}) => {
  console.log(navigation.route);
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);
          console.log(navigation);
          return (
            <Header
              title={title}
              leftButton={
                back ? <MyBackButton onPress={navigation.goBack} /> : undefined
              }
              style={options.headerStyle}
            />
          );
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Newfeed" component={Newfeeds} />
    </Stack.Navigator>
  );
};
const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);
          console.log(route);
          return (
            <Header
              title={title}
              leftButton={
                back ? <MyBackButton onPress={navigation.goBack} /> : undefined
              }
              style={options.headerStyle}
            />
          );
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Order"
        component={Order}
      />
    </Stack.Navigator>
  );
};
const StoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <Header
              title={title}
              leftButton={
                back ? <MyBackButton onPress={navigation.goBack} /> : undefined
              }
              style={options.headerStyle}
            />
          );
        },
      }}>
      <Stack.Screen name="Store" component={Store} />
    </Stack.Navigator>
  );
};
const PointsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <Header
              title={title}
              leftButton={
                back ? <MyBackButton onPress={navigation.goBack} /> : undefined
              }
              style={options.headerStyle}
            />
          );
        },
      }}>
      <Stack.Screen name="Points" component={Points} />
    </Stack.Navigator>
  );
};
const OtherStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <Header
              title={title}
              leftButton={
                back ? <MyBackButton onPress={navigation.goBack} /> : undefined
              }
              style={options.headerStyle}
            />
          );
        },
      }}>
      <Stack.Screen name="Other" component={Other} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      activeColor={COLORS.primary}
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Trang ch???',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home-outline"
              style={{
                color: focused ? COLORS.primary : COLORS.iconBottom,
              }}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          title: '?????t h??ng',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="coffee-outline"
              style={{
                color: focused ? COLORS.primary : COLORS.iconBottom,
              }}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StoreStack"
        component={StoreStack}
        options={{
          title: 'C???a h??ng',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              style={{
                color: focused ? COLORS.primary : COLORS.iconBottom,
              }}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PointStack"
        component={PointsStack}
        options={{
          title: 'T??ch ??i???m',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="ticket-outline"
              style={{
                color: focused ? COLORS.primary : COLORS.iconBottom,
              }}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OtherStack"
        component={OtherStack}
        options={{
          title: 'Kh??c',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-square"
              style={{
                color: focused ? COLORS.primary : COLORS.iconBottom,
              }}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
