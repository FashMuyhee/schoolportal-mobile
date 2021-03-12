import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavBar, ScrollContainer} from '../components';
import {Text, withTheme, Avatar, IconButton} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import student from '../assets/images/student.png';
import Icon from 'react-native-vector-icons/Feather';

const Result = ({theme,navigation}) => {
  const {colors} = theme;
  return (
    <>
      <NavBar
        center={
          <Text style={{color: 'white', fontSize: wp(4), fontWeight: 'bold'}}>
            Results
          </Text>
        }
        left={
          <Icon
            name="arrow-left"
            color="white"
            size={30}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <ScrollContainer>
        <Text>Buyakasha</Text>
      </ScrollContainer>
    </>
  );
};

export default withTheme(Result);

const styles = StyleSheet.create({});
