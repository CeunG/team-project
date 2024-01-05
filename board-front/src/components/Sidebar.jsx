import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Slide, IconButton, Avatar, Divider, Typography, Button, Fade, Grow } from '@mui/material';
import RoofingIcon from '@mui/icons-material/Roofing';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FaceIcon from '@mui/icons-material/Face';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Sidebar = ({ setModechange, mode }) => {

  const [navOpen, setNavOpen] = useState(false);


  const StyledListItemText = styled(ListItemText)({
    color: '#9e9e9e',
    position: 'absolute',
    left: navOpen ? '72px' : '-200px',
    visibility: navOpen ? 'visible' : 'hidden',
    opacity: navOpen ? '1' : '0',
  })


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

    <Box p={2} sx={{
      width: navOpen ? '300px' : '120px',
      transition: 'all 0.3s'
    }}>


      <Button fullWidth sx={{ marginTop: '16px' }} onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
      </Button>


      <Box textAlign={'center'} sx={{ padding: '24px 0' }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant='outlined' sx={{ margin: '0 auto' }} />
        <Typography variant='OVERLINE' sx={{ display: 'block', margin: '12px 0' }}>Hello123</Typography>
      </Box>

      <Divider />

      <Box>
        <List>
          {categoryItem.map((cate, index) => (
            <ListItem disablePadding sx={{ margin: '16px 0' }}>
              <ListItemButton LinkComponent="a" href={cate.path} key={index} sx={{ position: 'relative' }}>


                <ListItemIcon sx={{ color: '#9e9e9e' }}><div style={{ margin: '0 auto' }}>{cate.icon}</div></ListItemIcon>

                <StyledListItemText sx={{}}>
                  <Fade
                    direction="right"
                    in={navOpen}
                    {...(navOpen ? { timeout: 500 } : {})}
                  >
                    <div>{cate.name}</div>
                  </Fade>
                </StyledListItemText>


              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>


    </Box >

  )
}

export default Sidebar