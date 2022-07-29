import axios, { AxiosResponse } from 'axios';
import {
  FilterMovieList,
  MovieList,
} from '../types/Movies';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
});

export const getMovieList = async ({
  filterBy = 'top_rated',
  page,
}: FilterMovieList): Promise<
  AxiosResponse<MovieList, any>
> => {
  const movies = await instance.get<MovieList>(
    `/movies/${filterBy}/`,
    {
      params: {
        api_key: '60f37cbe367276695376c1d022c849e5',
        page,
      },
    }
  );
  return movies;
};
