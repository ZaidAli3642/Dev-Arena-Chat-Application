import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {AppButton, AppImageModal, Screen, TextInput} from '../../components';
import Image from './Image';
import {useDispatch, useSelector} from 'react-redux';
import {
  imageModalVisibled,
  imageUpload,
  userUpdate,
} from '../../redux/reducers/authReducer';
import {openImageLibrary, openPicker} from '../../utils';
import ErrorMessage from '../../components/ErrorMessage';

const InfoScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const imageModal = useSelector((state: any) => state.auth.imageModal);
  const error = useSelector((state: any) => state.auth.error);
  const user = useSelector((state: any) => state.auth.userInfo);
  const loading = useSelector((state: any) => state.auth.loading);

  const visibleImageModal = () =>
    dispatch(imageModalVisibled({imageModal: !imageModal}));

  const openImagePicker = async () => {
    const result = await openImageLibrary();
    if (result) {
      const result = await openPicker();

      dispatch(
        imageUpload({
          userId: user?._id,
          userInfo: {
            filename: result?.fileName,
            fileUri: result?.uri,
          },
        }),
      );

      dispatch(imageModalVisibled({imageModal: false}));
    }
  };

  const registerUser = () => {
    dispatch(
      userUpdate({
        userId: user?._id,
        userInfo: {
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

          <View style={{width: '100%', marginTop: 25}}>
            <ErrorMessage message={error} />
            <TextInput
              autoFocus={true}
              placeholder="Full Name"
              onChange={text => setName(text)}
              IconComponent={MaterialIcons}
              iconName="person"
            />
          </View>
          <AppButton onPress={registerUser} title="Next" isLoading={loading} />
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
