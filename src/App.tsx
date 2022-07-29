import React from 'react';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Flex } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar';
import { MovieGrid } from './Components/MovieGrid';
import { FilterMovieList } from './types/Movies';

const queryClient = new QueryClient();

export interface InterfaceFilterContext {
  filter: FilterMovieList;
  setFilter: React.Dispatch<
    React.SetStateAction<FilterMovieList>
  >;
}

export const FilterContext =
  React.createContext<InterfaceFilterContext>({
    filter: {
      movieName: '',
      filterBy: '',
      page: 1,
    },
    setFilter: () => {
      null;
    },
  });

function App() {
  const [filter, setFilter] =
    React.useState<FilterMovieList>({
      movieName: '',
      filterBy: 'top_rated',
      page: 1,
    });

  return (
    <QueryClientProvider client={queryClient}>
      <FilterContext.Provider
        value={{
          filter,
          setFilter,
        }}
      >
        <Flex direction='column' gap='10' px='3' pt='1'>
          <Navbar />
          <MovieGrid />
        </Flex>
      </FilterContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
