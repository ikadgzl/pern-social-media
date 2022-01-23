import StyledApp from './components/styled/App.styled';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import { useContext } from 'react';
import { UserContext } from './context/userContext';

function App() {
  const user = useContext(UserContext);

  return (
    <Router>
      <StyledApp>
        <Routes>
          <Route path='/' element={user?.isLogged ? 'homepage' : <Signup />} />
        </Routes>
      </StyledApp>
    </Router>
  );
}

export default App;
