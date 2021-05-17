import { useInfiniteQuery, useQuery } from 'react-query';
import axios from '@services/axiosService';
import { log } from '@utils/console';
interface useInfiniteQueryProps {
  queryName: string;
  path: string;
}
const useInfiniteReactQuery = <T>({
  queryName,
  path,
}: useInfiniteQueryProps) => {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery<T>(
    queryName,
    async ({ pageParam = 1 }) => {
      const res = await axios.get(path + '?page=' + pageParam);

      return res.data;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.next) {
          return pages.length + 1;
        }
      },
      getPreviousPageParam: (firstPage, pages) => {
        return firstPage.previous;
      },
    },
  );

  return {
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    status,
    hasNextPage,
  };
};
export default useInfiniteReactQuery;
