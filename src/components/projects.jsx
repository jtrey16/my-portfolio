import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Link,
  Image,
  VStack,
  HStack
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Crypto Volatility Scanner",
    description: "A real-time bot for Hyperliquid that scans all coins for volatility breakouts and sends alerts.",
    image: "/images/project1.png", // Add your own image paths
    link: "https://github.com/yourusername/volatility-scanner"
  },
  {
    title: "Portfolio Website",
    description: "My personal website built with Vite, React, Chakra UI, and Framer Motion for smooth UI animations.",
    image: "/images/project2.png",
    link: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Trailing Stop Bot",
    description: "A Python bot for trailing stop-loss orders using Hyperliquid’s API and WebSockets.",
    image: "/images/project3.png",
    link: "https://github.com/yourusername/trailing-bot"
  }
];

export default function Projects() {
  return (
    <Box id="projects" py={20} px={6} bg="gray.900" color="white">
      <Heading textAlign="center" mb={10}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={8} maxW="7xl" mx="auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <VStack
              align="start"
              bg="gray.800"
              p={5}
              rounded="2xl"
              shadow="lg"
              spacing={4}
            >
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="lg"
                objectFit="cover"
              />
              <Heading size="md">{project.title}</Heading>
              <Text>{project.description}</Text>
              <HStack>
                <Link href={project.link} color="teal.300" isExternal>
                  View Code →
                </Link>
              </HStack>
            </VStack>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
}
