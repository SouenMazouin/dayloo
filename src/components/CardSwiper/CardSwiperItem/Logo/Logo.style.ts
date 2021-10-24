import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  activityContainer: {
    width: 75,
    height: 75,
    margin: 10,
    justifyContent: 'center',
  },
  leftLine: {
    height: 1,
    flexGrow: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.27,
    elevation: 2,
  },
  logoCategorie: {
    width: 75,
    height: 75,
    margin: 10,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    paddingRight: 8,
    paddingLeft: 4,
  },

  rightLine: {
    height: 1,
    flexGrow: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.27,
    elevation: 2,
  },
});

export default styles;
