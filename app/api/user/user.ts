import apiClient from '../client';

export interface User {
  name: string;
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
  };
};
