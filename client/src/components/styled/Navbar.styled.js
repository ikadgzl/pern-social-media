import styled from 'styled-components';

const StyledNavbar = styled.div``;

export const HamburgerButton = styled.i`
  @media (min-width: 600px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.elevatlion_2};
  font-size: 1.5rem;

  a:first-child {
    margin-right: auto;
  }

  a {
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledNavbar;
