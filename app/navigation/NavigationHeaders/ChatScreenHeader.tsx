import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {AppText, Header} from '../../components';
import {Image} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {fonts, fontWeight} from '../../config';
import {useDispatch, useSelector} from 'react-redux';
import {clearMessages} from '../../redux/reducers/messagesReducers';

interface Props {
  headerProps: object;
}

const ChatScreenHeader: React.FC<PropsWithChildren<Props>> = ({
  headerProps,
}) => {
  const dispatch = useDispatch();
  const {receiver} = headerProps.route.params;
  const user = useSelector((state: any) => state.auth.userInfo);

  const navigation = useNavigation();

  return (
    <Header
      onPress={() => {
        dispatch(clearMessages({}));
        navigation.goBack();
      }}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            width={45}
            height={45}
            alt={'profile image'}
            rounded="full"
            defaultSource={require('../../assets/images/profile-avatar.jpg')}
            source={{uri: user.imageUri, cache: 'only-if-cached'}}
          />
          <Image
            width={45}
            height={45}
            alt={'profile image'}
            rounded="full"
            defaultSource={require('../../assets/images/profile-avatar.jpg')}
            source={{uri: receiver.imageUri}}
            ml={2}
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <AppText
            title={user.name}
            fontFamily={fonts.RobotoRegular}
            fontWeight={fontWeight.normal}
            styles={{letterSpacing: 1}}
          />
          <AppText
            title={receiver.name}
            fontFamily={fonts.RobotoRegular}
            fontWeight={fontWeight.normal}
            styles={{letterSpacing: 1}}
          />
        </View>
      </View>
    </Header>
  );
};

export default ChatScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingLeft: 10,
    alignItems: 'center',
    paddingBottom: 10,
  },
});
