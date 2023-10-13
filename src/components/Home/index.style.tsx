import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
    wrap: {
        display: 'flex',
        backgroundColor: 'lightgray',
    },
    home: {
        margin: 10
    },

});

export default Styles