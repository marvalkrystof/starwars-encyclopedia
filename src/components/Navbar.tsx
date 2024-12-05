import { AppBar, Box, Toolbar } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar : React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'primary.main'}}>
         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          <Typography href="/" variant="h4" component="a" sx={{ textDecoration: 'none', color: 'inherit'}}>
            Star Wars Encyclopedia
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
          <Button href='/people' color="inherit">People</Button>
          <Button href='/films' color="inherit">Films</Button>
          <Button href='/planets' color="inherit">Planets</Button>
          <Button href='/species' color="inherit">Species</Button>
          <Button href='/starships' color="inherit">Starships</Button>
          <Button href='/vehicles' color="inherit">Vehicles</Button>
          </Box>
          <Box sx={{ width: '10%' }} />
        </Toolbar>
      </AppBar>
);
  }



export default Navbar;