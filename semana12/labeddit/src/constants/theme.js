import { createTheme } from '@material-ui/core/styles';
import {primaryColor, neutralColor} from './colors'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: neutralColor,
    },
    text: {
        primary: neutralColor
    }
  }
})

export default theme