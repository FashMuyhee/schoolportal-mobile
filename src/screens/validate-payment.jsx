import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavBar, Container} from '../components';
import {Text, withTheme, Button, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ValidatePayment = ({navigation, theme}) => {
  const {colors} = theme;
  return (
    <Container>
      <View style={{marginVertical: '30%'}}>
        <Text style={{textAlign: 'center', fontSize: hp(2)}}>
          Enter The Remita Generated Number on Your Receipt
        </Text>
        <TextInput
          label="RRR Number"
          style={{backgroundColor: 'white', marginVertical: 20}}
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
          }}>
          Validate Payment
        </Button>
      </View>
    </Container>
  );
};

export default withTheme(ValidatePayment);
const styles = StyleSheet.create({
 
});
