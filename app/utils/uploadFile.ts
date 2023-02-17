import {Platform} from 'react-native';
import storage from '@react-native-firebase/storage';

const uploadFile = async (
  folder: string,
  filename: string,
  fileUri: string,
) => {
  const uploadUri: string =
    Platform.OS === 'ios'
      ? fileUri?.replace('file://', '') ?? ''
      : fileUri ?? '';

  const reference = storage().ref(`/${folder}/${filename}`);

  const task = reference.putFile(uploadUri);

  const {state} = await task;
};

export default uploadFile;
