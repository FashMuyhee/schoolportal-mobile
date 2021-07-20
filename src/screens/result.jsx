import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
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

const Result = ({theme, navigation}) => {
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
    title: ['Session', 'Semester', 'Level', 'CGPA', 'GPA'],
    body: [
      {
        session: '2019/2020',
        semester: '1st Semester',
        level: 'HND1',
        cgpa: '3.45',
        gpa: '4.5',
      },
      {
        session: '2019/2020',
        semester: '2nd Semester',
        level: 'HND1',
        cgpa: '3.45',
        gpa: '4.5',
      },
      {
        session: '2019/2020',
        semester: '1ST Semester',
        level: 'HND2',
        cgpa: '3.45',
        gpa: '4.5',
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
        <Text style={styles.title}>My result</Text>
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
                    <Text style={styles.tableText}>{item.session}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tableText}>{item.semester}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tableText}>{item.level}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tableText}>{item.cgpa}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.tableText}>{item.gpa}</Text>
                    <Icon
                      name="printer"
                      style={{
                        color: '#00ab4a',
                        marginLeft: 20,
                      }}
                      size={20}
                    />
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </ScrollView>
        </DataTable>
      </View>
    </ScrollContainer>
  );
};

export default withTheme(Result);

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
