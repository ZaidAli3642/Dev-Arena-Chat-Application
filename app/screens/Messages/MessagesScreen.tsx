import {FlatList, StyleSheet, View} from 'react-native';
import React, {PropsWithChildren, useEffect} from 'react';

import {Screen, Seperator} from '../../components';
import Search from './Search';
import Profile from './Profile';
import ChatRooms from './ChatRooms';
import ListItem from '../../components/ListItem';
import {StackNavigationProp} from '@react-navigation/stack';
import {routes} from '../../routes';
import {conversations as conversationsCall} from '../../redux/reducers/messagesReducers';
import {useDispatch, useSelector} from 'react-redux';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const MessagesScreen: React.FC<PropsWithChildren<Props>> = ({navigation}) => {
  const chatRoomsList = [
    {
      id: 1,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      messagesUnreadCount: 5,
    },
    {
      id: 2,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&q=80',
      messagesUnreadCount: 6,
    },
    {
      id: 3,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
      id: 4,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    {
      id: 5,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1545418776-a37fba72a75d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: 6,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1535533190416-534a491a6ac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 7,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1595781572981-d63151b232ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 8,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1595781572981-d63151b232ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 9,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1595781572981-d63151b232ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.auth.userInfo);

  const userConversations = useSelector(
    (state: any) => state.messages.conversations,
  );

  const getMessages = () => {
    dispatch(conversationsCall({}));
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{paddingVertical: 20}}>
            <Profile name={user.name} imageUri={user.imageUri} />
            <Search navigation={navigation} />
            <ChatRooms chatRoomsList={chatRoomsList} />
          </View>
        )}
        data={userConversations}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => {
          const receiver = item.users.filter(
            receiver => receiver._id !== user._id,
          );

          return (
            <ListItem
              onPress={() =>
                navigation.navigate(routes.ChatScreen, {
                  receiver: receiver[0],
                  conversationId: item._id,
                })
              }
              // messagesUnreadCount={item.messagesUnreadCount}
              imageUri={receiver[0].imageUri}
              title={receiver[0].name}
              subtitle={item.messages[0].message}
              date="Tue"
            />
          );
        }}
        ItemSeparatorComponent={Seperator}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
