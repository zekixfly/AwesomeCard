import React, {createContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Router from './src/router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ArticlenData from './src/api/article-mock.json';
import UserData from './src/api/user-mock.json';

export const ApiContext = createContext({});
// let data;
const App = () => {
  const articleApi = useState(ArticlenData);
  const userApi = useState(UserData);
  // useEffect(() => {
  //   const mockFetch = async () => {
  //     try {
  //       const mockData = await fetch("../../../src/api/mock.json");
  //       data = await mockData.json();
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   }
  //   mockFetch()
  // },[]);
  return (
    <NavigationContainer>
      <ApiContext.Provider value={{articleApi, userApi}}>
        <Router />
      </ApiContext.Provider>
    </NavigationContainer>
  );
};
export default App;
