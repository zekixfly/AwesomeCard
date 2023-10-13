import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: 'aliceblue',
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '900'
  },
  contentBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'auto',
    height: 200,
    
  },
  imgArea: {
    // backgroundColor: 'pink',
    width: '35%',
    height: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  descArea: {
    // backgroundColor: 'pink',
    width: '65%',
    height: 'auto',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  actionBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'cyan',
  },
  button: {
    width: 'auto',
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 25,
    lineHeight: 50,
  },
});

export default Styles;
