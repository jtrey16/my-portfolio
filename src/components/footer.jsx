import { Box, Text, Stack, useColorModeValue, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Footer() {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.700", "gray.300");

  return (
    <MotionBox
      as="footer"
      bg={bg}
      py={6}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Stack direction="column" align="center" spacing={2}>
        <Text fontSize="sm" color={color}>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Text>
        <Link href="mailto:your.email@example.com" fontSize="sm" color="blue.500">
          your.email@example.com
        </Link>
      </Stack>
    </MotionBox>
  );
}