import {Alert} from 'react-native';
import apiClient from '../client';

interface LoginInterface {
  email: string;
  password: string;
}

export const authApi = () => {
  return {
    register: async ({email, password, username}) => {
      try {
        const response = await apiClient.post('/register', {
          username,
          email,
          password,
        });

        return response;
      } catch (error: any) {
        throw error;
      }
    },

    login: async (data: LoginInterface) => {
      try {
        const response = await apiClient.post('/login', {
          email: data.email,
          password: data.password,
        });

        return response;
      } catch (error) {
        throw error;
      }
    },
  };
};
