import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../routes';
import {ChatScreen, MessagesScreen} from '../screens';
import {ChatScreenHeader} from './NavigationHeaders';

const Stack = createStackNavigator();

const AppNavigator = () => {
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
