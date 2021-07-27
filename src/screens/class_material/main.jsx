import React from 'react';
import {StyleSheet, View, Image, TouchableNativeFeedback} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import download from '../../assets/images/download.png';
import timetable from '../../assets/images/timetable.png';
import schedule from '../../assets/images/schedule.png';
import {Container} from '../../components';
import colors from '../../utils/color';

const CardItem = ({image, title, onPress}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  </TouchableNativeFeedback>
);
const CourseDetails = ({navigation}) => {
  return (
    <Container pad={false}>
      <View style={styles.cardList}>
        <CardItem
          image={download}
          title="Download Course Material"
          onPress={() => navigation.navigate('course_material')}
        />
        <CardItem
          image={timetable}
          title="View Timetable"
          onPress={() => navigation.navigate('timetable')}
        />
        <CardItem
          image={schedule}
          title="View Exam Timetable"
          onPress={() => navigation.navigate('exam_schedule')}
        />
      </View>
    </Container>
  );
};

export default CourseDetails;

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
    borderWidth: 0.7,
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
  },
});
