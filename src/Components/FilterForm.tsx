import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FilterContext } from '../App';

interface IFilterInputs {
  movieName: string;
  filterBy: string;
}

const filterSchema = yup.object({
  movieName: yup.string(),
  filterBy: yup.string(),
});

export const FilterForm = () => {
  const { setFilter, filter } = useContext(FilterContext);

  const { register, handleSubmit } = useForm<IFilterInputs>(
    {
      resolver: yupResolver(filterSchema),
    }
  );

  const onSubmit = React.useCallback(
    (data: IFilterInputs) => {
      setFilter({ ...filter, page: 1 });
      console.log(data);
    },
    [setFilter, filter]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction='column' gap='1rem'>
        <FormControl>
          <FormLabel>Movie name</FormLabel>
          <Input
            {...register('movieName')}
            placeholder='Movie name'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Filter by</FormLabel>
          <Select
            {...register('filterBy')}
            placeholder='Select a from filter'
          >
            <option value='top_rated'>Top rated</option>
            <option>Most watched</option>
          </Select>
        </FormControl>
        <Button type='submit' colorScheme='blue'>
          Search
        </Button>
      </Stack>
    </form>
  );
};
