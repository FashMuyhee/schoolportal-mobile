import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Container} from '../../components';
import colors from '../../utils/color';
import {Table, Row, Rows} from 'react-native-table-component';

const TimeTable = ({navigation}) => {
  const [tableData] = useState({
    head: ['8 - 10am', '10 -12noon', '12 - 1pm', '1 - 3pm', '3 - 5pm'],
    body: [
      [
        'com 424',
        'com 423',
        'Break',
        'com 423 (practical)',
        'com 424 (practical)',
      ],
      [
        'com 422 (practical)',
        'com 428',
        'Break',
        'com 429 (project)',
        'com 425',
      ],
      ['free', 'gns 423', 'Break', 'com 428 (practical)', 'free'],
      ['com 421 (practical)', 'free', 'Break', 'com 422', 'com 421'],
      ['gns 402', 'free', 'Break', 'com 425 (practical)', 'gns 425'],
    ],
  });

  return (
    <Container pad>
      <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 20}}>
        Current Timetable
      </Text>

      <ScrollView horizontal>
        <Table borderStyle={styles.tableWrapper} style={{height: hp(56)}}>
          <Row
            data={tableData.head}
            style={styles.head}
            textStyle={styles.textHead}
            widthArr={[150, 150, 150, 150, 150]}
          />
          <Rows
            data={tableData.body}
            textStyle={styles.textBody}
            style={{height: hp(10)}}
            widthArr={[150, 150, 150, 150, 150]}
          />
        </Table>
      </ScrollView>
    </Container>
  );
};

export default TimeTable;

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
