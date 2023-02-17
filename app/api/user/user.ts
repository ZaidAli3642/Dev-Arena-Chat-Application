import apiClient from '../client';
import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native';

export interface User {
  type?: number;
  name?: string;
  fileUri?: string;
  filename?: string;
  imageUrl?: string;
}

export const userApi = (token: string) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-auth-token': `${token}`,
  };

  return {
    updateUser: async (userId: string, data: User) => {
      try {
        const response = await apiClient.put('/user/' + userId, data, {
          headers,
        });

        return response;
      } catch (error) {
        throw error;
      }
    },

    uploadFile: async (data: User) => {
      try {
        const uploadUri: string =
          Platform.OS === 'ios'
            ? data.fileUri?.replace('file://', '') ?? ''
            : data.fileUri ?? '';

        const reference = storage().ref(`/images/${data.filename}`);

        const task = reference.putFile(uploadUri);

        task.on('state_changed', snapshot => {
          console.log(
            Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
          );
        });

        const {state} = await task;

        if (state === 'success') {
          return await reference.getDownloadURL();
        }
      } catch (error) {
        throw error;
      }
    },
  };
};
