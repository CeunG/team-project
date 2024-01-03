import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar';
import Globalstyles from './components/GlobalStyles'

function App() {

  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Globalstyles />
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Sidebar setModechange={setMode} mode={mode} />
          <Main />
        </Stack>

      </Box>
    </ThemeProvider>
  );
}

export default App;
