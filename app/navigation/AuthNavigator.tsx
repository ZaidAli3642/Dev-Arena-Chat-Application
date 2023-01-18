import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, View} from 'react-native';
import {AppIcon} from '../components';
import {colors} from '../config';
import routes from '../routes/routes';
import {LoginScreen, WelcomeScreen, RegisterScreen} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.mediumBlack,
          borderBottomWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTitleStyle: {fontSize: 23},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
        headerLeft: ({onPress}) => {
          return (
            <TouchableOpacity onPress={onPress}>
              <AppIcon
                IconComponent={AntDesign}
                name="left"
                size={7}
                styles={{marginLeft: 10}}
              />
            </TouchableOpacity>
          );
        },
      }}>
      <Stack.Screen
        name={routes.WelcomeScreen}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.LoginScreen}
        component={LoginScreen}
        options={{
          title: 'Login Screen',
        }}
      />
      <Stack.Screen
        name={routes.RegisterScreen}
        component={RegisterScreen}
        options={{title: 'Register Screen'}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
