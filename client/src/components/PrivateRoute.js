import { Outlet } from 'react-router-dom';
import { useStore } from '../context/userContext';
import Signup from '../components/Signup';
import Navbar from './Navbar';

function PrivateRoute() {
  const user = useStore();

  return user?.isLogged ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Signup />
  );
}

export default PrivateRoute;
