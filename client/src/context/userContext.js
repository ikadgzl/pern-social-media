import { createContext, useState } from 'react';

export const UserContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState({ isLogged: false });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Context;
