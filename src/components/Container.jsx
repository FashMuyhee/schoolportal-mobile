import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';

const Container = ({children, style}) => {
  const myStyle = {...styles.container, ...style};

  return <View style={myStyle}>{children}</View>;
};

Container.prototype = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: '7%',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  shapeBg: {
    height: '80%',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 30,
  },
});
