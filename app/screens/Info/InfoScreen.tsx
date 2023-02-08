import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  AppButton,
  AppImageModal,
  AppText,
  Screen,
  TextInput,
} from '../../components';
import Image from './Image';
import {useDispatch, useSelector} from 'react-redux';
import {imageModalVisibled, setUser} from '../../redux/reducers/authReducer';
import {openImageLibrary, openPicker} from '../../utils';

const InfoScreen = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<object>();
  const [name, setName] = useState('');

  const imageModal = useSelector(state => state.auth.imageModal);
  const userInfo = useSelector(state => state.auth.userInfo);

  const visibleImageModal = () =>
    dispatch(imageModalVisibled({imageModal: !imageModal}));

  const openImagePicker = async () => {
    const result = await openImageLibrary();
    if (result) {
      const result = await openPicker();

      setImage(result);
      dispatch(
        setUser({
          userInfo: {
            ...userInfo,
            image: result,
          },
        }),
      );
      dispatch(imageModalVisibled({imageModal: false}));
    }
  };

  const registerUser = () => {
    dispatch(
      setUser({
        userInfo: {
          ...userInfo,
          image,
          name,
        },
      }),
    );
  };

  return (
    <>
      <Screen>
        <View style={styles.infoContainer}>
          <Image handleSelectImage={visibleImageModal} />

          <TextInput
            autoFocus={true}
            marginTop={10}
            placeholder="Full Name"
            onChange={text => setName(text)}
            IconComponent={MaterialIcons}
            iconName="person"
          />
          <AppButton onPress={registerUser} title="Next" />
          <AppImageModal
            isVisible={imageModal}
            openLibrary={openImagePicker}
            closeImageMenu={visibleImageModal}
          />
        </View>
      </Screen>
    </>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 40,
    paddingHorizontal: 30,
  },
});
