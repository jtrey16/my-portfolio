import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function About() {
  return (
    <MotionBox
      id="about"
      px={6}
      py={20}
      bg="gray.100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Heading mb={4}>About Me</Heading>
      <Text fontSize="lg" maxW="600px">
        I’m a passionate web developer focused on building responsive and modern UIs using React, Chakra UI, and Framer Motion. I'm expanding my skills in backend and automation while delivering sleek, user-friendly frontend experiences.
      </Text>
    </MotionBox>
  );
}
