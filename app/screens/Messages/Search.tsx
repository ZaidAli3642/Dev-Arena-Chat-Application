import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {AppIconButton, Search as AppSearch} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../routes';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const Search: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.searchContainer}>
      <AppSearch
        flex={1}
        placeholder="Search..."
        onSearch={() => console.log('Search')}
        onChange={value => console.log('Value : ', value)}
      />
      <AppIconButton
        IconComponent={Entypo}
        name="plus"
        onPress={() => navigation.navigate(routes.SearchUserScreen)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
