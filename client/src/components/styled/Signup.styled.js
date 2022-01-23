import styled from 'styled-components';

const StyledSignup = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & form {
    background-color: ${({ theme }) => theme.elevation_1};
    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.shadow};

    height: 400px;
    width: 90%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const StyledSignupButton = styled.button`
  cursor: pointer;
  color: white;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  outline: none;
  font-size: 1.1rem;
  border-radius: 4px;
  padding: 1rem 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export default StyledSignup;
