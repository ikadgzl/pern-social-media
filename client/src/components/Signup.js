import StyledSignup, { StyledSignupButton } from './styled/Signup.styled';

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_SERVER_URL}/auth/google`;

    window.open(url, '_self');
  };

  return (
    <StyledSignup>
      <form onSubmit={handleSignup}>
        <div>
          <h1>Social Media App</h1>
          <sub>created with PERN</sub>
        </div>

        <StyledSignupButton type='submit'>
          Sign in with Google
        </StyledSignupButton>
      </form>
    </StyledSignup>
  );
};

export default Signup;
