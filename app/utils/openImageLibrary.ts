import {Alert, Platform} from 'react-native';
import Permission from 'react-native-permissions';
import requestImageLibraryPermission from './requestImageLibraryPermission';

const permissionCheckForLibrary = async () => {
  if (Platform.OS === 'ios')
    return await Permission.check(Permission.PERMISSIONS.IOS.PHOTO_LIBRARY);

  return await Permission.check(
    Permission.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  );
};

const openImageLibrary = async () => {
  const result = await permissionCheckForLibrary();

  switch (result) {
    case Permission.RESULTS.UNAVAILABLE:
      Alert.alert(
        'This feature is not available (on this device / in this context)',
      );
      break;
    case Permission.RESULTS.DENIED:
      await requestImageLibraryPermission();
      break;
    case Permission.RESULTS.LIMITED:
      console.log('The permission is limited: some actions are possible');
      break;
    case Permission.RESULTS.GRANTED:
      return true;
      break;
    case Permission.RESULTS.BLOCKED:
      Alert.alert('The permission is denied and not requestable anymore');
      break;
  }
};

export default openImageLibrary;
