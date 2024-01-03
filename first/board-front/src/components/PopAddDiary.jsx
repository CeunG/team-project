import React, { useState } from 'react';
import { Tooltip, Fab, Modal, Box, Typography, Avatar, TextField, ButtonGroup, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components';

const StyleModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const BoxInput = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '14px'
});

const PopAddDiary = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <Tooltip title="일기 작성하기" onClick={() => setOpen(!open)}>
        <Fab color="primary" aria-label="add">
          <EditIcon />
        </Fab>
      </Tooltip>


      <StyleModal
        open={open}
        onClick={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={400} p={3} borderRadius={1} bgcolor={'background.default'} color={'text.primary'}>
          <Typography variant='h5' textAlign='center'>My Diary</Typography>
          <Typography variant='subtitle1' textAlign='center' m={2}>남기고 싶은 이야기를 자유롭게 작성해주세요 (일상, 운동, 건강, 목표)</Typography>

          <BoxInput>
            <Avatar src='' sx={{ width: 28, height: 28 }} />
            <Typography variant='p'>my Name</Typography>
            <TextField
              id="standard-multiline-static"
              multiline
              rows={2}
              placeholder="오늘 남길 이야기는 무엇인가요?"
              variant="standard"
              sx={{ width: '100%' }}
            />
            <ButtonGroup fullWidth variant="contained" aria-label="입력 primary button group">
              <Button>Enter</Button>
              <Button>Close</Button>
            </ButtonGroup>
          </BoxInput>

        </Box>
      </StyleModal>
    </>
  )
}

export default PopAddDiary;