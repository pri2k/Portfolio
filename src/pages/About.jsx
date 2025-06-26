import React from 'react';
import { Container, Typography, Box, Avatar, Card } from '@mui/material';

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
      <Container maxWidth="xxl" 
        sx={{
              // bgcolor: "red",
              pt: { xs: 10, sm: 12, md: 15, lg: 12, xl: 10 },
              pb: { xs: 10, md: 15 },
            }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
        </Box>


        <Box
          sx={{
            px: { xs: 2, sm: 4, md: 6 }, // horizontal padding
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Left - Image */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src={`${process.env.PUBLIC_URL}/priya.png`}
              alt="Priya Keshri"
              sx={{
                width: { xs: 220, md: 300, lg: 340 },
                height: { xs: 220, md: 300, lg: 340 },
                border: "4px solid rgba(255,255,255,0.3)",
              }}
            />

          </Box>

          {/* Right - Text Card */}
          <Card
            sx={{
              flex: 1,
              bgcolor: "rgba(100, 0, 0, 0.08)",
              backdropFilter: "blur(2px)",
              p: { xs: 2, md: 4 },
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "gray.300",
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              I began my tech journey with web development, bringing ideas to life through responsive, user-friendly websites. Over time, my curiosity led me deeper into Machine Learning, where I now explore NLP, build intelligent systems, and write research papers to push the field forward.
              <br /><br />
              Today, I'm a full-stack web developer, student researcher, and competitive programmer. I can build end-to-end products, train models, automate tedious workflows, and create conversational AI that actually works.
              <br /><br />
              Whether you're working on research, building something cool, or just need someone who gets both front-end finesse and ML depth — feel free to connect!
            </Typography>
          </Card>
        </Box>

      </Container>
    </Box>
  );
};

export default About;
