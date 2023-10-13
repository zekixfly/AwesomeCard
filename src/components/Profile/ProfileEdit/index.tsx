import {Button, Text, TextInput, View} from 'react-native';
import Styles from './index.style';
import {useState} from 'react';

export const ProfileEdit = (props: any) => {
  const [uData, setUData] = props.apiData.userApi;
  const [value, onChangeText] = useState({
    nickname: uData.nickname,
    email: uData.email,
  });

  const saveProifle = () => {
    setUData({
      ...uData,
      ...value,
    });
  };

  return (
    <View style={{flex: 1, margin: 5}}>
      <Text>帳號: </Text>
      <TextInput
        style={Styles.input}
        editable={false}
        value={uData.account}
      />
      <Text>暱稱: </Text>
      <TextInput
        style={Styles.input}
        onChangeText={text => onChangeText({...value, nickname: text})}
        value={value.nickname}
      />
      <Text>信箱: </Text>
      <TextInput
        style={Styles.input}
        onChangeText={text => onChangeText({...value, email: text})}
        value={value.email}
      />
      <View style={Styles.actionBar}>
        <View style={Styles.button}>
          <Button
            title="取消"
            color="gray"
            onPress={() => props.navigation.navigate('ProfileView')}
          />
        </View>
        <View style={Styles.button}>
          <Button
            title="保存"
            color="mediumvioletred"
            onPress={() => {
              saveProifle();
              props.navigation.navigate('ProfileView');
            }}
          />
        </View>
      </View>
    </View>
  );
};
