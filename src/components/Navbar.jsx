import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(100, 65, 65, 0.4)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: { xs: 70, md: 80 },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Priya Keshri
        </Typography>

        <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ fontWeight: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/about"
            sx={{ fontWeight: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}
          >
            About
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/experience"
            sx={{ fontWeight: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}
          >
            Experience
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
