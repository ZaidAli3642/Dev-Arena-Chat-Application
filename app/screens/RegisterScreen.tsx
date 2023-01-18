import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton, AppText, Screen, Select, TextInput} from '../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'native-base';
import {colors, fontWeight} from '../config';

const RegisterScreen = () => {
  return (
    <Screen>
      <View style={styles.registerCountainer}>
        <Image
          source={require('../assets/images/logo.png')}
          alt="Logo"
          style={styles.logo}
        />
        <View style={styles.inputContainer}>
          <AppText
            title="Register"
            fontSize={40}
            fontWeight={fontWeight.bold}
          />
          <TextInput
            placeholder="Your Name"
            onChange={() => console.log('Email')}
            IconComponent={MaterialCommunityIcons}
            iconName="account"
          />
          <TextInput
            placeholder="Email"
            onChange={() => console.log('Email')}
            IconComponent={MaterialCommunityIcons}
            iconName="email"
          />
          <TextInput
            placeholder="Password"
            onChange={() => console.log('Email')}
            IconComponent={MaterialCommunityIcons}
            iconName="lock"
          />
          <AppButton title="Next" onPress={() => console.log('Pressed')} />
        </View>

        <View style={styles.accountText}>
          <AppText title="Already have an account?" />
          <AppText
            title="Login"
            color={colors.blue}
            ml="2"
            onPress={() => console.log('Pressed')}
          />
        </View>
      </View>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  accountText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  gender: {
    flexDirection: 'row',
  },

  inputContainer: {
    width: '100%',
  },
  logo: {
    aspectRatio: 1.1 / 1.1,
  },
  registerCountainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
});
