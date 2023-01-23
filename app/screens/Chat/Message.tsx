import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {colors, fonts, fontWeight} from '../../config';
import {AppText} from '../../components';

interface Props {
  message: string;
  sender: boolean | undefined;
  messageStyles: object;
}

const Message: React.FC<PropsWithChildren<Props>> = ({
  message,
  sender,
  messageStyles,
}) => {
  return (
    <View
      style={[
        messageStyles,
        styles.messageContainer,
        {
          alignSelf: sender ? 'flex-end' : 'flex-start',
          backgroundColor: sender ? colors.lightBlack : colors.lowBlack,
        },
      ]}>
      <AppText
        title={message}
        fontFamily={fonts.RobotoRegular}
        styles={{letterSpacing: 1}}
        fontWeight={fontWeight.light}
      />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: colors.lowBlack,
    alignSelf: 'flex-start',
    maxWidth: Dimensions.get('screen').width / 1.3,
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
  },
});
