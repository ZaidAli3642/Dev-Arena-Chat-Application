import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppButton, AppText, Screen, TextInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';

import {colors} from '../../config';
import {login as userLogin} from '../../redux/reducers/authReducer';
import ErrorMessage from '../../components/ErrorMessage';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.auth.loading);
  const error = useSelector((state: any) => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    dispatch(
      userLogin({
        userInfo: {
          email,
          password,
        },
      }),
    );
  };

  return (
    <Screen>
      <View style={styles.loginContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />

        <View style={styles.inputContainer}>
          <AppText title={'Login'} fontSize={40} fontWeight="bold" />
          <ErrorMessage message={error} />

          <TextInput
            placeholder="Email"
            onChange={text => setEmail(text)}
            IconComponent={MaterialCommunityIcons}
            iconName="email"
          />
          <TextInput
            placeholder="Password"
            onChange={text => setPassword(text)}
            IconComponent={MaterialCommunityIcons}
            iconName="lock"
            secureTextEntry={true}
          />
          <AppButton title="Sign In" onPress={login} isLoading={loading} />
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
