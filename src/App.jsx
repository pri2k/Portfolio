import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './pages/Experience'; 
import TechStack from './components/TechStack';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Container maxWidth="false" disableGutters sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
              <Hero />
              <TechStack />
              <Contact />
            </Container>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;