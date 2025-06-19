import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      bg={bg}
      color={color}
      px={6}
      py={4}
      boxShadow="md"
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">John Washington</Text>

        <Flex align="center" gap={6}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="md"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
