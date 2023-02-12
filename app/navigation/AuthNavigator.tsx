import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import {AppIcon} from '../components';
import {colors} from '../config';
import routes from '../routes/routes';
import {
  LoginScreen,
  WelcomeScreen,
  RegisterScreen,
  InfoScreen,
} from '../screens';
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
        headerTitleStyle: {fontSize: 25},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
        headerLeft: () => null,

        // headerLeft: ({onPress}) => {
        //   return (
        //     <TouchableOpacity onPress={onPress}>
        //       <AppIcon
        //         IconComponent={AntDesign}
        //         name="left"
        //         size={7}
        //         styles={{marginLeft: 10}}
        //       />
        //     </TouchableOpacity>
        //   );
        // },
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
          title: 'Login',
        }}
      />
      <Stack.Screen
        name={routes.InfoScreen}
        component={InfoScreen}
        options={{
          title: 'Profile Info',
        }}
      />

      <Stack.Screen
        name={routes.RegisterScreen}
        component={RegisterScreen}
        options={{title: 'Register'}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
