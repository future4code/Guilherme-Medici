import React, {useState} from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';
import Routes from './routes/Routes'
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';



const App = () => {

  const token = localStorage.getItem("token")

  const [headerButtonText, setHeaderButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header headerButtonText={headerButtonText} setHeaderButtonText={setHeaderButtonText} />
      <Routes setHeaderButtonText={setHeaderButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
