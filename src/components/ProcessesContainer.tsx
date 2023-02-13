import React from 'react';
import { useGetAllProcessesMetadataQuery } from '../api/processes-metadata';
import { Box, Text, Card, CardBody, CardHeader, Heading, HStack, CardFooter, Button } from '@chakra-ui/react';

type MDSType = {
  id: string;
  name: string;
  description: string;
  anchors: {
    teams: string;
  };
};

const ProcessCard = ({ process }: any) => {
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

export const ProcessesContainer = () => {
  const { data: processes, isLoading } = useGetAllProcessesMetadataQuery();

  console.log(processes);

  return isLoading ? (
    <Box>Loading...</Box>
  ) : (
    <>
      <Heading as="h2" size="xl">
        My processes
      </Heading>
      <HStack flexWrap="wrap">
        {processes.mds.map((item: MDSType, index: number) => (
          <ProcessCard key={index} process={item} />
        ))}
      </HStack>
    </>
  );
};
