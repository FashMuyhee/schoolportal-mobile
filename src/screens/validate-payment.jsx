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

const ValidatePayment = ({navigation}) => {
  const [state, setState] = useState('');

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
          Enter The Remita Generated Number on Your Receipt
        </Text>
        <TextInput
          label="RRR Number"
          style={{backgroundColor: 'white', marginVertical: 20}}
          onChangeText={setState}
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
          Validate Payment
        </Button>
      </View>
    </Container>
  );
};

export default withTheme(ValidatePayment);
const styles = StyleSheet.create({});
