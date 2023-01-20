import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {AppIconButton, Search as AppSearch} from '../../components';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <AppSearch
        placeholder="Search..."
        onSearch={() => console.log('Search')}
        onChange={value => console.log('Value : ', value)}
      />
      <AppIconButton IconComponent={Entypo} name="plus" />
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
