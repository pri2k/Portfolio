import React from 'react';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 } }}>
        {/* Section Heading */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: 1,
            mb: 4,
            borderBottom: "2px solid rgba(255,255,255,0.1)",
            pb: 1,
            width: "fit-content",
          }}
        >
          About Me
        </Typography>

        {/* Grid Layout: Image + Text */}
        <Grid container spacing={4} alignItems="center">
          {/* Left - Circular Image */}
          <Grid item xs={12} md={4}>
            <Avatar
              src="priya.png"
              alt="Priya Keshri"
              sx={{
                width: { xs: 150, md: 200 },
                height: { xs: 150, md: 200 },
                border: "3px solid rgba(255,255,255,0.2)",
                mx: "auto",
              }}
            />
          </Grid>

          {/* Right - Description */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              sx={{ color: "gray.300", lineHeight: 1.9, fontSize: "1.05rem" }}
            >
              I began my tech journey with web development, bringing ideas to life through responsive, user-friendly websites. Over time, my curiosity led me deeper into Machine Learning, where I now explore NLP, build intelligent systems, and write research papers to push the field forward.
              <br /><br />
              Today, I'm a full-stack web developer, student researcher, and competitive programmer. I can build end-to-end products, train models, automate tedious workflows, and create conversational AI that actually works.
              <br /><br />
              Whether you're working on research, building something cool, or just need someone who gets both front-end finesse and ML depth — feel free to connect!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
