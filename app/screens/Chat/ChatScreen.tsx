import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppIconButton, Screen, TextInput} from '../../components';
import Message from './Message';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../config';

const ChatScreen = () => {
  const [sendMessageButtonHide, setSendMessageButtonHide] = useState(false);

  const messages = [
    {id: 1, message: 'Hi!', sender: true},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'What can I help you?'},
    {id: 4, message: 'Do you have Biryani?', sender: true},
    {id: 6, message: 'Yes we have, will send you details about it.'},
    {id: 7, message: 'Yes we have, will send you details about it.'},
    {
      id: 8,
      message: 'Yes we have, will send you details about it.',
      sender: true,
    },
    {
      id: 9,
      message: 'Yes we have, will send you details about it.',
      sender: true,
    },
    {id: 10, message: 'Yes we have, will send you details about it.'},
    {
      id: 11,
      message: 'Yes we have, will send you details about it.',
      sender: true,
    },
    {id: 12, message: 'Yes we have, will send you details about it.'},
    {id: 13, message: 'Yes we have, will send you details about it.'},
    {id: 14, message: 'Yes we have, will send you details about it.'},
  ];

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: colors.mediumBlack}}
      keyboardVerticalOffset={80}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={messages}
        keyExtractor={Item => Item.id.toString()}
        renderItem={({item}) => (
          <Message
            messageStyles={{marginHorizontal: 20}}
            message={item.message}
            sender={item.sender}
          />
        )}
      />

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <TextInput
          flex={1}
          multiline={true}
          placeholder="Write message..."
          onChange={() => console.log('Changed')}
          maxHeight={200}
          iconName="search"
        />
        <AppIconButton
          IconComponent={Feather}
          name="message-circle"
          backgroundColor={colors.purple}
        />
        <AppIconButton
          IconComponent={Ionicons}
          name="md-camera"
          backgroundColor={colors.green}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
