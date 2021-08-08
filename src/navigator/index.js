import React, { useContext } from 'react';
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
  HostelDashBoard,
  ViewCourses,
} from '../screens';
import { Context } from '../store/context';
import { NavigationContainer } from '@react-navigation/native';
import color from '../utils/color';
import ComingSoon from '../screens/comingsoon';
import CourseDetails from '../screens/class_material/main';
import ExamSchedule from '../screens/class_material/exam-schedule';
import TimeTable from '../screens/class_material/class-table';
import CourseMaterial from '../screens/class_material/course-material';
import CourseRegistration from '../screens/course-reg/reg-course';
import ContactSupport from '../screens/support';
import FeesMenu from '../screens/school-fee/main';
import PayFee from '../screens/school-fee/pay-fee';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { isAuth, } = useContext(Context);

  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="login"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: { backgroundColor: color.primary },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: {
          textTransform: 'capitalize',
          fontFamily: 'Raleway-Regular',
          fontWeight: '700',
        },
      }}>
      {isAuth ? (
        <>
          <Stack.Screen
            name="dashboard"
            component={Dashboard}
            options={({ }) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="biodata"
            component={Biodata}
            options={({ }) => ({
              title: 'Bio-data',
            })}
          />
          <Stack.Screen
            name="p_history"
            component={PaymentHistory}
            options={({ }) => ({
              title: 'Payment History',
            })}
          />
          <Stack.Screen name="result" component={Result} />
          <Stack.Screen
            name="h_dashboard"
            component={HostelDashBoard}
            options={({ }) => ({
              title: 'Hostel & Accommodation',
            })}
          />
          <Stack.Screen
            name="h_documents"
            component={HostelDocuments}
            options={({ }) => ({
              title: 'Hostel Documents',
            })}
          />
          <Stack.Screen
            name="faq"
            component={Faq}
            options={({ }) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="validate-payment"
            component={ValidatePayment}
            options={({ }) => ({
              title: 'validate Payment',
            })}
          />
          <Stack.Screen
            name="view-course"
            component={ViewCourses}
            options={({ }) => ({
              title: 'View Courses',
            })}
          />
          <Stack.Screen
            name="course_details"
            component={CourseDetails}
            options={({ }) => ({
              title: 'Courses Details',
            })}
          />
          <Stack.Screen
            name="timetable"
            component={TimeTable}
            options={({ }) => ({
              title: 'Time Table',
            })}
          />
          <Stack.Screen
            name="course_material"
            component={CourseMaterial}
            options={({ }) => ({
              title: 'Course Material',
            })}
          />
          <Stack.Screen
            name="exam_schedule"
            component={ExamSchedule}
            options={({ }) => ({
              title: 'exam schedule',
            })}
          />
          <Stack.Screen
            name="course_reg"
            component={CourseRegistration}
            options={({ }) => ({
              title: 'course registration',
            })}
          />
          <Stack.Screen
            name="support"
            component={ContactSupport}
            options={({ }) => ({
              title: 'contact  help desk',
            })}
          />
          <Stack.Screen
            name="fees"
            component={FeesMenu}
            options={({ }) => ({
              title: 'School Fees',
            })}
          />
          <Stack.Screen
            name="pay_fees"
            component={PayFee}
            options={({ }) => ({
              title: 'Pay School Fees',
            })}
          />
          <Stack.Screen
            name="coming_soon"
            component={ComingSoon}
            options={({ }) => ({
              title: 'Coming Soon',
            })}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="welcome"
            component={Welcome}
            options={({ }) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={({ }) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="support"
            component={ContactSupport}
            options={({ }) => ({
              title: 'contact  help desk',
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const RootNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default RootNavigator;
