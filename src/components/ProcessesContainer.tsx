import React from "react";
import { useGetAllProcessesMetadataQuery } from "../api/processes-metadata";
import { Box, Text, Card, CardBody, CardHeader, Heading, HStack } from "@chakra-ui/react";

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
    <Card minW={290}>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
    </Card>
  );
};

export const ProcessesContainer = () => {
  const { data: processes, isLoading } = useGetAllProcessesMetadataQuery();

  console.log(processes);

  return isLoading ? (
    <Box>Loading...</Box>
  ) : (
    <HStack>
      {processes.mds.map((item: MDSType, index: number) => (
        <ProcessCard key={index} process={item} />
      ))}
    </HStack>
  );
};
