import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const useStore = () => useContext(UserContext);

const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [authIsReady, setAuthIsReady] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/account`, {
      credentials: 'include'
    })
      .then((d) => d.json())
      .then((data) => {
        setUser(data.user);
        setAuthIsReady(true);
      })
      .catch((err) => {
        console.log(err);
        setAuthIsReady(true);
      });
  }, []);

  if (!authIsReady) return 'loading';

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Context;
