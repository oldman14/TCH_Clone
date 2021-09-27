import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
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
  headerNewfeedContainer: {
    flexDirection: 'column',
    padding: 10,
  },
  headerNewfeedTitleContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  headerNewfeedTitle: {
    fontSize: SIZES.body4,
    fontWeight: '500',
  },
  headerNewfeedTitleSelected: {
    paddingHorizontal: 3,
    fontSize: SIZES.body4,
    fontWeight: '500',
    color: COLORS.primary,
  },
  headerNewfeedTouch: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerNewfeedTouchSelected: {
    backgroundColor: COLORS.lightGray3,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 15,
  },
  newfeedTitle: {
    fontSize: SIZES.h2,
    padding: 5,
    fontWeight: '500',
  },
  itemNewfeedContainer: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 10,
  },
  imageItemNewfeed: {
    width: '100%',
    height: SIZES.width / 2 - 30,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  imageTimeItemNewfeed: {
    width: 15,
    marginRight: 8,
    height: 15,
  },
  titleItemNewfeed: {
    fontWeight: '500',
    fontSize: 13,
    paddingVertical: 5,
  },
});
