import StyledApp from './components/styled/App.styled';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <StyledApp>
        <Signup />
      </StyledApp>
    </Router>
  );
}

export default App;
