import React, { useRef, useState } from 'react';
import './App.css';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  useDisclosure,
  VStack,
  Text,
} from '@chakra-ui/react';
import { AddIcon, ReactIcon } from '@chakra-ui/icons';
import { ProcessesContainer } from './components/ProcessesContainer';

function SideBarComponent() {
  return (
    <VStack bgColor="#061839" height="100vh" color="#FFFFFF" p={5}>
      <Box>RecoLabs</Box>
      <VStack></VStack>
    </VStack>
  );
}

function CreateProcessForm() {
  const [name, setName] = useState('');
  const [description, setDecription] = useState('');

  return (
    <>
      <Box mb={5}>
        <Input placeholder="Process name mandatory" />
      </Box>

      <Text>
        Select one item from thie list below and provide us with the information we need in order to create your new
        process.{' '}
      </Text>

      <Box mb={5}>
        <Input placeholder="Process Description (Optional)" />
      </Box>
    </>
  );
}

function Toolbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack flexDirection="row-reverse" my={5}>
      <Button leftIcon={<AddIcon />} onClick={onOpen} colorScheme="blue">
        Create new
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create New Process</DrawerHeader>

          <DrawerBody>
            <CreateProcessForm />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}

function DatePickerComponent() {
  return <Box>10/06/2021 - 17/06/2021</Box>;
}

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
