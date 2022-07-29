import { Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { NavigationDrawer } from './NavigationDrawer';

export const Navbar = () => {
  return (
    <Flex
      minWidth='max-content'
      gap='2'
      alignItems='center'
      w='100%'
    >
      <Text as='h1' fontSize='2xl'>
        Movies api
      </Text>
      <Spacer />
      <NavigationDrawer />
    </Flex>
  );
};
