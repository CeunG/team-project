import React from 'react';
import styled from 'styled-components';
import { Box, Avatar, AvatarGroup, Typography, Stack, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Link, Button, TextField, Divider, Card, CardActions } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Calendar from './Calendar';
import GoalList from './GoalList'
import Diary from './Diary';
import PopAddDiary from './PopAddDiary';


const Main = () => {

  const Search = styled.div`
  background-color:transparent;
  border-bottom:1px solid rgba(255, 255, 255, 0.12);
  padding:0 10px;
  width:100%;
`;

  const StyledUl = styled.ul`
  list-style:none;
  overflow:hidden;
  & > li{
    float:left;
  }
`;

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
    <Box flex={6} p={2}>
      <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gridTemplateRows='repeat(2, auto)' gap={2}>

        <Box gridColumn='1' gridRow='1' sx={{}}>
          <Typography variant='h6'>Record</Typography>
          <Typography variant='subtitle2'>Mates</Typography>

          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <Typography variant='subtitle1' style={{}}>내 메이트들</Typography>

            <div style={{}}>
              <AvatarGroup total={24} >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>


              <IconButton aria-label="delete" variant="outlined">
                <AddIcon />
              </IconButton>
            </div>

            <div style={{}}>
              <Typography variant='caption'>Search</Typography>
              <Search>
                <InputBase placeholder='search' />
                <SearchIcon />
              </Search>
            </div>

            <div style={{}}>
              <Typography variant='subtitle1' style={{}}>추천 메이트</Typography>

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
            </div>
          </Stack>


        </Box>




        <Box gridColumn='2' gridRow='1'>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
          >

            <div style={{}}>
              <Typography variant='subtitle2'>나의 기록</Typography>
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
            </div>

            <div>
              calendar
              <Calendar />
            </div>

            <div>
              <Typography variant='subtitle2'>목표</Typography>
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
            </div>

            <div>
              <Typography variant='subtitle2'>기록</Typography>
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
            </div>

          </Stack>
        </Box>



        <Box component='div' gridRow='2' gridColumn='span 2' sx={{ overflow: 'auto', position: 'relative' }}>
          <Typography variant='subtitle2'>일기 소소한 이야기</Typography>

          <Diary />
          <PopAddDiary sx={{ position: 'absolute', left: 0, top: 0 }} />
        </Box>
      </Box>


    </Box >
  )
}

export default Main;