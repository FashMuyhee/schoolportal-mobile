import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

const Table = ({children, style}) => {
  const tableWrapper = {...styles.tableContainer, ...style};
  return <ScrollView style={tableWrapper}>{children}</ScrollView>;
};

Table.propType = {
  children: PropTypes.element.isRequired,
};

const THead = ({children}) => {
  return <View style={styles.tableHead}>{children}</View>;
};

const TBody = ({children}) => {
  return <View style={styles.tableBody}>{children}</View>;
};

const TRow = ({children}) => {
  return <View style={styles.tableRow}>{children}</View>;
};

const TCell = ({children}) => {
  return <View style={styles.tableCell}>{children}</View>;
};

export {Table, THead, TBody, TRow, TCell};

const styles = StyleSheet.create({
  tableContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
    borderColor: '#00ab4a',
    borderWidth: 1,
    overflow: 'scroll',
    marginTop: 20,
  },
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tableBody: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    borderBottomColor: '#00ab4a',
    borderBottomWidth: 1,
    width: '100%',
  },
  tableCell: {
    // marginRight: 30,
    // width: 100,
  },
});
