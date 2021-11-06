import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 15,
    color: 'grey',
  },
  buttonMenuContainer: {
    borderRadius: 100,
    margin: 10,
  },
  icons: {
    height: 25,
    width: 25,
    borderRadius: 10,
  },
});

export default styles;
