import React from 'react';
import {StatusBar} from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import RootNavigator from './src/navigator';
import {Welcome} from './src/screens'

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Raleway-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Raleway-Bold',
      fontWeight: '400',
    },
  },
};

const theme = {
  colors: {
    ...DefaultTheme.colors,
    primary: '#00AB4A',
    white: 'white',
  },
  fonts: configureFonts(fontConfig),
  roundness: 10,
  animation: {
    scale: 1.0,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />
      <RootNavigator />
    </PaperProvider>
  );
}
