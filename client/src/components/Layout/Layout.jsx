import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>Sqills</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <>
          <Link to='/signup'>Register</Link>
          <Link to='/Login'>Login</Link>
        </>
      )}
      <hr />
      {currentUser && (
        <div>
          <Link to='/users/1'>Your Posts</Link>
          <Link to='/categories'>Categories</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}