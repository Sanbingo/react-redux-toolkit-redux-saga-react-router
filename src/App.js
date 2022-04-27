import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Counter } from './features/counter/Counter';
import Home from './pages/home'
import About from './pages/about'
import './App.css';

function App() {
  return (
    <Container maxWidth="sm">
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App example
        <Counter />
      </Typography>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
      </Routes>
    </Box>
  </Container>
  );
}

export default App;
