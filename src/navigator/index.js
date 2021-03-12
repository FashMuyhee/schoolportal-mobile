import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Biodata, Dashboard, Login, Result, Welcome} from '../screens';
import {Context} from '../store/context';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [state] = useContext(Context);

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="dashboard"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="biodata" component={Biodata} />
      <Stack.Screen name="p_history" component={PaymentHistory} />
      <Stack.Screen name="result" component={Result} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default RootNavigator;
