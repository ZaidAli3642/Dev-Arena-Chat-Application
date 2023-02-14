import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Header, Search} from '../../components';
import {useNavigation} from '@react-navigation/native';

interface Props {
  headerProps: object;
}

const SearchUserScreenHeader: React.FC<PropsWithChildren<Props>> = ({
  headerProps,
}) => {
  const navigation = useNavigation();

  return (
    <Header onPress={() => navigation.goBack()}>
      <Search
        marginRight={5}
        marginLeft={2}
        flex={1}
        placeholder="Search..."
        onSearch={() => console.log('Search')}
        onChange={value => console.log('Value : ', value)}
      />
    </Header>
  );
};

export default SearchUserScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingLeft: 10,
    alignItems: 'center',
    paddingBottom: 10,
  },
});
