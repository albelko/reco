import React from "react";
import "./App.css";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useGetAllProcessesMetadataQuery } from "./api/processes-metadata";
import { ProcessesContainer } from "./components/ProcessesContainer";

function App() {
  return (
    <HStack>
      <VStack>
        <Box>RecoLabs</Box>
        <VStack></VStack>
      </VStack>
      <VStack>
        <Box>Process library</Box>
        <Box>
          <ProcessesContainer />
        </Box>
      </VStack>
    </HStack>
  );
}

export default App;
