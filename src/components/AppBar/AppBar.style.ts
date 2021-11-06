import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonMenuContainer: {
    borderRadius: 100,
  },
  icons: {
    height: 28,
    width: 28,
  },
});

export default styles;
