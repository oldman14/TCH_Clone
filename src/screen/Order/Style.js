import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 6,
    height: 60,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    justifyContent: 'space-evenly',
  },
  typeProduct: {
    height: 35,
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSection,
    marginLeft: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  typeText: {
    width: 200,
    height: 20,
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
  //style bottomsheetitem modal
  itemBotSheetImage: {
    width: 20,
    height: 20,
  },
  itemBotSheetName: {
    fontSize: SIZES.h2,
    fontWeight: '500',
  },
  centerViewRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemBotSheetPrice: {
    fontSize: SIZES.body3,
    marginTop: 5,
    marginBottom: 10,
  },
  itemBotSheetDes: {},
  infoItemContainer: {
    padding: 15,
    backgroundColor: COLORS.white,
    marginBottom: 8,
  },
  itemBotSheetViewBtnExit: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: COLORS.darkgray,
    padding: 3,
    borderRadius: 50,
  },
  itemBotSheetBtnExit: {
    width: 20,
    height: 20,
  },
  contentContainer: {
    backgroundColor: COLORS.backgroundSection,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});
