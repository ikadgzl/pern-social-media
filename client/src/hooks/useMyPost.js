import { useInfiniteQuery } from 'react-query';

export const useMyPosts = () => {
  return useInfiniteQuery(
    'myPosts',
    async ({ pageParam = 0 }) => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/my_posts?cursor=${pageParam}`,
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
