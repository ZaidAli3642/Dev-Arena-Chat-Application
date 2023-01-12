import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import {Screen} from '../components';
import TextInput from '../components/TextInput';

const LoginScreen = () => {
  return (
    <Screen>
      <View style={styles.loginContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />

        <TextInput placeholder="Email" onChange={value => console.log(value)} />
        <TextInput
          placeholder="Password"
          onChange={value => console.log('Value : ', value)}
        />
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    aspectRatio: 1.1 / 1.1,
  },
  loginContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 40,
  },
});
