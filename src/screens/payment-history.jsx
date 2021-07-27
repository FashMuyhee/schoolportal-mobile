import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NavBar, ScrollContainer} from '../components';
import {
  Text,
  withTheme,
  Avatar,
  IconButton,
  Divider,
  List,
  Button,
  DataTable,
} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import student from '../assets/images/student.png';
import Icon from 'react-native-vector-icons/Feather';

const PaymentHistory = ({theme, navigation}) => {
  const {colors} = theme;
  const [academicDetail] = useState([
    {
      title: 'ACADEMIC SESSION',
      description: '2019/2020',
    },
    {title: 'STUDENT STATUS', description: 'Active'},
    {
      title: 'CURRENT SEMESTER',
      description: 'Second',
    },
    {
      title: 'COURSE REGISTRATION STATUS',
      description: 'Registered',
    },
    {
      title: 'CURRENT LEVEL',
      description: 'HND 2',
    },
    {
      title: 'SCHOOL FEES STATUS',
      description: 'Completed',
    },
    {
      title: 'HOSTEL STATUS',
      description: 'Applied',
    },
  ]);
  const [tableData] = useState({
    title: ['Fee', 'Session', 'Amount', 'Date', 'Status'],
    body: [
      {
        fee: 'School Fee',
        session: '2019/2020',
        date: '20th May 2020',
        amount: '56,000',
        status: 'paid',
      },
      {
        fee: 'Acceptance Fee',
        session: '2019/2020',
        date: '20th May 2020',
        amount: '56,000',
        status: 'paid',
      },
      {
        fee: 'Hostel Fee',
        session: '2019/2020',
        date: '20th May 2020',
        amount: '56,000',
        status: 'paid',
      },
    ],
  });
  return (
    <ScrollContainer>
      <View style={styles.profileDetails}>
        <Avatar.Image
          source={student}
          size={100}
          style={{backgroundColor: 'grey'}}
        />
        <View style={{marginLeft: 20, width: '80%'}}>
          <Text style={{fontSize: wp(4)}}>Arobadi Ebenezer R</Text>
          <Text>F/HD/18/3210023</Text>
          <Text style={{fontSize: wp(2.7)}}>
            HND2 COMPUTER SCIENCE FULL-TIME
          </Text>
        </View>
      </View>
      <Divider />
      <View style={styles.academicInfo}>
        {academicDetail.map((detail, key) => (
          <List.Item
            title={detail.title}
            description={detail.description}
            style={styles.listItem}
            key={key}
          />
        ))}
      </View>
      <Divider />
      <View style={styles.tableContent}>
        <Text style={styles.title}>Payment History </Text>
        <DataTable>
          <DataTable.Header>
            {tableData.title.map((data, key) => {
              return (
                <DataTable.Title key={key}>
                  <Text style={{color: '#00ab4a', textTransform: 'uppercase'}}>
                    {data}
                  </Text>
                </DataTable.Title>
              );
            })}
          </DataTable.Header>
          <ScrollView>
            {tableData.body.map((item, key) => {
              return (
                <DataTable.Row key={key}>
                  <DataTable.Cell>
                    <Text style={styles.tableText}>{item.fee}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tableText}>{item.session}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tableText}>{item.amount}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tableText}>{item.date}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tableText}>{item.status}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </ScrollView>
        </DataTable>
        <Button mode="contained">PRINT</Button>
      </View>
    </ScrollContainer>
  );
};

export default withTheme(PaymentHistory);

const styles = StyleSheet.create({
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  academicInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    height: 300,
    marginBottom: 20,
  },
  listItem: {
    flexBasis: wp(43),
  },
  tableContent: {
    width: '100%',
    marginVertical: 30,
    height: 350,
  },
  title: {
    textAlign: 'center',
    fontSize: wp(3.5),
    textTransform: 'uppercase',
  },
  tableText: {
    textTransform: 'capitalize',
    fontSize: wp(2.5),
    textAlign: 'center',
  },
});
