import {Button, Image, Text, View} from 'react-native';
import Styles from './index.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React, {createContext, useContext} from 'react';

const Card = ({item, apiData, navigation}: any) => {
  const [jData, setJData] = apiData.articleApi;
  const [uData, setUData] = apiData.userApi;
  let {id, account, nickname, title, date, imageUrl, content, like} = item;
  let collectData, filterCollect;

  const removeCollect = (id: string) => {
    console.log('uData', uData.collectID);
    filterCollect = uData?.collectID?.filter((itemID: any) => itemID !== id);
    collectData = {
      ...uData,
      collectID: [...filterCollect],
    };
    setUData({...collectData});
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
          <FontAwesome6
            onPress={() => removeCollect(id)}
            style={Styles.icon}
            name="square-minus"
            color={'black'}
          />
        </View>
      </View>

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
          <Text numberOfLines={1} style={Styles.title}>{title}</Text>
          <Text numberOfLines={5}>{content}</Text>
        </View>
        <View style={Styles.moreArea}>
          <Fontisto
            // onPress={() => navigate}
            onPress={() => navigation.navigate('CardDetail', {id})}
            style={Styles.icon}
            name="caret-right"
            color={'black'}
          />
        </View>
      </View>
      <View style={Styles.button}>
        <Text>
          <Text>
            <MaterialIcons style={Styles.icon} name="favorite" color={'red'} />
          </Text>
          <Text style={Styles.icon}>{like}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Card;
