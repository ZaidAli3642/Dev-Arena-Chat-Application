import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Image} from 'native-base';
import AppText from './AppText';
import {fonts} from '../utils';

interface Props {
  onPress?: () => void;
  messagesUnreadCount?: number;
  imageUri?: string;
}

const ListItem: React.FC<PropsWithChildren<Props>> = ({
  onPress,
  messagesUnreadCount,
  imageUri,
}) => {
  // const imageUri =
  //   'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80';
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 30,
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          {!messagesUnreadCount ? (
            <Image
              source={{uri: imageUri}}
              alt="Profile-image"
              rounded="full"
              width={44}
              height={44}
            />
          ) : (
            <View style={{width: 40, height: 45}}>
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  backgroundColor: '#414756',
                  width: 34,
                  height: 34,
                  left: -10,
                  top: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 35 / 2,
                }}>
                <AppText
                  title={messagesUnreadCount > 5 ? '+5' : messagesUnreadCount}
                />
              </View>
              <Image
                style={{
                  position: 'absolute',
                  width: 34,
                  height: 34,
                  bottom: 0,
                  right: -1,
                }}
                source={{uri: imageUri}}
                alt="Profile-image"
                rounded="full"
              />
            </View>
          )}
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
    </TouchableWithoutFeedback>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
