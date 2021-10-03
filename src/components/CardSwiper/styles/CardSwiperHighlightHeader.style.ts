import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  highlightTitleImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  highlightTitleImageContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.3,
    height: windowHeight / 3.8,
    alignSelf: 'center',
    borderRadius: 5,
  },
  highlightTitleFormulaContainer: {
    alignItems: 'center',
    padding: 5,
  },
  highlightTitleFormula: {
    width: 230,
  },
});

export default styles;
