import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListItem, Screen, Search, Seperator} from '../../components';
import {routes} from '../../routes';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const SearchUsersScreen: React.FC<Props> = ({navigation}) => {
  const users = [
    {
      id: 1,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 2,
      fullName: 'Zaid Saleem',
      imageSource:
        'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&q=80',
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

  return (
    <Screen>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ListItem
            onPress={() => navigation.navigate(routes.ChatScreen)}
            imageUri={item.imageSource}
          />
        )}
        ItemSeparatorComponent={Seperator}
      />
    </Screen>
  );
};

export default SearchUsersScreen;

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 25,
  },
});
