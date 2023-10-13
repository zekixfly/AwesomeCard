import { Button, Image, ScrollView, Text, View } from "react-native";
import Styles from "./index.style";

export const ProfileView = (props: any) => {
    const [uData, setUData] = props.apiData.userApi;
    // uData.avatarIcon = '123'
    return (
      <View style={Styles.ProfileWrap}>
        <View style={Styles.imgArea}>
          {uData?.avatarIcon ? (
            <Image
              style={Styles.img}
              source={{
                uri: uData?.avatarIcon,
              }}
            />
          ) : (
            <Text style={{color: 'white'}}>Not Image!</Text>
          )}
        </View>
        <ScrollView>
          <View style={Styles.ProfileInfo}>
            <Text style={Styles.ProfileInfoText}>帳號: {uData.account}</Text>
            <Text style={Styles.ProfileInfoText}>暱稱: {uData.nickname}</Text>
            <Text style={Styles.ProfileInfoText}>信箱: {uData.email}</Text>
            <Text style={Styles.ProfileInfoText}>
              註冊日期: {uData.RegistrationDate}
            </Text>
          </View>
          <Button title="編輯" color="mediumvioletred" onPress={() => props.navigation.navigate('ProifileEdit')}/>
        </ScrollView>
      </View>
    );
  };