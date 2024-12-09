import { createTheme, ThemeOptions } from '@mui/material/styles';
import palette from './palette';
import { typography } from './typography';


  const theme: ThemeOptions = createTheme({
  palette,
  typography
});

export default theme;