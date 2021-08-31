import { Link } from 'react-router-dom';
// import Nav from './Nav/Nav'

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      {/* <Route>
      <Nav/>
      </Route> */}
      
      {currentUser ? (
        <div className="flex justify-between my-6">
          <div className='flex justigy-center space-between mr-4'>
            <Link to='/posts'>
          <h1 className='text-xl font-bold ml-12 text-5xl'>SQILLS</h1>
            </Link>
          </div>
          <p className='font-bold text-lg'> Welcome, {currentUser.username}!</p>
            <button className='mr-4 text-lg font-bold' onClick={handleLogout}>Logout</button>
            </div>
      ) : (
          <>
          <Link to='/signup'>Register</Link>
          <Link to='/Login'>Login</Link>
        </>
      )}
      {/* <hr /> */}
      {currentUser && (
        <div>
          <Link className=" inline-block px-2 py-1 w-1/3 bg-gray-400 hover:bg-blue-600 p-4 opacity-50 rounded-lg text-lg text-gray-900  transition duration-300 m-6" to='/users/1'>Your Activities</Link>
          <Link className=" inline-block px-2 py-1 w-1/3 bg-gray-400 hover:bg-blue-600 p-4 opacity-50 rounded-lg text-lg text-gray-900  transition duration-300" to='/categories'>All Categories</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}