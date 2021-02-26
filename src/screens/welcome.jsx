import React from 'react';
import {StyleSheet, ImageBackground, StatusBar} from 'react-native';
import {Text} from 'react-native-paper';
import welcome_bg from '../assets/images/welcome_bg.jpg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {withTheme} from 'react-native-paper';

const Welcome = ({theme, navigation}) => {
  const {colors} = theme;

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={welcome_bg}
        style={styles.bgImage}
        blurRadius={2}>
        <Text> Work In Progress</Text>
      </ImageBackground>
    </>
  );
};

export default withTheme(Welcome);

const styles = StyleSheet.create({
  bgImage: {
    height: hp(100),
    width: wp(100),
    resizeMode: 'contain',
    paddingHorizontal: wp(13),
  },
  welcomeText: {
    marginTop: hp(10),
    marginBottom: 30,
  },
  btn: {
    width: '50%',
    borderRadius: 3,
    alignSelf: 'center',
  },
});
