import React, {useEffect} from 'react';
import {StyleSheet, View, Image, TouchableNativeFeedback} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import print from '../../assets/images/print.png';
import doc from '../../assets/pdf/test.pdf';
import pay from '../../assets/images/pay.png';
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

const FeesMenu = ({navigation}) => {
  return (
    <Container pad={false}>
      <View style={styles.cardList}>
        <CardItem
          image={pay}
          title="Pay for Fee"
          onPress={() => navigation.navigate('pay_fees')}
        />
        <CardItem image={print} title="Print Receipt" onPress={printDoc} />
      </View>
    </Container>
  );
};

const printDoc = async () => {
  await RNPrint.print({
    filePath:
      'https://firebasestorage.googleapis.com/v0/b/school-portal-c540f.appspot.com/o/school%20docs%2FJohn%20Receipt.pdf?alt=media&token=22b2f1fb-98d0-4df7-b6c5-58a0de449088',
  });
};

export default FeesMenu;

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
