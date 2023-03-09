import apiClient from '../client';

export const searchApi = (token: string) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-auth-token': `${token}`,
  };

  return {
    searchUser: async (search: string, userId: string) => {
      try {
        const response = await apiClient.get(
          `/users/search/${userId}?search=${search}`,
          {
            headers,
          },
        );

        return response;
      } catch (error) {
        throw error;
      }
    },
  };
};
