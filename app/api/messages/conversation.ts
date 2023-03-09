import apiClient from '../client';

export const conversationApi = (token: string) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-auth-token': `${token}`,
  };

  return {
    getConversation: async (userId: string) => {
      try {
        const response = await apiClient.get(`/conversation/${userId}`, {
          headers,
        });

        return response;
      } catch (error) {
        throw error;
      }
    },
    createConversation: async (senderId: string, receiverId: string) => {
      try {
        const data = {
          senderId,
          receiverId,
        };

        const response = await apiClient.post(`/conversation`, data, {
          headers,
        });

        return response;
      } catch (error) {
        throw error;
      }
    },

    sendMessage: async (
      message: string,
      conversationId: string,
      sender: string,
    ) => {
      try {
        const data = {
          message,
          conversationId,
          sender,
        };

        const response = await apiClient.post(`/messages`, data, {
          headers,
        });

        return response;
      } catch (error) {
        throw error;
      }
    },

    getMessages: async (conversationId: string) => {
      try {
        const response = await apiClient.get(`/messages/${conversationId}`, {
          headers,
        });

        return response;
      } catch (error) {
        throw error;
      }
    },
  };
};
