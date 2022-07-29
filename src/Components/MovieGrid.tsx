import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  SimpleGrid,
  SimpleGridProps,
  Spinner,
} from '@chakra-ui/react';
import { MovieCard } from './MovieCard';
import { getMovieList } from '../api';
import { useQuery } from '@tanstack/react-query';
import { FilterContext } from '../App';

interface MovieGridProps {
  simpleGridProps?: SimpleGridProps;
}

export const MovieGrid = (props: MovieGridProps) => {
  const { filter } = React.useContext(FilterContext);

  const { data, isLoading, isError } = useQuery(
    ['movies', filter],
    async () => getMovieList(filter)
  );

  console.log(filter.movieName);

  return (
    <Box>
      {isError && (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Error while fetching</AlertTitle>
          <AlertDescription>
            {data?.status}
          </AlertDescription>
        </Alert>
      )}

      {isLoading && (
        <Center>
          <Spinner />
        </Center>
      )}
      <SimpleGrid
        columns={1}
        spacing={10}
        {...props.simpleGridProps}
      >
        {data?.data.results.map((movie) => (
          <MovieCard movieData={movie} key={movie.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
