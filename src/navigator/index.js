import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  Biodata,
  Dashboard,
  Login,
  Result,
  Welcome,
  PaymentHistory,
  Faq,
  ValidatePayment,
  HostelDocuments,
  HostelDashBoard,ViewCourses
} from '../screens';
import {Context} from '../store/context';
import {NavigationContainer} from '@react-navigation/native';
import color from '../utils/color';
import ComingSoon from '../screens/comingsoon';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [state] = useContext(Context);

  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="dashboard"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {backgroundColor: color.primary},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: {
          textTransform: 'capitalize',
          fontFamily: 'Raleway-Regular',
          fontWeight: '700',
        },
      }}>
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={({}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={({}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={({}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="biodata"
        component={Biodata}
        options={({}) => ({
          title: 'Bio-data',
        })}
      />
      <Stack.Screen
        name="p_history"
        component={PaymentHistory}
        options={({}) => ({
          title: 'Payment History',
        })}
      />
      <Stack.Screen name="result" component={Result} />
      <Stack.Screen
        name="h_dashboard"
        component={HostelDashBoard}
        options={({}) => ({
          title: 'Hostel & Accommodation',
        })}
      />
      <Stack.Screen
        name="h_documents"
        component={HostelDocuments}
        options={({}) => ({
          title: 'Hostel Documents',
        })}
      />
      <Stack.Screen
        name="faq"
        component={Faq}
        options={({}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="validate-payment"
        component={ValidatePayment}
        options={({}) => ({
          title: 'validate Payment',
        })}
      />
      <Stack.Screen
        name="view-course"
        component={ViewCourses}
        options={({}) => ({
          title: 'View Courses',
        })}
      />
      <Stack.Screen
        name="coming_soon"
        component={ComingSoon}
        options={({}) => ({
          title: 'Coming Soon',
        })}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default RootNavigator;
