import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { CreateProcessForm } from './CreateProcessForm';
import React from 'react';

export function Toolbar() {
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
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}
