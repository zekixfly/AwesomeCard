import {Button, Image, ScrollView, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './index.style';

const CardDetail = ({navigation, route, apiData}: any) => {
  const [aData, setAData] = apiData.articleApi;
  console.log('aData:', aData);
  console.log('route.params:', route.params);
  const {id, account, nickname, title, date, imageUrl, content, like} =
    aData.find((item: any) => item.id === route.params.id);
  return (
    <ScrollView>
      <Text>
        {nickname}‧{date}
      </Text>
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
          <Text style={Styles.descContent}>{content}</Text>
          <Button
            title="回上一頁"
            color={'mediumvioletred'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CardDetail;
