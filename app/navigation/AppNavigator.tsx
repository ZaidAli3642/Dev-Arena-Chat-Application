import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {AppText, Header} from '../components';
import {fonts, fontWeight} from '../config';
import {routes} from '../routes';
import {ChatScreen, MessagesScreen} from '../screens';
import {ChatScreenHeader} from './NavigationHeaders';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.MessagesScreen} component={MessagesScreen} />
      <Stack.Screen
        name={routes.ChatScreen}
        component={ChatScreen}
        options={{
          headerStyle: {marginRight: 20},
          headerShown: true,
          header: props => <ChatScreenHeader headerProps={props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
