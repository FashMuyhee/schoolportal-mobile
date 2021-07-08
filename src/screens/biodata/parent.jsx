import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, List, Divider, Text} from 'react-native-paper';
import {ScrollContainer} from '../../components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import student from '../../assets/images/student.png';

const Parent = ({navigation}) => {
  const [data] = useState([
    {label: 'Full Name', value: 'Arobadi Ebenezer Rotimi'},
    {label: 'Phone No', value: '09012373829'},
    {
      label: 'Address',
      value: 'My home Address',
    },
    {
      label: 'Relationship',
      value: 'Mother',
    },
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
