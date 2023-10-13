import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  ProfileWrap: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightcyan',
  },
  imgArea: {
    marginVertical: 30,
    backgroundColor: 'gray',
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: 'mediumvioletred',
    borderStyle: 'solid',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  },
  ProfileInfo: {
    padding: 10,
  },
  ProfileInfoText: {
    fontSize: 15,
    fontWeight: '900',
  },
});

export default Style;
