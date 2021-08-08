import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container} from '../components';
import {Text, withTheme, Button, TextInput} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SweetAlert from 'react-native-sweet-alert';
import Snackbar from 'react-native-snackbar';

const ContactSupport = ({navigation}) => {
  const [topic, setTopic] = useState('');
  const [complain, setComplain] = useState('');

  const handleVerify = () => {
    if (state) {
      SweetAlert.showAlertWithOptions({
        title: 'Payment Verified',
        confirmButtonTitle: 'OK',
        confirmButtonColor: '#000',
        style: 'success',
        cancellable: true,
      });
      return;
    }
    Snackbar.show({text: 'All Field are required'});
  };

  return (
    <Container>
      <View style={{marginVertical: '30%'}}>
        <Text style={{textAlign: 'center', fontSize: hp(2)}}>
          Your Complain will be sent to College CITM
        </Text>
        <TextInput
          label="Topic / Subject"
          style={{backgroundColor: 'white', marginVertical: 20}}
          onChangeText={setTopic}
        />
        <TextInput
          label="Complain"
          style={{backgroundColor: 'white', marginVertical: 20}}
          onChangeText={setComplain}
          multiline
          numberOfLines={4}
        />
        <Button
          uppercase={false}
          mode="contained"
          style={{
            marginTop: 40,
            marginBottom: 30,
            paddingVertical: 13,
            borderRadius: 0,
            alignItems: 'center',
          }}
          labelStyle={{fontSize: hp(2)}}
          onPress={handleVerify}>
          Send Message
        </Button>
      </View>
    </Container>
  );
};

export default withTheme(ContactSupport);
const styles = StyleSheet.create({});
