import { useInfiniteQuery } from 'react-query';

export const useFeed = () => {
  return useInfiniteQuery(
    'feed',
    async ({ pageParam = 0 }) => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/feed?cursor=${pageParam}`,
        {
          credentials: 'include'
        }
      );

      if (!res.ok) {
        throw new Error('error server sidide');
      }

      return res.json();
    },
    {
      refetchInterval: 1000 * 10,
      getNextPageParam: (lastPage) =>
        lastPage.posts.length >= 5 ? lastPage.cursor : undefined
    }
  );
};
