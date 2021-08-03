import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, List, Divider, Text} from 'react-native-paper';
import {ScrollContainer} from '../../components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import student from '../../assets/images/student.png';
import {Context} from '../../store/context';
import firestore from '@react-native-firebase/firestore';

const Parent = ({navigation}) => {
  const [myDetails, setMyDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const {user} = useContext(Context);

  const fetchParentDetails = () => {
    firestore()
      .collection('parents')
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
    fetchParentDetails();
    return () => {
      fetchParentDetails();
    };
  }, []);

  return (
    <ScrollContainer>
      <Avatar.Image
        source={student}
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
          title={myDetails?.name}
          left={(props) => <Text style={styles.label}>{`Fullname :`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.relation}
          left={(props) => <Text style={styles.label}>{`Relationship :`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.status}
          left={(props) => (
            <Text style={styles.label}>{`Marital Status:`}</Text>
          )}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.address}
          left={(props) => <Text style={styles.label}>{`Address :`}</Text>}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.phone_no}
          left={(props) => (
            <Text style={styles.label}>{`Phone Number 1:`}</Text>
          )}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
        <List.Item
          title={myDetails?.other_phone}
          left={(props) => (
            <Text style={styles.label}>{`Phone Number 2:`}</Text>
          )}
          titleStyle={{textTransform: 'capitalize'}}
          style={{height: hp(7)}}
        />
        <Divider />
      </View>
    </ScrollContainer>
  );
};

export default Parent;

const styles = StyleSheet.create({
  listWrapper: {
    marginTop: hp(2),
    paddingTop: 20,
  },
  label: {
    textTransform: 'capitalize',
    paddingTop: hp(1),
    color: '#C7C7C7',
    fontFamily: 'Raleway-Bold',
  },
});
