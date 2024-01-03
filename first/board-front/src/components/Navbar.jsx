import React, { useState } from 'react';
import styled from 'styled-components';

import { AppBar, Box, InputBase, Toolbar, Typography, Badge, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EmailIcon from '@mui/icons-material/Email';
import Person4Icon from '@mui/icons-material/Person4';
import SearchIcon from '@mui/icons-material/Search';




const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});


const Search = styled.div`
  background-color:transparent;
  border-bottom:1px solid rgba(255, 255, 255, 0.12);
  padding:0 10px;
  // width:40%;
`;

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center"
}));


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  // const [navOpen, setNavOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}> Logo </Typography>
        <DarkModeIcon sx={{ display: { xs: 'block', sm: 'none' } }} />


        <Search>
          <InputBase placeholder='search' />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <EmailIcon />
          </Badge>

          <Badge badgeContent={4} color="error" onClick={(e) => setMenuOpen(true)} >
            <Person4Icon />
          </Badge>

        </Icons>


      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"

        open={menuOpen}
        onClick={(e) => setMenuOpen(!menuOpen)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar