import { extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway';
import { Component } from 'react';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3C00",
      50: "#ffffff",
    },
  },
  fonts: {
    heading:'helvetica', 
    body: "Open Sans, sans-serif",
  },
  styles: {
    global:{
      body: {
        bg: "#FFFFFF",
      },
    },
  },
  Components:{
    Button:{
      bg:'#FFFFFFF'
    }
  }
});

export default theme;
