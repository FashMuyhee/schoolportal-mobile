import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Container} from '../../components';
import colors from '../../utils/color';

const ExamSchedule = () => {
  const [examInfo] = useState([
    {date: `Mon 12/07/2021`, code: 'COM 422', time: '9-12pm'},
    {date: `Tue 13/07/2021`, code: 'COM 424', time: '9-12pm'},
    {date: 'Wed 14/07/2021', code: 'COM 423', time: '9-12pm'},
    {date: 'Thur 15/07/2021', code: 'GNS 402(CBT)', time: '8am'},
    {
      date: 'Fri 16/07/2021',
      code: 'GNS 423/425',
      time: '9:00-12:00pm',
    },
    {
      date: 'Mon 19/07/2021',
      code: 'COM 425',
      time: '1:30-4:30pm',
    },
    {date: 'Thur 22/07/2021', code: 'COM 428', time: '1:30-4:30pm'},
  ]);
  return (
    <Container pad>
      <View style={styles.cardList}>
        <DataTable style={{marginTop: 20}}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>
              <Text
                style={{
                  color: colors.background,
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}>
                Date
              </Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text
                style={{color: colors.background, textTransform: 'uppercase'}}>
                Course Code
              </Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text
                style={{color: colors.background, textTransform: 'uppercase'}}>
                Time
              </Text>
            </DataTable.Title>
          </DataTable.Header>
          {examInfo.map((item, key) => (
            <DataTable.Row key={key}>
              <DataTable.Cell>
                <Text style={styles.tableText}>{item.date}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>{item.code}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>{item.time}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </Container>
  );
};

export default ExamSchedule;

const styles = StyleSheet.create({
  cardList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: colors.primary,
  },
  tableText: {
    textTransform: 'capitalize',
    fontSize: wp(3),
    textAlign: 'center',
  },
});
