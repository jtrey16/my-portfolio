import { Box, Heading, SimpleGrid, Tag } from "@chakra-ui/react";

const skills = [
  "React", "Vite", "Chakra UI", "Tailwind CSS", "Framer Motion",
  "Node.js", "Express", "Python", "Git", "REST APIs"
];

export default function Skills() {
  return (
    <Box id="skills" py={20} px={6} bg="gray.800" color="white">
      <Heading textAlign="center" mb={10}>Skills</Heading>
      <SimpleGrid columns={[2, 3, 5]} spacing={4} justifyItems="center">
        {skills.map(skill => (
          <Tag size="lg" key={skill} variant="solid" colorScheme="teal">
            {skill}
          </Tag>
        ))}
      </SimpleGrid>
    </Box>
  );
}