import { Dimensions, StyleSheet } from 'react-native';
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  cardScrollView: {
    marginBottom: 10,
  },
  highlightTitleImage: {
    width: "85%",
    height: 250,
    aspectRatio: 1,
  },
  highlightTitleImageContainer: {
    alignItems: 'center',
  },
  highlightTitleFormulaContainer: {
    alignItems: 'center',
    padding: 5,
  },
  highlightTitleFormula: {
    width: 230,
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 5,
    paddingBottom: 10,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 6,
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 5,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  subtitle: {
    marginBottom: 5,
  },
});

export default styles;
