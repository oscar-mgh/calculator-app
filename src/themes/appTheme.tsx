import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bgnd: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 15
  },
  smallResult: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
