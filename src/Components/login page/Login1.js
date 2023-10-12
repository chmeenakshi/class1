const Login = (props) => {
  const { login } = props;
  return (
    <button className="login-btn" onClick={login}>
      Login
    </button>
  );
};
export default Login;
