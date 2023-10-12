const Logout = (props) => {
  const { logout } = props;

  return (
    <button className="logout-btn" onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
