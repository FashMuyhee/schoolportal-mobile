import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Container} from '../components';
import {Text, List, Divider, Avatar} from 'react-native-paper';
import logo from '../assets/images/logo.png';
import student from '../assets/images/student.png';
import Icon from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Context} from '../store/context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Popover from 'react-native-popover-view';

const Dashboard = ({navigation}) => {
  const [actions] = useState([
    {action: 'Biodata', route: 'biodata', icon: 'account'},
    {action: 'School Fees', route: 'fees', icon: 'cash'},
    {action: 'Payment History', route: 'p_history', icon: 'menu'},
    {
      action: 'Validate Payment',
      route: 'validate-payment',
      icon: 'shield-check-outline',
    },
    {
      action: 'View Course Form',
      route: 'view-course',
      icon: 'book-open-variant',
    },
    {action: 'Course Details', route: 'course_details', icon: 'notebook'},
    {action: 'My Result', route: 'result', icon: 'clipboard-list-outline'},
    {action: 'Hostel', route: 'h_dashboard', icon: 'home'},
  ]);
  const {user} = useContext(Context);
  const [myDetails, setMyDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const fetchStudentDetails = () => {
    firestore()
      .collection('students')
      .doc(user.uid)
      .onSnapshot(
        (details) => {
          setLoading(false);
          const data = details.data();
          setMyDetails(data);
        },
        (e) => {
          console.log(e);
          setLoading(false);
        },
      );
  };

  useEffect(() => {
    fetchStudentDetails();
    return () => {
      fetchStudentDetails();
    };
  }, []);
  return (
    <Container style={{paddingLeft: 0, paddingRight: 0}}>
      <View style={styles.navbar}>
        <Image source={logo} style={styles.navbarImage} />
        <View style={{width: '50%'}}>
          <Text style={{color: 'white', fontSize: 20}}>Student Portal</Text>
          <View style={styles.date}>
            <Icon name="calendar" color="white" size={14} />
            <Text style={{color: 'white'}}>{new Date().toDateString()}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Popover
            popoverStyle={{padding: 10}}
            from={<Icon name="help-circle" color="white" size={25} />}>
            <Text
              onPress={() => {
                navigation.navigate('support');
              }}>
              Contact Help desk
            </Text>
          </Popover>
          <Icon name="log-out" color="white" size={25} onPress={handleLogout} />
        </View>
      </View>
      <Container style={styles.listWrapper}>
        {actions.map((action, key) => (
          <View key={key}>
            <List.Item
              onPress={() => navigation.navigate(action.route, {myDetails})}
              title={action.action}
              left={(props) => (
                <List.Icon {...props} color="#00ab4a" icon={action.icon} />
              )}
            />
            <Divider />
          </View>
        ))}
        <View style={styles.bottomDetail}>
          <Avatar.Image
            source={student}
            size={80}
            style={{
              borderColor: '#00ab4a',
              borderWidth: 1,
              backgroundColor: 'white',
            }}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: wp(4), textTransform: 'capitalize'}}>
              {myDetails?.fullname}
            </Text>
            <Text style={{textTransform: 'uppercase'}}>
              {myDetails?.matric_no}
            </Text>
          </View>
        </View>
      </Container>
    </Container>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#00ab4a',
    height: '15%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarImage: {
    width: 70,
    height: 70,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  right: {
    width: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listWrapper: {
    marginTop: hp(5),
    borderRadius: 40,
    elevation: 8,
    paddingTop: 20,
  },
  bottomDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(9),
    position: 'absolute',
    top: hp(60),
    bottom: 0,
    height: hp(10),
    width: wp(100),
    padding: 15,
  },
});
