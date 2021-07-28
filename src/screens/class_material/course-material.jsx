import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Container} from '../../components';
import colors from '../../utils/color';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import color from '../../utils/color';

const CourseMaterial = ({navigation}) => {
  const [tableData] = useState({
    head: ['Course Code', 'Action'],
    body: [
      ['com 421', ''],
      ['com 422', ''],
      ['com 423', ''],
      ['com 424', ''],
      ['com 425', ''],
      ['com 428', ''],
      ['com 429', ''],
      ['gns 423', ''],
      ['gns 402', ''],
    ],
  });

  return (
    <Container pad>
      <Table
        borderStyle={styles.tableWrapper}
        style={{height: hp(7 * tableData.body.length + 6), marginTop: 20}}>
        <Row
          data={tableData.head}
          style={styles.head}
          textStyle={styles.textHead}
          widthArr={[wp(50), wp(30)]}
        />
        {tableData.body.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={
                  cellIndex === 1 ? (
                    <IconButton
                      icon="download"
                      color={colors.background}
                      size={30}
                      style={{backgroundColor: colors.primary, marginLeft: 25}}
                    />
                  ) : (
                    cellData
                  )
                }
                textStyle={styles.textBody}
                width={cellIndex === 1 ? wp(30) : wp(50)}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </Container>
  );
};

export default CourseMaterial;

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
