import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, IconButton, Avatar, Divider, Typography } from '@mui/material'
import RoofingIcon from '@mui/icons-material/Roofing';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FaceIcon from '@mui/icons-material/Face';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

const Sidebar = ({ setModechange, mode }) => {

  const [navOpen, setNavOpen] = useState(true);

  const NavBtn = styled.div`
  text-align:left;
  `;



  const categoryItem = [
    {
      path: "/",
      name: 'Home',
      icon: <RoofingIcon />
    },
    {
      path: "/record",
      name: '기록',
      icon: <EditCalendarIcon />
    },
    {
      path: "/chatboat",
      name: '챗봇',
      icon: <SmartToyIcon />
    },
    {
      path: "/map",
      name: '지도',
      icon: <FmdGoodIcon />
    },
    {
      path: "/mypage",
      name: '마이페이지',
      icon: <FaceIcon />
    }
  ]


  return (
    // <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
    <Box p={2} sx={{ transition: 'all 0.3s', display: { xs: 'none', sm: 'block' }, width: navOpen ? '250px' : '110px', borderRight: '1px solid rgba(255, 255, 255, 0.12)' }} >

      <Box sx={{ width: navOpen ? '250px' : '110px', position: 'fixed', left: 0 }} >

        <NavBtn>
          <IconButton aria-label='category open' onClick={() => setNavOpen(!navOpen)}>
            <MenuIcon />
          </IconButton>
        </NavBtn>


        <Box textAlign={'center'} sx={{ padding: '24px 0' }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ margin: '0 auto', marginBottom: '10px' }} />
          <Typography variant='body2'>My NickName</Typography>
        </Box>

        <Divider light />

        <List>
          {categoryItem.map((cate, index) => (
            <ListItem disablePadding sx={{ margin: '12px 0' }}>
              <ListItemButton LinkComponent="a" href={cate.path} key={index}>

                <ListItemIcon sx={{ paddingLeft: navOpen ? 'auto' : 'calc(50% - 16px)' }}>{cate.icon}</ListItemIcon>

                <ListItemText sx={{ display: navOpen ? 'block' : 'none' }}>{cate.name}</ListItemText>

              </ListItemButton>
            </ListItem>
          ))}


          <Divider light />

          <div style={{ textAlign: 'right' }}>
            {/* <Brightness4OutlinedIcon fontSize='small' /> */}
            <Typography variant='caption'>mode</Typography>
            <Switch onChange={() => setModechange(mode === 'dark' ? 'light' : 'dark')} />
          </div>
        </List>


      </Box>


    </Box >
  )
}

export default Sidebar