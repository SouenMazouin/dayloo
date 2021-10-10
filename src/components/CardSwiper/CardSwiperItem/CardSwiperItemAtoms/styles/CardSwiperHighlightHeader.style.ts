import { StyleSheet, Dimensions, Platform } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  highlightTitleImageContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 7,
    width: windowWidth / 1.22,
    height: windowHeight / 4.1,
    alignSelf: 'center',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 6,
  },
  highlightTitleImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 2,
  },
  highlightTitleFormulaContainer: {
    alignItems: 'center',
    padding: 5,
  },
  highlightTitleFormula: {
    width: 100,
  },
});

export default styles;
