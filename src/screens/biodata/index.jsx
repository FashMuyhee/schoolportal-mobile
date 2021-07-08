import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {withTheme, BottomNavigation, Colors} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Parent from './parent';
import Student from './student';

const Biodata = ({theme}) => {
  const {colors} = theme;
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'student', title: 'Personal Info', icon: 'account'},
    {
      key: 'parent',
      title: 'Parent /Guardian Info',
      icon: 'account-child-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    student: Student,
    parent: Parent,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="white"
      inactiveColor={Colors.grey400}
      labeled
      shifting={false}
      barStyle={{
        backgroundColor: colors.primary,
        height: 60,
      }}
    />
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
