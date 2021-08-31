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
        
        <div className=" flex justify-between items-center my-6">
        
          <div className='flex space-between mr-4'>
        
            <Link to='/posts'>
          <h1 className='text-xl font-bold ml-12 text-5xl'>SQILLS</h1>
            </Link>
          </div>
          {/* <div className='flex justify-end ml-6'> */}
          <p className='hidden md:block  justify-start animate-bounce font-bold text-lg'> Welcome, {currentUser.username}!</p>
            <button className=' inline-block px-2 py-1 w-5/16 bg-gray-400 hover:bg-blue-600 p-4 opacity-50 rounded-lg text-lg text-gray-900  transition duration-300 mr-4 text-lg font-bold ' onClick={handleLogout}>Logout</button>
            </div>
            // </div>
      ) : (
          <>
         <div className='flex items-center'>
            <h1 className='flex justify-center text-xl font-bold ml-12 text-5xl'>SQILLS</h1>
            <div className='flex justify-end'>
          <Link className=" justify-end inline-block px-2 py-1 w-5/16 bg-gray-400 hover:bg-blue-600 p-4 opacity-50 rounded-lg text-lg text-gray-900  transition duration-300 m-6" to='/signup'>Register</Link>
          <Link className=" inline-block px-4 py-1 w-5/16 bg-gray-400 hover:bg-blue-600 p-4 opacity-50 rounded-lg text-lg text-gray-900  transition duration-300 m-6" to='/Login'>Login</Link>
              </div>
              </div>
            </>
      )}
      <hr />
      {currentUser && (
        <div className=''>
          <Link className=" inline-block px-2 py-1 w-1/3 bg-gray-400 hover:bg-blue-600 p-4 opacity-50 rounded-lg text-lg text-gray-900  transition duration-300 m-6" to='/users/1'>Your Activities</Link>
          <Link className=" inline-block px-2 py-1 w-1/3 bg-gray-400 hover:bg-blue-600 p-4 opacity-50 rounded-lg text-lg text-gray-900  transition duration-300" to='/categories'>All Categories</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}