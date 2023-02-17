import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {ListItem, Screen, Seperator} from '../../components';
import {routes} from '../../routes';
import {StackNavigationProp} from '@react-navigation/stack';
import ErrorMessage from '../../components/ErrorMessage';
import {useSelector} from 'react-redux';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const SearchUsersScreen: React.FC<Props> = ({navigation}) => {
  const error = useSelector((state: any) => state.auth.error);
  const users = useSelector((state: any) => state.users.searchUsersResult);

  return (
    <Screen>
      <View style={{marginLeft: 50}}>
        <ErrorMessage message={error} />
      </View>
      <FlatList
        data={users}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => (
          <ListItem
            onPress={() => navigation.navigate(routes.ChatScreen)}
            imageUri={item.imageUri}
            title={item.name}
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
