import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText, TextInput} from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fontWeight} from '../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {routes} from '../../routes';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/reducers/authReducer';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const RegisterScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nextStep = () => {
    dispatch(
      setUser({
        userInfo: {
          username,
          email,
          password,
        },
      }),
    );

    navigation.navigate(routes.InfoScreen);
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
            <AppButton title="Next" onPress={nextStep} />
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
