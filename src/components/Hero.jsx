// Hero.jsx
import { useState, useEffect } from 'react';
import { Container, Typography, Box, Stack, IconButton } from '@mui/material';


const roles = [
  { text: 'Web Developer', color: '#D81B60' },
  { text: 'Musician', color: '#D81B60' },
  { text: 'Student Researcher', color: '#D81B60' },
  { text: 'Writer', color: '#D81B60' },
  { text: 'Competitive Programmer', color: '#D81B60' },
];


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentIndex];

  return (
    <Box
      sx={{
        backgroundImage: 'url("low-poly-grid-haikei.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Hi! I'm Priya
        </Typography>
         <Typography variant="h4" gutterBottom>
          I am a student at IIITM Gwalior
        </Typography>
        <Typography variant="h4" gutterBottom>
          and a{' '}
          <span style={{ color: currentRole.color, fontWeight: 'bold' }}>
            {currentRole.text}
          </span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
