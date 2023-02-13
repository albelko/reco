import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const ProcessCard = ({ process }: any) => {
  const { name, description } = process;

  return (
    <Card w={300} maxW={300} maxH={300} my={5}>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text textOverflow="ellipsis">{description}</Text>
      </CardBody>
      <CardFooter>
        <Button>Delete</Button>
      </CardFooter>
    </Card>
  );
};
