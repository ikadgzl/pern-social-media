import { Outlet } from 'react-router-dom';
import { useStore } from '../context/userContext';
import Signup from '../components/Signup';

function PrivateRoute() {
  const user = useStore();

  return user?.isLogged ? <Outlet /> : <Signup />;
}

export default PrivateRoute;
