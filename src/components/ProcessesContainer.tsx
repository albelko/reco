import React from 'react';
import { useGetAllProcessesMetadataQuery } from '../api/processes-metadata';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { ProcessCard } from './ProcessCard';

type MDSType = {
  id: string;
  name: string;
  iconUrl: string;
  description: string;
  anchors: {
    teams: string;
  };
};

export const ProcessesContainer = () => {
  const { data: processes, isLoading } = useGetAllProcessesMetadataQuery();

  return isLoading ? (
    <Box>Loading...</Box>
  ) : (
    <>
      <Heading as="h2" size="xl">
        My processes
      </Heading>
      <HStack flexWrap="wrap">
        {processes.mds.map((item: MDSType, index: number) => item && <ProcessCard key={index} process={item} />)}
      </HStack>
    </>
  );
};
