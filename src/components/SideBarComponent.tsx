import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

export function SideBarComponent() {
  return (
    <VStack bgColor="#061839" height="100vh" color="#FFFFFF" p={5}>
      <Box>RecoLabs</Box>
      <VStack></VStack>
    </VStack>
  );
}
