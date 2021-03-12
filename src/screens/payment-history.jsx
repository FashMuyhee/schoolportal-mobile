import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  NavBar,
  ScrollContainer,
  Table,
  TCell,
  TBody,
  TRow,
  THead,
} from '../components';
import {
  Text,
  withTheme,
  Avatar,
  IconButton,
  Divider,
  List,
  Button,
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
    <>
      <NavBar
        center={
          <Text style={{color: 'white', fontSize: wp(4), fontWeight: 'bold'}}>
            Payment History
          </Text>
        }
        left={
          <Icon
            name="arrow-left"
            color="white"
            size={30}
            onPress={() => navigation.goBack()}
          />
        }
      />
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
          <Table>
            <THead>
              {tableData.title.map((data, key) => {
                return (
                  <TCell key={key}>
                    <Text
                      style={{color: '#00ab4a', textTransform: 'uppercase'}}>
                      {data}
                    </Text>
                  </TCell>
                );
              })}
            </THead>
            <TBody>
              {tableData.body.map((item, key) => {
                return (
                  <TRow key={key}>
                    <TCell>
                      <Text style={styles.tableText}>{item.fee}</Text>
                    </TCell>
                    <TCell>
                      <Text style={styles.tableText}>{item.session}</Text>
                    </TCell>
                    <TCell>
                      <Text style={styles.tableText}>{item.amount}</Text>
                    </TCell>
                    <TCell>
                      <Text style={styles.tableText}>{item.date}</Text>
                    </TCell>
                    <TCell>
                      <Text style={styles.tableText}>{item.status}</Text>
                    </TCell>
                  </TRow>
                );
              })}
            </TBody>
          </Table>
          <Button mode="contained">PRINT</Button>
        </View>
      </ScrollContainer>
    </>
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
  },
});
