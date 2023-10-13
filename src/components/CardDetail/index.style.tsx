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
    flex: 2,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10
    
  },
  imgArea: {
    // backgroundColor: 'cyan',
    // width: '100%',
    height: 200,
  },
  descArea: {
    flex:1,
    paddingBottom: 30,
    // backgroundColor: 'pink',
    width: '100%',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  descContent:{
    paddingVertical: 30,
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
