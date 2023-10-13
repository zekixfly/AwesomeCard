import Content from '@components/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Collect from '@components/Collect';
import Profile from '@components/Profile';
import Home from '@components/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        // tabBarShowLabel: false,
        tabBarStyle: {
          flex: 0.1,
        },
        tabBarLabelStyle: {
          flex: 1,
          alignItems: 'center',
          height: '100%'
        },
        tabBarActiveTintColor: 'mediumvioletred',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          let icon=<Ionicons name='home' size={size} color={color} />;
          if(route.name==='Home') {
            icon = <Ionicons name={focused ? 'home': 'home-outline'} size={size} color={color} />
          }
          if(route.name==='collect') {
            icon = <Fontisto name='favorite' size={size} color={color} />
          }
          if(route.name==='Profile') {
            icon = <Ionicons name={focused ? 'person': 'person-outline'} size={size} color={color} />
          }
          return (
           icon
          );
        },
        tabBarLabel: ({focused, color}) => {
          return <Text style={{fontSize: 16, color: color}}>{route.name}</Text>;
        },
      })}>
      <Tab.Screen name="Home" options={{title: '首頁'}} component={Home} />

      <Tab.Screen
        name="collect"
        component={Collect}
        options={{title: '收藏'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: '個人'}}
      />
    </Tab.Navigator>
    // <Stack.Navigator initialRouteName="Notifications">
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="Profile" component={Profile} />
    //   <Stack.Screen name="Notifications" component={Notifications} />
    // </Stack.Navigator>
  );
}
