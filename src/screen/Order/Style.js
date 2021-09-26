import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 6,
    height: 60,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  typeProduct: {
    height: 35,
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSection,
    marginLeft: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  typeImage: {
    width: 20,
    height: 20,
  },
  searchContainer: {
    flex: 1,
    height: 35,
    backgroundColor: COLORS.backgroundSection,
    marginHorizontal: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeContainer: {
    flex: 1,
    height: 35,
    backgroundColor: COLORS.backgroundSection,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 15,
    height: 15,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  headerSectionlist: {
    fontSize: SIZES.h3,
    fontWeight: '500',
    padding: 5,
  },
  title: {
    fontSize: 24,
  },
  itemTitle: {
    fontSize: SIZES.body3,
    color: '#000',
    fontWeight: '500',
  },
  itemDescription: {
    fontSize: SIZES.body4,
  },
  itemImage: {
    width: 85,
    height: 90,
    borderRadius: 5,
    marginLeft: 5,
  },
  contentContainer: {
    backgroundColor: COLORS.backgroundSection,
    flex: 1,
  },
});
