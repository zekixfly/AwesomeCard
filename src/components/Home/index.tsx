import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Styles from './index.style';
import Card from './Card';
import {ApiContext} from 'App';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardDetail from '@components/CardDetail';

const Stack = createNativeStackNavigator();

const CardList = (props: any) => {
  const [aData, setAData] = props.apiData.articleApi;
  // console.log('aData',aData)
  return (
    <View style={Styles.wrap}>
      <ScrollView style={Styles.home}>
        {aData.map((item: any) => (
          <Card key={item.id} item={item} {...props} />
        ))}
      </ScrollView>      
    </View>
  );
};

const Home = () => {
  const apiData: any = useContext(ApiContext);

  return (
    <Stack.Navigator initialRouteName="CardList">
      <Stack.Screen name="CardList" options={{headerShown: false}}>
        {props => <CardList {...props} apiData={apiData} />}
      </Stack.Screen>
      <Stack.Screen name="CardDetail" options={{headerShown: false}}>
        {props => <CardDetail {...props} apiData={apiData} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Home;
