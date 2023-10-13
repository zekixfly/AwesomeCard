import React, {useContext} from 'react';
import {ApiContext} from 'App';
import {Text, ScrollView, View} from 'react-native';
import Card from '@components/Collect/Card';

export default function Collect(props:any) {
  const apiData: any = useContext(ApiContext);
  const [aData, setAData] = apiData.articleApi;
  const [uData, setUData] = apiData.userApi;

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 20,
            backgroundColor: 'red',
            color: '#fff',
            padding: 10,
          }}>
          已收藏的文章
        </Text>
      </View>
      {uData?.collectID.length ? (
        uData?.collectID?.map((id: string) => {
          return (
            <Card
              key={id}
              {...props}
              item={aData.find((item: any) => item.id === id)}
              apiData={apiData}
            />
          );
        })
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>尚無收藏的文章!</Text>
        </View>
      )}
    </ScrollView>
  );
}
