import StyledNavbar, { Menu } from './styled/Navbar.styled';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <StyledNavbar>
      <Menu>
        <Link to='/'>
          <h1>Social Media</h1>
        </Link>
        <Link to='/feed'>
          <p>Feed</p>
        </Link>
        <Link to='/account'>
          <p>Account</p>
        </Link>
      </Menu>
    </StyledNavbar>
  );
};

export default Navbar;
