import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, List, Divider, Text} from 'react-native-paper';
import {ScrollContainer} from '../../components';
import student from '../../assets/images/student.png';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Student = ({navigation}) => {
  const [data] = useState([
    {label: 'Full Name', value: 'Arobadi Ebenezer Rotimi'},
    {label: 'Matric No', value: 'F/HD/18/3210018'},
    {
      label: 'Program',
      value: 'HND 2 FULL-TIME',
    },
    {label: 'Session', value: '20219/2020'},
    {label: 'School', value: 'Technology'},
    {label: 'Department', value: 'Computer Science'},
    {label: 'Entry Year', value: '2019'},
    {label: 'phone number', value: '08026222019'},
    {label: 'address', value: 'My House'},
    {label: 'sex', value: 'Male'},
  ]);

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
        {data.map((label, key) => (
          <View key={key}>
            <List.Item
              title={label.value}
              left={(props) => (
                <Text style={styles.label}>{`${label.label} :`}</Text>
              )}
              titleStyle={{textTransform: 'capitalize'}}
              style={{height: hp(7)}}
            />
            <Divider />
          </View>
        ))}
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
