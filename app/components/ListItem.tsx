import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Image} from 'native-base';
import AppText from './AppText';
import {fonts} from '../utils';
import AppIcon from './AppIcon';

interface Props {
  onPress?: () => void;
  messagesUnreadCount?: number;
  imageUri?: string;
  title: string;
  subtitle?: string;
  date?: string;
  IconComponent?: React.FC<PropsWithChildren<{name?: string}>> | any;
  name?: string;
}

const ListItem: React.FC<PropsWithChildren<Props>> = ({
  onPress,
  messagesUnreadCount,
  imageUri,
  title,
  subtitle,
  date,
  IconComponent,
  name,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 30,
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {!messagesUnreadCount ? (
            <>
              {imageUri && (
                <Image
                  source={{uri: imageUri}}
                  defaultSource={require('../assets/images/profile-avatar.jpg')}
                  alt="Profile-image"
                  rounded="full"
                  width={44}
                  height={44}
                />
              )}

              {!imageUri && (
                <AppIcon IconComponent={IconComponent} name={name} size={6} />
              )}
            </>
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
                defaultSource={require('../assets/images/profile-avatar.jpg')}
                source={{uri: imageUri}}
                alt="Profile-image"
                rounded="full"
              />
            </View>
          )}
          <View style={{marginLeft: 10, justifyContent: 'center'}}>
            <AppText title={title} fontSize={fonts.fontSize(15)} />
            {subtitle && (
              <AppText
                title={subtitle}
                fontSize={fonts.fontSize(13)}
                fontWeight="light"
              />
            )}
          </View>
        </View>
        <AppText title={date} styles={{marginRight: 25}} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
