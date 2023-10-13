import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: 'aliceblue',
    borderWidth: 1,
    borderColor: 'gray'
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
    height: 150,
    
  },
  imgArea: {
    // backgroundColor: 'pink',
    width: '30%',
    height: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  descArea: {
    // backgroundColor: 'pink',
    width: '60%',
    height: 'auto',
  },
  moreArea: {
    // backgroundColor: 'pink',
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    height: 'auto',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  actionBar: {

  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'pink',
    width: 'auto',
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 25,
    lineHeight: 50,
  },
});

export default Styles;
