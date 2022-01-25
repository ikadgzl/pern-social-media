import { useMyPosts } from '../hooks/useMyPost';

const Account = () => {
  const { data } = useMyPosts();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Account;
