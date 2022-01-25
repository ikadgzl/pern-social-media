import styled from 'styled-components';

export const PostModalForm = styled.form`
  width: 90%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.elevation_3};
  height: 50%;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  textarea {
    width: 90%;
    height: 60%;
    outline: 0;
    bottom: 0;
    padding: 1rem 2rem;
    border-radius: 6px;
    resize: none;
    font-size: 1.2rem;
  }

  button {
    cursor: pointer;
    color: white;
    background-color: ${({ theme }) => theme.primary};
    outline: 0;
    border: 0;
    padding: 0.7rem 1rem;
    font-size: 1.4rem;
    border-radius: 6px;

    &:hover {
      background-color: ${({ theme }) => theme.primaryHover};
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const PostModalHeader = styled.div``;

export const PostModalButton = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border-radius: 6px;
  font-size: 1rem;
  border: 4px solid ${({ theme }) => theme.primary};

  &:hover {
    border: 4px solid ${({ theme }) => theme.text};
  }
`;

const StyledPostModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: #1118;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledPostModal;
