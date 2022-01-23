import { useQuery } from 'react-query';
import network from '@business/services/network';

interface useReactQueryProps {
  queryName: string;
  path: string;
  refetchInterval?: number;
}
const useReactQuery = <T>({
  queryName,
  path,
  refetchInterval,
}: useReactQueryProps) => {
  const { isLoading, error, data, refetch } = useQuery<T>(
    queryName,
    async () => {
      const res = await network.get(path);

      return res.data;
    },
    {
      refetchInterval: refetchInterval ?? false,
      refetchOnWindowFocus: 'always',
      refetchOnMount: 'always',
    },
  );

  return { data, error, isLoading, refetch };
};
export default useReactQuery;
