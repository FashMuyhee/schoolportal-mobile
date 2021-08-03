import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

const ScrollContainer = ({children, style}) => {
  const myStyle = {...styles.container, ...style};

  return (
    <ScrollView style={myStyle} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

ScrollContainer.propType = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default ScrollContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
  },
});
