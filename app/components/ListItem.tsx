import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'native-base';
import AppText from './AppText';
import {fonts} from '../utils';

const ListItem = () => {
  const imageUri =
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80';
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 30,
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: imageUri}}
          alt="Profile-image"
          rounded="full"
          width={45}
          height={45}
        />
        <View style={{marginLeft: 10}}>
          <AppText title="Full Name" fontSize={fonts.fontSize(15)} />
          <AppText
            title="Last Message"
            fontSize={fonts.fontSize(13)}
            fontWeight="light"
          />
        </View>
      </View>
      <AppText title={'Tue'} styles={{marginRight: 25}} />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
