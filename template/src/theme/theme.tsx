import {StyleSheet} from 'react-native';

const stylesheet = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: '900',
    fontSize: 20,
  },
});

const theme = {
  stylesheet: stylesheet,
};

export default theme;
