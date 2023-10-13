import {Button, Image, Text, View} from 'react-native';
import Styles from './index.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React, {createContext, useContext} from 'react';

const Card = ({item, apiData, navigation}: any) => {
  const [aData, setAData] = apiData.articleApi;
  const [uData, setUData] = apiData.userApi;
  let {id, account, nickname, title, date, imageUrl, content, like} = item;
  let likeData, collectData;
  const plusOne = (id: string) => {
    likeData = aData.map((item: any) => {
      return item.id === id ? {...item, like: ++item.like} : item;
    });
    setAData([...likeData]);
  };
  const collectArticle = (id: string) => {
    let collectItem = uData?.collectID?.find((itemID: any) => itemID === id);
    if (!collectItem) {
      collectData = {
        ...uData,
        collectID: [...uData.collectID, id],
      };
      setUData({...collectData});
    }

    console.log('uData', uData.collectID);
  };
  return (
    <View style={Styles.card}>
      <View style={Styles.topInfo}>
        <View>
          <Text>
            {nickname}‧{date}
          </Text>
        </View>
        <View>
          <Fontisto
            onPress={() => collectArticle(id)}
            style={Styles.icon}
            name="favorite"
            color={
              uData?.collectID?.some((itemId: string) => itemId === id)
                ? 'red'
                : 'gray'
            }>
            {uData?.collectID?.some((itemId: string) => itemId === id)
              ? '已收藏'
              : '收藏'}
          </Fontisto>
        </View>
      </View>
      <Text style={Styles.title}>{title}</Text>
      <View style={Styles.contentBar}>
        <View style={Styles.imgArea}>
          {imageUrl ? (
            <Image
              style={Styles.img}
              source={{
                uri: imageUrl,
              }}
            />
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'gray',
              }}>
              <Text style={{color: 'white'}}>Nott Image!</Text>
            </View>
          )}
        </View>
        <View style={Styles.descArea}>
          <Text numberOfLines={10}>{content}</Text>
        </View>
      </View>

      <View style={Styles.actionBar}>
        <View style={Styles.button}>
          <Text>
            <Text>
              <MaterialIcons
                onPress={() => plusOne(id)}
                style={Styles.icon}
                name="favorite"
                color={'red'}
              />
            </Text>
            <Text style={Styles.icon}>{like}</Text>
          </Text>
        </View>
        <View style={Styles.button}>
          <MaterialIcons
            onPress={() => navigation.navigate('CardDetail', {id})}
            style={Styles.icon}
            name="expand-more"
            color={'black'}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
