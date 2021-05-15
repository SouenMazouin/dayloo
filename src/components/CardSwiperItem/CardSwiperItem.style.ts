import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardScrollView: {
    marginBottom: 10,
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
    paddingBottom: 12,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
});

export default styles;
