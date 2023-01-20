import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'native-base';
import {AppText} from '../../components';
import {fonts} from '../../utils';

const Profile = () => {
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
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 45,
    height: 45,
  },
});
