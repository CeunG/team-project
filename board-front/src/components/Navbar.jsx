import React, { useState } from 'react';
import styled from 'styled-components';

import { AppBar, Box, InputBase, Toolbar, Badge, Menu, MenuItem, IconButton, Button } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchIcon from '@mui/icons-material/Search';



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledSearch = styled.div`
  background-color:#151515;
  padding:4px 22px;
  border-radius:60px;
`;

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "32px",
  alignItems: "center"
}));



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid #232227", padding: "6px 0" }}>
      <StyledToolbar>


        <Button variant="contained" color="primary" sx={{ borderRadius: '14px', fontWeight: 700, padding: '10px 0', textTransform: 'capitalize' }} disableElevation >
          Aja
        </Button>


        <StyledSearch>
          <InputBase placeholder='search' />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </StyledSearch>

        <Icons>
          <Badge badgeContent={4} size="small" color="error">
            <NotificationsNoneIcon />
          </Badge>

          <Badge badgeContent={4} color="error" onClick={(e) => setMenuOpen(true)} >
            <Person2OutlinedIcon />
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