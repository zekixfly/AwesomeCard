import {ApiContext} from 'App';
import {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileEdit} from './ProfileEdit';
import {ProfileView} from './ProfileView';

const Stack = createNativeStackNavigator();

export default function Profile() {
  const apiData: any = useContext(ApiContext);

  return (
    <Stack.Navigator initialRouteName="ProfileView">
      <Stack.Screen name="ProfileView" options={{headerShown: false}}>
        {props => <ProfileView {...props} apiData={apiData} />}
      </Stack.Screen>
      <Stack.Screen name="ProifileEdit" options={{headerShown: false}}>
        {props => <ProfileEdit {...props} apiData={apiData} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
