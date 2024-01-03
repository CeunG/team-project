import React from 'react';
import { Box, } from '@mui/material';
import DiaryList from './DiaryList'


const Diary = () => {
  return (
    <Box display='flex'>

      <DiaryList />
      <DiaryList />

    </Box>
  )
}

export default Diary;