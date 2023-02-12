import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box, HamburgerIcon, Image, Menu, Pressable} from 'native-base';
import {useDispatch} from 'react-redux';

import {logout as userLogout} from '../../redux/reducers/authReducer';
import {AppText} from '../../components';
import {fonts} from '../../utils';

const Profile = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout({}));
  };

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        <Image
          source={require('../../assets/images/profile-image.jpg')}
          alt="Profile"
          style={styles.profileImage}
          rounded="full"
        />
        <AppText
          title="Zaid Saleem"
          styles={{marginLeft: 20}}
          fontSize={fonts.fontSize(20)}
        />
      </View>
      <Box w={'85%'} alignItems="center">
        <Menu
          w={'150'}
          trigger={triggerProps => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}>
                <HamburgerIcon size="6" />
              </Pressable>
            );
          }}>
          <Menu.Item onPress={logout}>Logout</Menu.Item>
        </Menu>
      </Box>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    marginHorizontal: 25,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 45,
    height: 45,
  },
});
