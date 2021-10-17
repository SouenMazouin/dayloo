import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  leftLine: {
    borderWidth: 1,
    flexGrow: 1,
    height: 0,
  },
  logoCategorie: {
    width: 80,
    height: 80,
    margin: 10,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },

  rightLine: {
    borderWidth: 1,
    flexGrow: 1,
  },
});

export default styles;
