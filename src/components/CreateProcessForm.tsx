import React, { useState } from 'react';
import { useAddProcessMetadataMutation } from '../api/processes-metadata';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import { TagsInput } from 'react-tag-input-component';

export function CreateProcessForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [teams, setTeams] = useState(['Dev Team']);
  const [users, setUsers] = useState(['Jerry']);
  const [domains, setDomains] = useState(['AWS']);
  const [terms, setTerms] = useState(['Term Primary']);

  const handleNameChange = (event: any) => setName(event.target.value);
  const handleDescriptionChange = (event: any) => setDescription(event.target.value);

  const [addProcessMetadata, { isLoading }] = useAddProcessMetadataMutation();

  const handleSubmit = (event: any) => {
    if (name.length) {
      addProcessMetadata({
        md: {
          id: uuidv4(),
          name,
          iconUrl: 'iconUrl',
          description,
          anchors: {
            teams,
            users,
            relatedTerms: terms,
            domains,
          },
        },
      }).then((data) => {
        setName('');
        setDescription('');
        setTeams([]);
        setUsers([]);
        setDomains([]);
        setTerms([]);
      });
    }
  };

  return isLoading ? (
    <Box>Loading...</Box>
  ) : (
    <>
      <Box mb={5}>
        <Input value={name} errorBorderColor="red" onChange={handleNameChange} placeholder="Process name mandatory" />
      </Box>

      <Box mb={5}>
        <Text>
          Select one item from thie list below and provide us with the information we need in order to create your new
          process.{' '}
        </Text>
      </Box>

      <Box mb={5}>
        <Text>Relevant teams</Text>
        <TagsInput value={teams} onChange={setTeams} name="teams" placeHolder="Enter teams" />
        <Text>Relevant users</Text>
        <TagsInput value={users} onChange={setUsers} name="users" placeHolder="Enter users" />
        <Text>Relevant domains</Text>
        <TagsInput value={domains} onChange={setDomains} name="domains" placeHolder="Enter domains" />
        <Text>Relevant terms</Text>
        <TagsInput value={terms} onChange={setTerms} name="terms" placeHolder="Enter terms" />
      </Box>

      <Box mb={5}>
        <Textarea value={description} onChange={handleDescriptionChange} placeholder="Process Description (Optional)" />
      </Box>

      <Button colorScheme="blue" onClick={handleSubmit}>
        Save
      </Button>
    </>
  );
}
