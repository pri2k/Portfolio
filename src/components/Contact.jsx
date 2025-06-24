import React from 'react';
import { Container, Typography, Box, Stack, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "transparent",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 }, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ textTransform: 'uppercase', fontWeight: 600 }}>
          Contact
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          I'm always happy to connect! Feel free to reach out on any of the platforms below.
        </Typography>

        <Stack direction="row" spacing={3} justifyContent="center" mb={3}>
          <IconButton href="https://github.com/pri2k" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/priya-keshri-iiit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://x.com/JustaLilPika" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton href="mailto:Priya.keshrinis@gmail.com" aria-label="Email">
            <EmailIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
