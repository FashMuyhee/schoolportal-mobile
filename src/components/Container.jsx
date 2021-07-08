import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';

const Container = ({children, style, pad = true}) => {
  const myStyle = [
    styles.container,
    style,
    {paddingHorizontal: pad ? '7%' : 0},
  ];

  return <View style={myStyle}>{children}</View>;
};

Container.propType = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
  pad: PropTypes.bool,
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
