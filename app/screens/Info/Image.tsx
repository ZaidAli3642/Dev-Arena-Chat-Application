import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Image as NativeImage} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

import {AppIcon} from '../../components';
import {useSelector} from 'react-redux';

interface Props {
  handleSelectImage: () => void;
}

const Image: React.FC<PropsWithChildren<Props>> = ({handleSelectImage}) => {
  const userInfo = useSelector(state => state.auth.userInfo);

  if (userInfo && userInfo.image)
    return (
      <View style={styles.image}>
        <NativeImage
          source={{uri: userInfo.image.uri}}
          alt={'profile image'}
          width={'100%'}
          height={'100%'}
          rounded="full"
        />
      </View>
    );

  return (
    <TouchableOpacity onPress={handleSelectImage}>
      <View style={styles.image}>
        <AppIcon
          IconComponent={Feather}
          name="camera"
          size={8}
          styles={{opacity: 0.6}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Image;

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
