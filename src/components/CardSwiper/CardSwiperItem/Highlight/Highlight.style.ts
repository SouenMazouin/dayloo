import { StyleSheet, Dimensions } from 'react-native';
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
    backgroundColor: '#fafafa',
  },
  highlightTitleImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 2,
  },
  highlightTitleFormulaContainer: {
    resizeMode: 'cover',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 15,
  },
  highlightTitleFormula: {
    padding: 15,
    flex: 1,
  },
});

export default styles;
