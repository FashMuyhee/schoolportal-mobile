import React from 'react';
import {StyleSheet, View, Image, TouchableNativeFeedback} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import print from '../../assets/images/print.png';
import pay from '../../assets/images/pay.png';
import hostel from '../../assets/images/hostel.png';
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
const HostelDashBoard = ({navigation}) => {
  return (
    <Container pad={false}>
      <View style={styles.cardList}>
        <CardItem image={pay} title="Pay for Accommodation" />
        <CardItem image={print} title="Print Documents" />
        <CardItem image={hostel} title="Verify Allocation" />
      </View>
    </Container>
  );
};

export default HostelDashBoard;

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
