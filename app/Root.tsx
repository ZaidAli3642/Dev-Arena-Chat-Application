import React, {useEffect, useLayoutEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {AuthNavigator} from './navigation';
import {useSelector} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import {socket} from './socket/socket';
import Location from './screens/test/Location';

const Root = () => {
  const userInfo = useSelector((state: any) => state.auth.userInfo);

  useLayoutEffect(() => {
    userInfo && socket.emit('add_user', {userId: userInfo._id});
  }, []);

  return (
    <NativeBaseProvider>
      {userInfo && userInfo.name ? <Location /> : <AuthNavigator />}
    </NativeBaseProvider>
  );
};

export default Root;
