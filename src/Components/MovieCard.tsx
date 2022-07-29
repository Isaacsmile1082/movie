import React from 'react';
import {
  Box,
  Text,
  StackProps,
  VStack,
  Image,
  Container,
} from '@chakra-ui/react';

import { Movie } from '../types/Movies';

interface MovieCardProps {
  hStackProps?: StackProps;
  movieData: Movie;
}

export const MovieCard = ({
  movieData,
}: MovieCardProps) => {
  return (
    <VStack
      borderRadius='md'
      backgroundColor='Highlight'
      w='100'
    >
      <Image
        boxSize='500px'
        borderRadius='md'
        objectFit='cover'
        src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        alt={`${movieData.title} poster`}
      />
      <Container pb='5'>
        <Box>
          <Text fontSize='2xl' as='h2'>
            {movieData.title}
          </Text>
        </Box>
        <Box flex='1'>
          <p>{movieData.overview}</p>
        </Box>
      </Container>
    </VStack>
  );
};
