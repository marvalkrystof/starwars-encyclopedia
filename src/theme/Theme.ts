import { createTheme, ThemeOptions } from '@mui/material/styles';
import palette from './Palette';
import { typography } from './Typography';


  const theme: ThemeOptions = createTheme({
  palette,
  typography
});

export default theme;