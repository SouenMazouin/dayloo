import { StyleSheet, Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  highlightTitleImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  highlightTitleImageContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: 300,
    height: windowHeight / 3.8,
    alignSelf: 'center',
    borderRadius: 4,
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
