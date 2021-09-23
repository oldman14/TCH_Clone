import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  deliveryContainer: {
    height: SIZES.height / 8,
    margin: 15,
    borderColor: COLORS.darkgray,
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  deliveryLeft: {
    flex: 4.8,
    justifyContent: 'center',
  },
  deliveryRight: {
    flex: 4.8,
    justifyContent: 'center',
  },
  deliveryMid: {
    flex: 0.01,
    backgroundColor: COLORS.darkgray,
    marginVertical: 15,
  },
  deliveryimage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  deliveryText: {
    alignSelf: 'center',
    fontSize: SIZES.body4,
  },
});
