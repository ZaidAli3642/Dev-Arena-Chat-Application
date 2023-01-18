import {StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'native-base';
import {colors} from '../config';
import {fonts} from '../utils';

interface Props {
  title: string;
  isLoading?: boolean;
  onPress: () => any;
  loadingText?: string;
}

const AppButton: React.FC<Props> = ({
  title,
  isLoading,
  onPress,
  loadingText,
}) => {
  return (
    <Button
      style={styles.button}
      variant={'solid'}
      onPress={onPress}
      _text={{fontSize: fonts.fontSize(16), fontWeight: 'bold'}}
      w="100%"
      isLoading={isLoading}
      _loading={{fontSize: 20}}
      isLoadingText={loadingText}
      fontSize={'7xl'}
      backgroundColor={colors.blue}>
      {title}
    </Button>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
  },
});
