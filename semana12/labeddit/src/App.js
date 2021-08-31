import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';
import Routes from './routes/Routes'



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
