import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {AuthNavigator} from './navigation';
import {useSelector} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';

const Root = () => {
  const userInfo = useSelector(state => state.auth.userInfo);

  return (
    <NativeBaseProvider>
      {userInfo && userInfo.name ? <AppNavigator /> : <AuthNavigator />}
    </NativeBaseProvider>
  );
};

export default Root;
