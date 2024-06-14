import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="success">
    <Toolbar>
      <Typography variant="h5" position="mid">
        Wyszukiwarka przepisów
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
