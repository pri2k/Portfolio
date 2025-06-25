import React from 'react';
import { Box, Container, Typography, Stack, Card, Link } from '@mui/material';
import { motion } from 'framer-motion'; // Needed for hover animation


const experiences = [
  {
    title: "AI Engineer Intern",
    dates: "May 2025 – June 2025",
    organization: "Stay Often",
    url: "https://www.often.com",
    description: `• Built lightweight CRM automation for 50+ travel bookings using Python, REST APIs, and Google Sheets/Gmail APIs to generate and schedule LLM-based emails.
• Scraped and structured 1000+ flight listings from Google Flights using SerpAPI and Puppeteer for automated supplier matching.
• Developed a real-time research assistant using Deerflow to process and log user queries dynamically.
• Built a Chrome extension using Manus AI that auto-filled 25-field visa forms, cutting manual input time by 80%.`,
  },
  {
    title: "Research Intern under Dr. Anjali",
    dates: "Mar 2025 – Present",
    organization: "ABV-IIITM Gwalior",
    url: "https://iiitm.ac.in",
    description: `• Benchmarked a parallel corpus for English–Nagamese translation using M2M-100, NLLB-200, and MBART-50 models from Hugging Face.
• Computed BLEU scores to evaluate translation quality and analyzed comparative model performance.
• Co-authoring a research paper on low-resource language translation using PyTorch, TensorFlow, and Keras.`,
  },
  
  
  {
    title: "Mentee",
    dates: "Nov 2023 – Present",
    organization: "Codess.Cafe",
    url: "https://www.codess.cafe",
    description: `• Mentored under experienced developers to enhance full-stack development skills and software engineering principles.
• Actively participated in code reviews, peer discussions, and collaborative open-source projects.`,
  },
  {
    title: "Actor / Musician / Script Writer",
    dates: "Aug 2023 – Present",
    organization: "Manchtantra, IIITM",
    url: "https://www.iiitm.ac.in",
    description: `• Wrote and performed original stage plays, musical compositions, and skits for college-wide cultural festivals.
• Co-directed student productions, contributing to script development, stage design, and performance execution.`,
  },

  {
    title: "Mentee – Code; Without Barriers",
    dates: "Feb 2024 – Jun 2024",
    organization: "Microsoft Asia-Pacific",
    url: "https://www.microsoft.com/en-us/diversity/programs/code-without-barriers",
    description: `• Selected for Microsoft’s highly competitive 5-month diversity-focused mentorship program aimed at empowering women and non-binary individuals in tech across Asia-Pacific.
• Received personal mentorship from experienced Microsoft engineers and product leaders in AI, software engineering, and cloud technologies.
• Participated in exclusive technical sessions, hands-on labs, and career development workshops focused on inclusive innovation and industry readiness.
• Collaborated with a cohort of talented mentees on real-world projects and learned best practices in professional communication and development workflows.`,
  },
  
  {
    title: "Freelance Web Developer",
    dates: "Jun 2023 – Aug 2023",
    organization: "Independent Project",
    url: "https://aws.amazon.com",
    description: `• Collaborated with another freelancer to design and deploy a customized website for a prestigious educational institution’s staff.
• Optimized enquiry and admission processes, reducing processing time by 70%.
• Integrated data linkage strategies and report generation, improving operational efficiency by 85%.`,
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        bgcolor: "transparent",
        // More padding on larger screens to push down from navbar
        pt: { xs: 8, sm: 10, md: 14 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="md">
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
            Experience
          </Typography>
        </Box>

        <Stack spacing={4}>
          {experiences.map((exp, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                mass: 1
              }}
            >
              <Card
                sx={{
                  bgcolor: "rgba(100, 0, 0, 0.08)", 
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  p: { xs: 2, md: 3 },
                  borderRadius: 3,
                  transition: 'transform 0.3s ease-in-out',
                }}
                elevation={0}
              >
                <Typography variant="subtitle1" gutterBottom>
                  <strong>{exp.title}</strong> ({exp.dates}) •{" "}
                  <Link
                    href={exp.url}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    color="primary"
                  >
                    {exp.organization}
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    whiteSpace: 'pre-line',
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  {exp.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Experience;