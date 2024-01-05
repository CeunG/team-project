import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { Box, Stack, ThemeProvider, createTheme, Divider } from '@mui/material'
import Navbar from './components/Navbar';
import Globalstyles from './components/GlobalStyles';
import { teal, red, grey } from '@mui/material/colors';


function App() {

  const [mode, setMode] = useState('dark');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      background: {
        paper: '#232227',
      },
      customRed: {
        main: red[700]
      },
      customGreen: {
        main: teal[500]
      },
      customBorder: {
        main: grey[800]
      },
    },
  });



  return (
    <ThemeProvider theme={darkTheme}>
      <Globalstyles />
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />

        <Stack direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={0}>

          <Sidebar setModechange={setMode} mode={mode} />
          <Main />

        </Stack>

      </Box>
    </ThemeProvider>
  );
}

export default App;
