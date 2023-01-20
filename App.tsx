import React from 'react';
import {Icon, IconButton, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './app/navigation';
import {MessagesScreen} from './app/screens';
import SmallButton from './app/components/IconButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MessagesScreen />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
