import React from 'react';
import {StyleSheet, View, Image, TouchableNativeFeedback} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import course_form from '../../assets/images/course_form.png';
import print from '../../assets/images/print.png';
import {Container} from '../../components';
import colors from '../../utils/color';
import RNPrint from 'react-native-print';

const CardItem = ({image, title, onPress}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  </TouchableNativeFeedback>
);
const ViewCourses = ({navigation}) => {
  const printDoc = async () => {
    await RNPrint.print({
      filePath:
       'https://firebasestorage.googleapis.com/v0/b/school-portal-c540f.appspot.com/o/school%20docs%2FJohn%20Course%20Form.pdf?alt=media&token=f04e37f4-275b-46c6-8b5c-f4d3a2b647ae',
    });
  };
  return (
    <Container pad={false}>
      <View style={styles.cardList}>
        <CardItem
          image={course_form}
          title="Course Registration"
          onPress={() => navigation.navigate('course_reg')}
        />
        <CardItem image={print} title="Print Course Form" onPress={printDoc} />
      </View>
    </Container>
  );
};

export default ViewCourses;

const styles = StyleSheet.create({
  cardList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: 70,
    borderRadius: 10,
    borderColor: colors.primary,
    marginBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: Colors.grey100,
    borderWidth: 1,
  },
  cardImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cardText: {
    color: colors.primary,
    fontFamily: 'Raleway-Bold',
    fontSize: 16,
    marginLeft: 20,
    textTransform: 'capitalize',
  },
});
