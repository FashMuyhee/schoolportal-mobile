import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Container} from '../components';
import {Button, Text, withTheme, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from '../assets/images/logo.png';

const Login = ({navigation, theme}) => {
  const {colors} = theme;
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container style={styles.container}>
        <View style={styles.logo}>
          <Image source={logo} />
          <Text style={styles.loginTitle}>Login To Your Portal</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            label="Matric Number"
            style={styles.input}
            left={<Icon name="user" color="green" size={20} />}
          />
          <TextInput label="Password" style={styles.input} secureTextEntry />
          <Button
            mode="contained"
            labelStyle={{textTransform: 'uppercase', fontSize: 20}}
            style={styles.loginBtn}>
            login
          </Button>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '90%',
              alignSelf: 'center',
            }}>
            <Text style={{fontSize: 20}}>Having Issues logging in ?</Text>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  textTransform: 'capitalize',
                  fontWeight: 'normal',
                  color: '#00ab4a',
                  fontSize: 20,
                }}>
                Contact Support
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              alignSelf: 'center',
              position: 'absolute',
              bottom: 20,
            }}>
            <Text style={{fontSize: 17}}>By logging in you agree to the </Text>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  textTransform: 'capitalize',
                  fontWeight: 'normal',
                  color: '#00ab4a',
                  fontSize: 17,
                }}>
                Terms and condition
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Container>
    </>
  );
};

export default withTheme(Login);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor: '#00AB4A',
  },
  loginTitle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: hp(2),
  },
  form: {
    backgroundColor: 'white',
    height: '70%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    marginTop: hp(5),
    padding: 30,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 25,
  },
  loginBtn: {
    marginTop: 40,
    marginBottom: 30,
    paddingVertical: 13,
    borderRadius: 0,
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: hp(5),
  },
});
