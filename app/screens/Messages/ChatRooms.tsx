import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {AppText, FeatureCard} from '../../components';

interface Props {
  chatRoomsList: {
    id: number;
    fullName: string;
    imageSource?: number | string;
  }[];
}

const ChatRooms: React.FC<PropsWithChildren<Props>> = ({chatRoomsList}) => {
  return (
    <View style={{marginLeft: 25}}>
      <AppText
        title={'Chat Rooms'}
        fontSize={20}
        ml={2}
        styles={{marginVertical: 5}}
      />
      <ScrollView
        contentContainerStyle={{flexDirection: 'row'}}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {chatRoomsList.map(chats => (
          <FeatureCard
            styles={{marginHorizontal: 5}}
            imageSource={chats.imageSource}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatRooms;

const styles = StyleSheet.create({});
