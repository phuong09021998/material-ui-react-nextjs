import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../component/ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
