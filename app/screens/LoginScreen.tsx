import {Image, StyleSheet, View, Keyboard} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppButton, AppText, Screen, TextInput} from '../components';
import {colors} from '../config';

const LoginScreen = () => {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const login = () => {
    setIsLoading(true);
  };

  return (
    <Screen>
      <View style={styles.loginContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />

        <View style={styles.inputContainer}>
          <AppText title={'Login'} fontSize={40} fontWeight="bold" />

          <TextInput
            placeholder="Email"
            onChange={value => console.log(value)}
            IconComponent={MaterialCommunityIcons}
            iconName="email"
          />
          <TextInput
            placeholder="Password"
            onChange={value => console.log('Value : ', value)}
            IconComponent={MaterialCommunityIcons}
            iconName="lock"
            secureTextEntry={true}
          />
          <AppButton
            title="Sign In"
            isLoading={isLoading}
            loadingText="Signing in"
            onPress={login}
          />
        </View>

        <View style={styles.accountText}>
          <AppText title="New on DevArena?" />
          <AppText
            title="Register"
            color={colors.blue}
            ml="2"
            onPress={() => console.log('Pressed')}
          />
        </View>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  accountText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    width: '100%',
  },
  logo: {
    aspectRatio: 1.1 / 1.1,
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: 'space-around',
  },
});
