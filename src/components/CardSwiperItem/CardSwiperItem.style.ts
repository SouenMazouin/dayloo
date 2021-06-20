import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  cardScrollView: {
    marginBottom: 10,
  },
  highlightTitleImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  highlightTitleImageContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: windowWidth / 1.25,
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
  leftLine: {
    borderWidth: 1,
    flexGrow: 1,
    height: 0,
  },
  logoCategorie: {
    width: 90,
    height: 90,
    margin: 10,
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  rightLine: {
    borderWidth: 1,
    flexGrow: 1,
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
