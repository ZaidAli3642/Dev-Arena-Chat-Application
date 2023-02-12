import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppButton, AppText, TextInput} from '../../components';
import {colors, fontWeight} from '../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../redux/reducers/authReducer';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const RegisterScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const error: string = useSelector((state: any) => state.auth.error);
  const loading: boolean = useSelector((state: any) => state.auth.loading);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nextStep = () => {
    dispatch(
      register({
        userInfo: {
          username,
          email,
          password,
        },
      }),
    );
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: colors.mediumBlack}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.registerCountainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />

          <View style={styles.inputContainer}>
            <AppText
              title="Register"
              fontSize={40}
              fontWeight={fontWeight.bold}
            />

            <AppText
              title={error}
              color="#ed3956"
              fontWeight={fontWeight.medium}
            />
            <TextInput
              placeholder="Username"
              onChange={text => setUsername(text)}
              IconComponent={MaterialCommunityIcons}
              iconName="account"
            />
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
            <AppButton title="Next" onPress={nextStep} isLoading={loading} />
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
      </ScrollView>
    </KeyboardAvoidingView>
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
