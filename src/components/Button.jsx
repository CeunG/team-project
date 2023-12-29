import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';

import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import EditIcon from '@mui/icons-material/Edit';
//logo용으로 그냥 해봄
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';



//설치해야할 npm
// 1. npm install @mui/material @emotion/react @emotion/styled
// 2.npm install @mui/material @mui/styled-engine-sc styled-components
// 위 두개 관련 정보 https://mui.com/material-ui/getting-started/installation/

// 3.npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
// 아이콘 관련 정보 https://mui.com/material-ui/material-icons/

// 캘린더 컴포넌트 사용시 캘린더도 npm 추가 설치 필요
//설치해야할 npm 끝



const theme = createTheme({
  palette: {
    primary: {
      main: "#5FAA8F",
      light: "#8ED5BB",
      dark: "#1A7756",
      contrastText: "#fff",
    },
    secondary: {
      dark: "#B72D26",
      main: "#de4d4d",
      light: "#ffffff",
    },
    accent: {
      main: "#232227",
    }
  },
});


function UsingColorObject() {
  return (
    <ThemeProvider theme={theme}>

      <Box component='div' sx={{ bgcolor: 'pink', width: '400px', p: 6 }}>
        {/* //Header.jsx */}
        {/* //로고(그냥 해봄) */}
        <IconButton aria-label="logo" color="primary">
          <TravelExploreOutlinedIcon />
        </IconButton>

        {/* //검색 버튼 */}
        <IconButton aria-label="search" disabled color="primary">
          <SearchOutlinedIcon className='icon-search' />
        </IconButton>

        {/* //알림 */}
        <Button variant="text" endIcon={<NotificationsActiveOutlinedIcon />} href="#">
          notice
        </Button>

        {/* //마이페이지 */}
        <Button variant="text" endIcon={<InsertEmoticonOutlinedIcon />} href="#" className="mypage-button">
          mypage
        </Button>

        {/* //Header.jsx 끝 */}



        {/* //Main.jsx */}
        {/* //내 메이트들 부분 add 버튼 */}
        <Fab className="btn-new-circle" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>


        {/* //검색 컴포넌트 */}
        <Paper
          component="form"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="find yout mate!"
            className="in-search-bar"
            inputProps={{ 'aria-label': 'find yout mate!' }}
          />
          <IconButton type="button" aria-label="search" className="in-search-btn" >
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        </Paper>


        {/* //팔로우 버튼 */}
        <Button className="in-follow-btn" variant="contained" size="small" sx={{ ml: 1, flex: 1, borderRadius: ' 500px', fontSize: '13px' }}>Follow</Button>


        {/* //오른쪽 섹션 상단 '달성한 목표' 통계 유도 버튼 */}
        <Button className='btn-graph-link' variant="contained" endIcon={<SettingsAccessibilityOutlinedIcon />} sx={{ backgroundColor: 'secondary.light', color: "accent.main", borderRadius: '25px' }}>
          achieved goal
        </Button>


        {/* //오른쪽 섹션 하단 리스트 삭제 버튼 */}
        <IconButton aria-label="delete" size="small" sx={{ color: "secondary.light", border: "1px solid gray" }} className="btn-delte" >
          <RemoveOutlinedIcon fontSize="inherit" />
        </IconButton>


        {/* //일기 부분 add 버튼 */}
        <Fab className="btn-plus" color="secondary.dark" aria-label="edit">
          <EditIcon />
        </Fab>


        {/* //Main.jsx 끝 */}






      </Box>

    </ThemeProvider >
  );
}

export default UsingColorObject;