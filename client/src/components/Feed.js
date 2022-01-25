import { useFeed } from '../hooks/useFeed';

const Feed = () => {
  const { data } = useFeed();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Feed;
