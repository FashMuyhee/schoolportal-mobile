import React, {useState} from 'react';
import {StyleSheet, Alert, ScrollView} from 'react-native';
import {RadioButton, IconButton, Button} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Container} from '../../components';
import colors from '../../utils/color';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import SweetAlert from 'react-native-sweet-alert';

const CourseRegistration = ({navigation}) => {
  const [tableData] = useState({
    head: ['Course Code', 'Course Title', 'Unit', 'Action'],
    body: [
      ['com 422', 'COMPUTER GRAPHICS & ANIMATION ', 2, ''],
      ['com 423', 'AI & EXPERT SYSTEM ', 3, ''],
      ['com 424', 'PROFESSIONAL PRACTICE IN IT', 2, ''],
      ['com 425', 'INTRO TO MODELLING & SIMULATION ', 3, ''],
      ['com 428', 'OPERATIONS RESEARCH II', 3, ''],
      ['com 429', 'PROJECT', 4, ''],
      ['gns 402', 'LITERARY APPRECIATION & ORAL COMPOSITION', 2, ''],
      ['gns 425', 'LAW OF CONTRACT', 2, ''],
    ],
  });
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = React.useState('first');

  const handleSubmitCourses = () => {
    Alert.alert(
      'Submit Courses',
      'Are you sure you want to save the selected courses ?',
      [
        {
          text: 'Cancel',
          style: 'destructive',
          onPress: () => console.log('cancelled'),
        },
        {
          text: 'Yes',
          onPress: () => {
            SweetAlert.showAlertWithOptions({
              title: 'Courses saved',
              confirmButtonTitle: 'OK',
              confirmButtonColor: '#000',
              style: 'success',
              cancellable: true,
            });
          },
        },
      ],
    );
  };

  return (
    <Container pad>
      <ScrollView horizontal>
        <Table
          borderStyle={styles.tableWrapper}
          style={{height: hp(7 * tableData.body.length + 6), marginTop: 20}}>
          <Row
            data={tableData.head}
            style={styles.head}
            textStyle={styles.textHead}
            widthArr={[wp(50), wp(50), wp(50), wp(30)]}
          />
          {tableData.body.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={
                    cellIndex === 3 ? (
                      <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color={colors.primary}
                      />
                    ) : (
                      cellData
                    )
                  }
                  textStyle={styles.textBody}
                  width={cellIndex === 3 ? wp(30) : wp(50)}
                />
              ))}
            </TableWrapper>
          ))}
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
        onPress={handleSubmitCourses}>
        Save Courses
      </Button>
      {/* <ActivityModal isLoading={loading} /> */}
    </Container>
  );
};

export default CourseRegistration;

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
    fontSize: hp(1.7),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Raleway-Regular',
  },
  textHead: {
    fontFamily: 'Raleway-Bold',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontSize: hp(1.6),
  },
  row: {
    flexDirection: 'row',
    height: hp(7),
  },
});
