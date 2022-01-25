import StyledNavbar, { Menu } from './styled/Navbar.styled';
import { Link } from 'react-router-dom';
import { PostModalButton } from './styled/PostModal.styled';
import PostModal from './PostModal';
import { useState } from 'react';

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((m) => !m);
  };

  return (
    <>
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

          <PostModalButton onClick={toggleModal}>Post</PostModalButton>
        </Menu>
      </StyledNavbar>

      {modal && <PostModal toggleModal={toggleModal} />}
    </>
  );
};

export default Navbar;
