import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../routes';
import {ChatScreen, MessagesScreen, SearchUserScreen} from '../screens';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import {ChatScreenHeader, SearchUserScreenHeader} from './NavigationHeaders';
import ProfileScreenHeader from './NavigationHeaders/ProfileScreenHeader';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.MessagesScreen} component={MessagesScreen} />
      <Stack.Screen
        name={routes.SearchUserScreen}
        component={SearchUserScreen}
        options={{
          headerStyle: {marginRight: 20},
          headerShown: true,
          header: props => <SearchUserScreenHeader headerProps={props} />,
        }}
      />
      <Stack.Screen
        name={routes.ChatScreen}
        component={ChatScreen}
        options={{
          headerStyle: {marginRight: 20},
          headerShown: true,
          header: props => <ChatScreenHeader headerProps={props} />,
        }}
      />
      <Stack.Screen
        name={routes.ProfileScreen}
        component={ProfileScreen}
        options={{
          // headerStyle: {marginRight: 20},
          headerShown: true,
          header: props => <ProfileScreenHeader headerProps={props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
