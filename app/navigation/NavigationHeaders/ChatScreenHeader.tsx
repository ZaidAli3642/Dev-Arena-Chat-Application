import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {AppText, Header} from '../../components';
import {Image} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {fonts, fontWeight} from '../../config';

interface Props {
  headerProps: object;
}

const ChatScreenHeader: React.FC<PropsWithChildren<Props>> = ({
  headerProps,
}) => {
  const navigation = useNavigation();
  const imageSource1 =
    'https://images.unsplash.com/photo-1595781572981-d63151b232ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

  const imageSource2 =
    'https://images.unsplash.com/photo-1545418776-a37fba72a75d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

  return (
    <Header onPress={() => navigation.goBack()}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            width={45}
            height={45}
            alt={'profile image'}
            rounded="full"
            source={{uri: imageSource1}}
          />
          <Image
            width={45}
            height={45}
            alt={'profile image'}
            rounded="full"
            source={{uri: imageSource2}}
            ml={2}
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <AppText
            title={'Zaid Saleem'}
            fontFamily={fonts.RobotoRegular}
            fontWeight={fontWeight.normal}
            styles={{letterSpacing: 1}}
          />
          <AppText
            title={'Zaid Saleem'}
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
