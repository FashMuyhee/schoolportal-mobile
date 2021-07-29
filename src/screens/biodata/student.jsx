import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, List, Divider, Text} from 'react-native-paper';
import {ScrollContainer} from '../../components';
import student from '../../assets/images/student.png';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Context} from '../../store/context';
import firestore from '@react-native-firebase/firestore';

const Student = ({navigation}) => {
  const [myDetails, setMyDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const {user} = useContext(Context);

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
    <ScrollContainer>
      <Avatar.Image
        source={myDetails?.dp_url ?? student}
        size={250}
        style={{
          borderColor: '#00ab4a',
          borderWidth: 1,
          backgroundColor: 'white',
          alignSelf: 'center',
        }}
      />
      <View style={styles.listWrapper}>
        <Divider />
        <List.Item
          title={myDetails?.fullname}
          left={(props) => <Text style={styles.label}>{`Fullname:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.matric_no}
          left={(props) => <Text style={styles.label}>{`Matric No:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.email}
          left={(props) => <Text style={styles.label}>{`Email:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.program}
          left={(props) => <Text style={styles.label}>{`Program:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.session}
          left={(props) => <Text style={styles.label}>{`Session:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.school}
          left={(props) => <Text style={styles.label}>{`School:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.dept}
          left={(props) => <Text style={styles.label}>{`Department:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.entry_year}
          left={(props) => <Text style={styles.label}>{`Entry Year:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.phone_no}
          left={(props) => <Text style={styles.label}>{`Phone Number:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.address}
          left={(props) => <Text style={styles.label}>{`Address:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.sex}
          left={(props) => <Text style={styles.label}>{`Sex:`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
      </View>
    </ScrollContainer>
  );
};

export default Student;

const styles = StyleSheet.create({
  listWrapper: {
    marginTop: hp(5),
    paddingTop: 20,
  },
  label: {
    textTransform: 'capitalize',
    paddingTop: hp(1),
    color: '#C7C7C7',
    fontFamily: 'Raleway-Bold',
  },
});
