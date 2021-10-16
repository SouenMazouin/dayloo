import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blocksContainer: {
    marginTop: 10,
    paddingTop: 15,
    paddingLeft: 1,
    paddingRight: 5,
  },
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
