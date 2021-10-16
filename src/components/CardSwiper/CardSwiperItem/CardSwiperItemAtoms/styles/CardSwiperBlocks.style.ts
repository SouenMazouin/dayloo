import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blocksContainer: {
    marginTop: 10,
    paddingTop: 8,
    paddingLeft: 1,
    paddingRight: 20,
  },
  blocksSubContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingBottom: 20,
  },
  blockTableContainer: {
    paddingLeft: 25,
  },
  blockText: {
    fontSize: 15,
    lineHeight: 19,
  },
  blockExample: {
    fontSize: 13,
    paddingRight: 10,
    color: '#808080',
  },
  icons: {
    height: 22,
    width: 22,
  },
  paragraphBlockContainer: {
    paddingLeft: 12,
    paddingBottom: 15,
    paddingTop: 10,
  },
  paragraphBlockText: {
    fontSize: 29,
    fontFamily: 'PrimerPrint',
    letterSpacing: -0.8,
    lineHeight: 25,
  },
  paragraphBlockExample: {
    paddingLeft: 15,
    lineHeight: 20,
    fontFamily: 'Comfortaa',
    fontStyle: 'italic',
    color: '#808080',
  },
});

export default styles;
