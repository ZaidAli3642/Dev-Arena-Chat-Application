import {Platform} from 'react-native';
import * as Permission from 'react-native-permissions';

const requestPermission = async () => {
  if (Platform.OS === 'ios')
    return await Permission.request(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);

  return await Permission.request(
    Permission.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  );
};

export default requestPermission;
