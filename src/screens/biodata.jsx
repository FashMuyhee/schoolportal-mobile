import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavBar, Container} from '../components';
import {Text, withTheme, Avatar, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import student from '../assets/images/student.png';
import {Tabs, TabScreen} from 'react-native-paper-tabs';

const Biodata = ({navigation, theme}) => {
  const {colors} = theme;
  return (
    <>
      <NavBar
        center={
          <Text style={{color: 'white', fontSize: wp(4), fontWeight: 'bold'}}>
            Biodata
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

      <Container>
        <View style={{position: 'relative'}}>
          <Avatar.Image source={student} style={styles.avatar} size={170} />
          <IconButton
            icon="pencil-minus-outline"
            color={colors.primary}
            style={styles.imagePicker}
          />
        </View>
        <Tabs>
          <TabScreen label="Explore" icon="compass">
            <View style={{backgroundColor: 'black', flex: 1}} />
          </TabScreen>
          <TabScreen label="Flights" icon="airplane">
            <View style={{backgroundColor: 'black', flex: 1}} />
          </TabScreen>
          <TabScreen label="Trips" icon="bag-suitcase">
            <View style={{backgroundColor: 'red', flex: 1}} />
          </TabScreen>
        </Tabs>
      </Container>
    </>
  );
};

export default withTheme(Biodata);
const styles = StyleSheet.create({
  avatar: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: StyleSheet.hairlineWidth,
  },
  imagePicker: {
    position: 'absolute',
    top: hp(6),
    left: wp(56),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#00ab4a',
    zIndex: 3,
  },
});
