import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

import {
  SiHtml5, SiCss3, SiPython, SiCplusplus, SiMysql, SiDart, SiJavascript,
  SiReact, SiNodedotjs, SiStreamlit,
  SiFlask, SiDjango, SiFastapi,
  SiFigma, SiCanva, SiBootstrap, SiMui,
  SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiPlotly, SiGit, SiDocker,
  SiAmazon, SiGooglecloud, SiGithub
} from 'react-icons/si';

import {
  FaJava, FaCloud, FaDatabase, FaTools
} from 'react-icons/fa';
import { MdCode, MdFunctions } from 'react-icons/md';

const techs = [
  { name: 'Java', icon: <FaJava color="#007396" /> },
  { name: 'Python', icon: <SiPython color="#3776ab" /> },
  { name: 'React', icon: <SiReact color="#61dafb" /> },
  { name: 'PyTorch', icon: <SiPytorch color="#EE4C2C" /> },
  { name: 'Pandas', icon: <SiPandas color="#150458" /> },
  { name: 'NumPy', icon: <SiNumpy color="#013243" /> },
  { name: 'Scikit-Learn', icon: <SiScikitlearn color="#F7931E" /> },
  { name: 'AWS', icon: <SiAmazon color="#FF9900" /> },
  { name: 'GCP', icon: <SiGooglecloud color="#4285F4" /> },
  { name: 'Google APIs', icon: <FaCloud color="#4285F4" /> },
  { name: 'SQL', icon: <SiMysql color="#00758F" /> },
  { name: 'Streamlit', icon: <SiStreamlit color="#FF4B4B" /> },
  { name: 'Django', icon: <SiDjango color="#092E20" /> },
  { name: 'Material-UI', icon: <SiMui color="#007fff" /> },
  { name: 'HTML', icon: <SiHtml5 color="#e34f26" /> },
  { name: 'CSS', icon: <SiCss3 color="#1572B6" /> },
  { name: 'GitHub', icon: <SiGithub color="#000" /> },
  
  
  { name: 'C/C++', icon: <SiCplusplus color="#00599C" /> },
  
  { name: 'Dart', icon: <SiDart color="#0175C2" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> },

  // Web / Backend Frameworks
  
  { name: 'Node.js', icon: <SiNodedotjs color="#3c873a" /> },
  
  { name: 'Flask', icon: <SiFlask color="#000000" /> },
  
  { name: 'FastAPI', icon: <SiFastapi color="#009688" /> },

  // UI/UX
  { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
  { name: 'Canva', icon: <SiCanva color="#00C4CC" /> },
  
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },

  // AI / ML / Data Science
  
  { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> },
  
  { name: 'EC2', icon: <FaCloud color="#f90" /> },
  { name: 'Plotly', icon: <SiPlotly color="#3F4F75" /> },
  { name: 'Matlab', icon: <MdFunctions color="#E2231A" /> },
  { name: 'LangGraph', icon: <MdCode color="#ccc" /> },

  // DevOps
  { name: 'Git', icon: <SiGit color="#F05032" /> },
  
  { name: 'Docker', icon: <SiDocker color="#2496ED" /> },

  // Cloud
  
  
  { name: 'Load Balancer', icon: <FaTools color="#999" /> },
  { name: 'Elastic Beanstalk', icon: <FaTools color="#999" /> },
  { name: 'S3', icon: <SiAmazon color="#FF9900" /> }, // fallback using AWS
  
];

const TechStack = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box sx={{ py: 6, position: 'relative', zIndex: 10 }}>
      {hovered && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            backdropFilter: 'blur(4px)',
            zIndex: 5,
          }}
        />
      )}

      <Typography
        variant="h4"
        gutterBottom
        fontWeight="450"
        sx={{ position: 'relative', zIndex: 10 , textAlign: 'center', mb: 4}}
      >
          Tech I have worked with
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ position: 'relative', zIndex: 10 }}>
          {techs.map((tech, index) => (
            <Grid item xs={4} sm={3} md={2} lg={1.5} key={index}>
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ textAlign: 'center' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 1.5, // ⬅️ smaller padding
                    borderRadius: '16px',
                    backgroundColor: '#FFF2F2',
                    transform: hovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Box sx={{ fontSize: 28 }}>{tech.icon}</Box> {/* ⬅️ smaller icon */}
                  <Box
                    sx={{
                      mt: 1,
                      px: 1.5,
                      py: 0.4,
                    //   backgroundColor: '#FFF0F8',
                      borderRadius: '10px',
                      color: '#000',
                      fontWeight: '500',
                      fontSize: 11, // ⬅️ smaller text
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                    }}
                  >
                    {tech.name}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default TechStack;
