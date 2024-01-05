import React from 'react';
import styled from 'styled-components';
import { Box, Avatar, AvatarGroup, Typography, Stack, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Link, Button, TextField, Divider, Fab, Card, CardActions } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Calendar from './Calendar';
import GoalList from './GoalList'
import Diary from './Diary';
import PopAddDiary from './PopAddDiary';


const Main = () => {

  const StyledSearch = styled.div`
  background-color:transparent;
  // background-color: #111;
  border-radius:50px;
  padding:14px 20px;
  width:100%;
  border:1px solid #232227;
`;

  const StyledUl = styled.ul`
  list-style:none;
  overflow:hidden;
  & > li{
    float:left;
  }
`;



  const StyledBox = styled(Box)({
    border: '1px solid #232227',
    backgroundColor: '#151515',
    borderRadius: '25px',
    padding: '24px 20px',
  });


  const StyledSubTitle1 = styled(Typography)({
    display: "block",
    paddingBottom: '12px'
  })


  const StyledBoxSub = styled(Box)({
    border: '1px solid #232227',
    backgroundColor: '#151515',
    borderRadius: '25px'
  })


  //메이트 리스트 예시
  const newMateList = [
    {
      pic: <ImageIcon />,
      name: "Nickname",
      startDate: '12월1일~'
    },
    {
      pic: <ImageIcon />,
      name: "Nickname",
      startDate: '12월1일~'
    },
    {
      pic: <ImageIcon />,
      name: "Nickname",
      startDate: '12월1일~'
    },
    {
      pic: <ImageIcon />,
      name: "Nickname",
      startDate: '12월1일~'
    },
    {
      pic: <ImageIcon />,
      name: "Nickname",
      startDate: '12월1일~'
    },
    {
      pic: <ImageIcon />,
      name: "Nickname",
      startDate: '12월1일~'
    },
    {
      pic: <ImageIcon />,
      name: "Nickname",
      startDate: '12월1일~'
    },
    {
      pic: <ImageIcon />,
      name: "Nickname",
      startDate: '12월1일~'
    },
    {
      pic: <ImageIcon />,
      name: "Nickname",
      startDate: '12월1일~'
    }
  ]


  return (

    <Box p={2} width={'100%'} >

      <Typography pt={2} pl={3} variant='h4'>Mates</Typography>

      <Box p={2} display='grid' gridTemplateColumns='repeat(2, 1fr)' gridTemplateRows='repeat(2, auto)' gap={3} >

        <StyledBox gridColumn='1' gridRow='1' sx={{}}>

          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={4}
          >


            <Box p={2} sx={{}}>

              <StyledSubTitle1 variant='h6' style={{}}>내 메이트들</StyledSubTitle1>

              <AvatarGroup total={10} spacing='medium' sx={{ float: 'left' }}>
                <Avatar sx={{ width: '56px', height: '56px' }} alt="Remy Sharp" src="http://material-ui.com/static/images/avatar/1.jpg" />
                <Avatar sx={{ width: '56px', height: '56px' }} alt="Travis Howard" src="http://material-ui.com/static/images/avatar/2.jpg" />
                <Avatar sx={{ width: '56px', height: '56px' }} alt="Agnes Walker" src="http://material-ui.com/static/images/avatar/4.jpg" />
                <Avatar sx={{ width: '56px', height: '56px' }} alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/5.jpg" />
              </AvatarGroup>


              <Button size='small' variant='outlined' sx={{ borderRadius: '50px', textTransform: 'capitalize', float: 'right', }}>Add Mate</Button>
            </Box>


            {/* <Divider /> */}


            <Box p={2} sx={{}}>
              <StyledSubTitle1 variant='h6'>Search</StyledSubTitle1>
              <StyledSearch>
                <InputBase placeholder='search' />
                <Button size='small' variant='outlined' sx={{ borderRadius: '50px', textTransform: 'capitalize', float: 'right', }}>Enter</Button>
              </StyledSearch>
            </Box>


            <Box p={2} sx={{}}>
              <StyledSubTitle1 variant='h6' style={{}}>추천 메이트</StyledSubTitle1>

              <List>
                {newMateList.map((mate, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>{mate.pic}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={mate.name} secondary={mate.startDate} />
                    <StyledUl>
                      <li><Link href="#" variant="caption">#diet</Link></li>
                      <li><Link href="#" variant="caption">#subject</Link></li>
                      <li><Link href="#" variant="caption">#subject</Link></li>
                      <li><Link href="#" variant="caption">#subject</Link></li>
                    </StyledUl>
                    <Button size="small" variant='contained' sx={{ borderRadius: '50px', textTransform: 'capitalize' }}>Follow</Button>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
        </StyledBox>




        <StyledBox gridColumn='2' gridRow='1'>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={4}
          >

            <Box p={2} sx={{ backgroundColor: 'primary.main', borderRadius: '15px' }}>
              <StyledSubTitle1 variant='h6'>나의 기록</StyledSubTitle1>
              <Typography variant='body1'>목표 설정하고 기록하기</Typography>
              <ul>
                <li>올린 피드<span>1개</span></li>
                <li>나의 목표 지금까지<span>6개</span></li>
              </ul>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </Box>



            <Box p={2} sx={{}}>
              calendar
              <Calendar />
            </Box>


            <Box p={2} sx={{}}>
              <StyledSubTitle1 variant='h6'>목표</StyledSubTitle1>
              <div>셀렉트 컴포넌트 넣기</div>
              <GoalList />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton variant="outlined" aria-label="add goal">
                  <AddOutlinedIcon />
                </IconButton>

                <TextField id="standard-basic" label="goal" variant="standard" />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Button size="small" variant='contained' sx={{ borderRadius: '50px', textTransform: 'capitalize' }}>Enter</Button>
              </Box>
            </Box>



            <Box p={2} sx={{}}>
              <StyledSubTitle1 variant='h6'>기록</StyledSubTitle1>
              <div>셀렉트 컴포넌트 넣기</div>
              <GoalList />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton variant="outlined" aria-label="add goal">
                  <AddOutlinedIcon />
                </IconButton>

                <TextField id="standard-basic" label="goal" variant="standard" />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Button size="small" variant='contained' sx={{ borderRadius: '50px', textTransform: 'capitalize' }}>Enter</Button>
              </Box>
            </Box>

          </Stack>
        </StyledBox>



        <StyledBox component='div' gridRow='2' gridColumn='span 2' sx={{ overflow: 'auto', position: 'relative' }}>
          <StyledSubTitle1 variant='h6'>일기 소소한 이야기</StyledSubTitle1>

          <Diary />
          <PopAddDiary sx={{ position: 'absolute', left: 0, top: 0 }} />
        </StyledBox>
      </Box>


    </Box >
  )
}

export default Main;