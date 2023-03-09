import {StyleSheet, View} from 'react-native';
import {Image as NativeImage} from 'native-base';
import React from 'react';

interface Props {
  image: string;
}

const ProfileImage: React.FC<Props> = ({image}) => {
  return (
    <View style={styles.image}>
      <NativeImage
        source={{uri: image}}
        defaultSource={require('../assets/images/profile-avatar.png')}
        alt={'profile image'}
        width={'100%'}
        height={'100%'}
        rounded="full"
      />
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#333c52',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
