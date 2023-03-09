import React, {PropsWithChildren} from 'react';
import {Header} from '../../components';
import {useNavigation} from '@react-navigation/native';

interface Props {
  headerProps: object;
}

const ProfileScreenHeader: React.FC<PropsWithChildren<Props>> = ({
  headerProps,
}) => {
  const navigation = useNavigation();

  return <Header onPress={() => navigation.goBack()}></Header>;
};

export default ProfileScreenHeader;
