import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppIconButton, TextInput} from '../../components';
import Message from './Message';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../config';
import {useRoute} from '@react-navigation/native';
import {
  createConversation,
  messages as messageCall,
  setMessages,
} from '../../redux/reducers/messagesReducers';
import {socket} from '../../socket/socket';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const route = useRoute();
  const inputRef = useRef<NativeTextInput>();
  const dispatch = useDispatch();
  const {receiver} = route.params;

  const conversation = useSelector((state: any) => state.messages.conversation);
  const userMessages = useSelector((state: any) => state.messages.messages);
  const user = useSelector((state: any) => state.auth.userInfo);

  const sendMessage = () => {
    dispatch(
      messageCall({
        message: message,
        conversationId: conversation._id,
        senderId: user._id,
        receiverId: receiver._id,
      }),
    );
    inputRef.current?.clear();
  };

  useEffect(() => {
    dispatch(createConversation({receiverId: receiver._id}));
  }, []);

  useLayoutEffect(() => {
    socket.on('receive_message', data => {
      setArrivalMessage(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    arrivalMessage && dispatch(setMessages([arrivalMessage]));
    console.log('arrival messasge changed');
  }, [arrivalMessage]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: colors.mediumBlack}}
      keyboardVerticalOffset={80}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <FlatList
        inverted={true}
        showsVerticalScrollIndicator={false}
        data={[...userMessages].reverse()}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => (
          <Message
            messageStyles={{marginHorizontal: 20}}
            message={item.message}
            sender={user._id === item.sender}
          />
        )}
      />

      <View style={styles.messageInput}>
        <TextInput
          flex={1}
          multiline={true}
          placeholder="Write message..."
          onChange={value => setMessage(value)}
          maxHeight={200}
          ref={inputRef}
          iconName="search"
        />
        <AppIconButton
          IconComponent={Feather}
          name="message-circle"
          backgroundColor={colors.purple}
          onPress={sendMessage}
        />
        {/* <AppIconButton
          IconComponent={Ionicons}
          name="md-camera"
          backgroundColor={colors.green}
        /> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  messageInput: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
