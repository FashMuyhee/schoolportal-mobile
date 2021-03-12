import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavBar, ScrollContainer} from '../components';
import {Text, withTheme, Avatar, IconButton} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import student from '../assets/images/student.png';

const Result = () => {
  return (
    <>
      <NavBar
        center={
          <Text style={{color: 'white', fontSize: wp(4), fontWeight: 'bold'}}>
            Results
          </Text>
        }
        bgColor={colors.primary}
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

export default Result;

const styles = StyleSheet.create({});
