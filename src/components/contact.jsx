import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Contact() {
  const bg = useColorModeValue("gray.100", "gray.800");
  const text = useColorModeValue("gray.700", "gray.300");
  const accent = useColorModeValue("blue.600", "blue.300");

  return (
    <MotionBox
      id="contact"
      py={16}
      px={4}
      bg={bg}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <VStack spacing={6} maxW="3xl" mx="auto" textAlign="center">
        <Heading size="2xl">Get in Touch</Heading>
        <Text fontSize="lg" color={text}>
          Want to collaborate, have a question, or just say hi? Feel free to reach out through any of the methods below.
        </Text>

        <VStack spacing={4} fontSize="md" color={text}>
          <Text>
            📧 Email:{" "}
            <Link href="mailto:your.email@example.com" color={accent} isExternal>
              your.email@example.com
            </Link>
          </Text>

          <Text>
            🐦 Twitter:{" "}
            <Link href="https://twitter.com/yourhandle" color={accent} isExternal>
              @yourhandle
            </Link>
          </Text>

          <Text>
            💼 LinkedIn:{" "}
            <Link href="https://linkedin.com/in/yourprofile" color={accent} isExternal>
              yourprofile
            </Link>
          </Text>
        </VStack>
      </VStack>
    </MotionBox>
  );
}
