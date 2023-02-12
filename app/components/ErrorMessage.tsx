import React from 'react';
import AppText from './AppText';
import {colors, fontWeight} from '../config';

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({message}) => {
  return (
    <AppText
      title={message}
      color={colors.danger}
      fontWeight={fontWeight.medium}
    />
  );
};

export default ErrorMessage;
