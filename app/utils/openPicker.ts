import * as ImagePicker from 'react-native-image-picker';

const openPicker = async () => {
  const result = await ImagePicker.launchImageLibrary({mediaType: 'photo'});

  if (!result.didCancel) {
    return result.assets![0];
  }
};

export default openPicker;
