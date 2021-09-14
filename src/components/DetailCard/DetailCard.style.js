import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 4,
    resizeMode: 'cover',
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#a30000',
  },
  area: {
    color: '#dd2c00',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 17,
  },
  desc: {
    margin: 10,
  },
  link: {
    borderRadius: 10,
    backgroundColor: 'red',
    margin: 25,
    padding: 1,
  },
});
