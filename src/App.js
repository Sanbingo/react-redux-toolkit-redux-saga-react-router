import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { Counter } from './features/counter/Counter';
import Home from './pages/home'
import About from './pages/about'
import NoMatch from './pages/404'
import './App.css';



function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('hello')}
          <Counter />
        </Typography>
        <div>
          <button onClick={() => changeLanguage("zh-cn")}>中文</button>
          <button onClick={() => changeLanguage("en")}>English</button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
