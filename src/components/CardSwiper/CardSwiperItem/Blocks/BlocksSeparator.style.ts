import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blocksSeparator: {
    height: 1,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.27,
    elevation: 1.8,
  },
  blocksSeparatorContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
});

export default styles;
