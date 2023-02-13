import React from 'react';
import { Box, Container, HStack, VStack } from '@chakra-ui/react';
import { ReactIcon } from '@chakra-ui/icons';
import { ProcessesContainer } from './components/ProcessesContainer';
import { DatePickerComponent } from './components/DatePickerComponent';
import { SideBarComponent } from './components/SideBarComponent';
import { Toolbar } from './components/Toolbar';

function App() {
  return (
    <Container maxW="full" p={0} bgColor="#E5E5E5">
      <HStack w="full" alignItems="flex-start">
        <SideBarComponent />
        <VStack w="full">
          <HStack w="full" bgColor="#FFFFFF" p={5}>
            <Box w="full">Process library</Box>
            <HStack w="full" flexDirection="row-reverse">
              <Box>
                <ReactIcon />
              </Box>
              <DatePickerComponent />
            </HStack>
          </HStack>
          <Box w="full" p={5}>
            <Toolbar />
            <ProcessesContainer />
          </Box>
        </VStack>
      </HStack>
    </Container>
  );
}

export default App;
