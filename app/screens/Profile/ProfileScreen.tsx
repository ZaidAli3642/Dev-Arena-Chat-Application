import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

import {AppButton, AppText, ListItem, Screen} from '../../components';
import {colors, fontWeight} from '../../config';
import ProfileImage from '../../components/ProfileImage';
import Entypo from 'react-native-vector-icons/Entypo';
import {routes} from '../../routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useRoute} from '@react-navigation/native';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const ProfileScreen: React.FC<PropsWithChildren<Props>> = ({navigation}) => {
  const route = useRoute();

  const {user} = route.params || {};

  return (
    <Screen>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <ProfileImage image={user.imageUri} />
          <AppText
            title={user.name}
            styles={{marginTop: 20, letterSpacing: 2}}
            fontSize={25}
            fontWeight={fontWeight.medium}
          />
          <AppText
            title={user.email}
            styles={{marginBottom: 20, letterSpacing: 2}}
            fontSize={15}
            fontWeight={fontWeight.medium}
          />
          <AppButton
            title="Message"
            width={150}
            onPress={() =>
              navigation.navigate(routes.ChatScreen, {receiver: user})
            }
          />
        </View>

        <View style={{width: '100%'}}>
          <ListItem
            IconComponent={Entypo}
            name="lock"
            title="Encrypted Messages"
            subtitle="Your messages are encrypted"
          />
          <ListItem
            IconComponent={Entypo}
            name="block"
            title="Block This Person"
          />
        </View>
      </View>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: colors.lowBlack,
    flex: 1,
    top: 40,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    paddingTop: 40,
  },
  profileInfo: {top: -70, justifyContent: 'center', alignItems: 'center'},
});
