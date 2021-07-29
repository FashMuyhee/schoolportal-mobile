import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Container} from '../components';
import {Button, Text, withTheme, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import logo from '../assets/images/logo.png';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import auth from '@react-native-firebase/auth';
import validateEmail from '../utils/validateEmail';

const Login = ({theme}) => {
  const {colors} = theme;
  const [biometryType, setBiometryType] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      setMessage('All Field are required');
      Snackbar.show({text: 'All Field are required'});

      return;
    }

    if (validateEmail(email)) {
      if (password.length >= 8) {
        setLoading(true);
        try {
          let response = await auth().signInWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            // Snackbar.show({text: 'Login Successful'});
            setLoading(false);
          }
        } catch (e) {
          console.error(e.message);
          setLoading(false);
          setMessage(e);
        }
      } else {
        /*  Snackbar.show({
          text: 'Password Too Short, must be at least 8 characters ',
        }); */
        console.log('Password Too Short, must be at least 8 characters');
      }
    } else {
      // Snackbar.show({text: 'Invalid Email'});
      console.log('Invalid Email');
    }
  };

  const handleFingerPrintLogin = () => {
    if (biometryType !== null && biometryType !== undefined) {
      FingerprintScanner.authenticate({
        description: 'Touch Fingerprint scanner to continue',
      })
        .then(() => {
          handleSignIn();
        })
        .catch((error) => {
          console.log('Authentication error is => ', error);
        });
    } else {
      console.log('biometric authentication is not available');
    }
  };

  const checkSensor = () => {
    FingerprintScanner.isSensorAvailable()
      .then((biometryType) => {
        setBiometryType(biometryType);
      })
      .catch((error) => console.log('isSensorAvailable error => ', error));
  };

  useEffect(() => {
    checkSensor();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container style={styles.container} pad={false}>
        <View style={styles.logo}>
          <Image source={logo} />
          <Text style={styles.loginTitle}>Login To Your Portal</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            label="Email"
            style={styles.input}
            left={<TextInput.Icon color={colors.primary} icon="email" />}
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            label="Password"
            style={styles.input}
            secureTextEntry
            left={<TextInput.Icon name="lock" color={colors.primary} />}
          />
          <Button
            onPress={handleSignIn}
            loading={loading}
            mode="contained"
            labelStyle={{textTransform: 'uppercase', fontSize: 20}}
            style={styles.loginBtn}>
            login
          </Button>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: wp(90),
              alignSelf: 'center',
            }}>
            <Text style={{fontSize: wp(3.4)}}>Having Issues logging in ?</Text>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  textTransform: 'capitalize',
                  fontWeight: 'normal',
                  color: '#00ab4a',
                  fontSize: wp(3.4),
                }}>
                Contact Support
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.fingerprint}>
            <Icon
              name="fingerprint"
              color={colors.primary}
              size={70}
              onPress={handleFingerPrintLogin}
            />
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
            <Text style={{fontSize: wp(3)}}>
              By logging in you agree to the{' '}
            </Text>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  textTransform: 'capitalize',
                  fontWeight: 'normal',
                  color: '#00ab4a',
                  fontSize: wp(3),
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
    height: hp(70),
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    marginTop: '15%',
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
  fingerprint: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
});
