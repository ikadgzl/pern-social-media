import StyledApp from './components/styled/App.styled';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Feed from './components/Feed';
import Account from './components/Account';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <StyledApp>
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/account' element={<Account />} />
          </Route>
        </Routes>
      </StyledApp>
    </Router>
  );
}

export default App;
