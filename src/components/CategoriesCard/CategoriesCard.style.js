import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 5,
    borderBottomLeftRadius: 50,
    borderTopStartRadius: 45,
    borderWidth: 1,
    borderColor: '#aec4c7',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  titleContainer: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
  },
});
