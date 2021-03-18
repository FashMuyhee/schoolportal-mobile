import React, {useState} from 'react';
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

const Dashboard = ({navigation}) => {
  const [actions] = useState([
    {action: 'Biodata', route: 'biodata', icon: 'account'},
    {action: 'Payment History', route: 'p_history', icon: 'menu'},
    {action: 'Validate Payment', route: '', icon: 'shield-check-outline'},
    {action: 'Course Registration', route: '', icon: 'notebook'},
    {action: 'Transcript', route: '', icon: 'folder-account'},
    {action: 'View Course Form', route: '', icon: 'book-open-variant'},
    {action: 'My Result', route: 'result', icon: 'clipboard-list-outline'},
    {action: 'Hostel', route: '', icon: 'home'},
  ]);
  return (
    <Container style={{paddingLeft: 0, paddingRight: 0}}>
      <View style={styles.navbar}>
        <Image source={logo} style={styles.navbarImage} />
        <View style={{width: '50%'}}>
          <Text style={{color: 'white', fontSize: 20}}>Student Portal</Text>
          <View style={styles.date}>
            <Icon name="calendar" color="white" size={14} />
            <Text style={{color: 'white'}}>13th May 2021</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Icon
            name="help-circle"
            color="white"
            size={25}
            onPress={() => navigation.navigate('faq')}
          />
          <Icon name="more-vertical" color="white" size={25} />
        </View>
      </View>
      <Container style={styles.listWrapper}>
        {actions.map((action, key) => (
          <View key={key}>
            <List.Item
              onPress={() => navigation.navigate(action.route)}
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
            style={{backgroundColor: 'grey'}}
          />
          <View style={{marginLeft: 20, width: '50%'}}>
            <Text style={{fontSize: wp(4)}}>Arobadi Ebenezer R</Text>
            <Text>F/HD/18/3210023</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 70,
            }}>
            <Icon name="bell" size={25} color="grey" />
            <Icon name="settings" size={25} color="grey" />
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
    marginTop: hp(15),
  },
});
