import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Container} from '../../components';
import colors from '../../utils/color';
import {Table, Row, Rows} from 'react-native-table-component';
import SweetAlert from 'react-native-sweet-alert';

const PayFee = ({navigation}) => {
  const [tableData] = useState({
    head: ['Description', 'Amount'],
    body: [
      ['Sport', '2,000'],
      ['Examination Fee', '10,000'],
      ['Registration Fee', '2,000'],
      ['Matric/Graduation Fee', '5,500'],
      ['Medical Services', '2,500'],
      ['LAB/Workshop Fees', '5,000'],
      ['Library', '2,000'],
      ['Entrepreneurship Dev Project', '2,000'],
      ['I.C.T Fees', '3,000'],
      ['Library', '3,000'],
      ['Total', '30,500'],
    ],
  });

  const handlePayment = () => {
    SweetAlert.showAlertWithOptions({
      title: 'Payment Successful',
      confirmButtonTitle: 'OK',
      confirmButtonColor: '#000',
      style: 'success',
      cancellable: true,
    });
    return;
  };
  return (
    <Container pad>
      <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 20}}>
        School Fee Breakdown
      </Text>
      <ScrollView horizontal>
        <Table
          borderStyle={styles.tableWrapper}
          style={{height: hp(66.9), marginTop: 20}}>
          <Row
            data={tableData.head}
            style={styles.head}
            textStyle={styles.textHead}
            widthArr={[270, 130]}
          />
          <Rows
            data={tableData.body}
            textStyle={styles.textBody}
            style={{height: hp(5.5)}}
            widthArr={[270, 130]}
          />
        </Table>
      </ScrollView>
      <Button
        uppercase={false}
        mode="contained"
        style={{
          marginTop: 40,
          marginBottom: 30,
          paddingVertical: 13,
          borderRadius: 0,
          alignItems: 'center',
        }}
        labelStyle={{fontSize: hp(2)}}
        onPress={handlePayment}>
        Pay School Fees, 30,500
      </Button>
    </Container>
  );
};

export default PayFee;

const styles = StyleSheet.create({
  head: {
    height: hp(6),
    backgroundColor: colors.primary,
  },
  tableWrapper: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    borderRadius: 4,
  },

  textBody: {
    margin: 6,
    fontSize: hp(1.5),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Raleway-Regular',
  },
  textHead: {
    fontFamily: 'Raleway-Bold',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontSize: hp(1.5),
  },
});
