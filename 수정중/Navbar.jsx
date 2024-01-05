import React, { useState } from 'react';
import styled from 'styled-components';

import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EmailIcon from '@mui/icons-material/Email';
import Person4Icon from '@mui/icons-material/Person4';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled.div`
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0 10px;
  // width:40%;
`;

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
}));

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailMenuOpen, setEmailMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openEmailMenu = (event) => {
    setEmailMenuOpen(event.currentTarget);
  };

  const closeEmailMenu = () => {
    setEmailMenuOpen(null);
  };



  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {' '}
          Logo{' '}
        </Typography>
        <DarkModeIcon sx={{ display: { xs: 'block', sm: 'none' } }} />

        <Search>
          <InputBase placeholder="search" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error" onClick={openEmailMenu}>
            <EmailIcon />
          </Badge>

          <Badge badgeContent={4} color="error" onClick={toggleMenu}>
            <Person4Icon />
          </Badge>
        </Icons>

        <Menu
          id="email-menu"
          open={Boolean(emailMenuOpen)}
          onClose={closeEmailMenu}
          anchorEl={emailMenuOpen}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>
            <Typography>user3이 좋아요를 눌렀어요</Typography>
            <IconButton color="primary" edge="end"  >
              <CheckCircleIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <Typography>user7이 댓글을 달았어요</Typography>
            <IconButton color="primary" edge="end" >
              <CheckCircleIcon />
            </IconButton>
          </MenuItem>
        </Menu>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={menuOpen}
          onClose={toggleMenu}
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
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
