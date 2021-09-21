import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../constants'


const Header = (props) => {
    const {title} = props;
    const HeaderIos = () =>{
        return(
            <View >
           <StatusBar
           animated={true}
           backgroundColor={COLORS.white}
           barStyle='dark-content'
          />
          <Text style={styles.title}>{title}</Text>
            </View>
        )
       }
       const HeaderAndroid = () =>{
           return(
               <View style={styles.conatainer}>
              <StatusBar
              animated={true}
              backgroundColor={COLORS.white}
              barStyle='dark-content'
             />
             <Text style={styles.title}>{title}</Text>
               </View>
          
           )
       }
    return(
    // {Platform.OS ==='ios' ? (<HederAndroid/>) : <HederIos/>}
    <View >
        {Platform.OS === 'ios' ? (<HeaderIos/>) : (<HeaderAndroid/>)}
    </View>
    )
}

export default Header

const styles = StyleSheet.create({
    conatainer: {
        height: 45,
        width: SIZES.width,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    conatainer2: {
        height: 80,
        width: SIZES.width,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    title: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        paddingLeft:15
    }
})
