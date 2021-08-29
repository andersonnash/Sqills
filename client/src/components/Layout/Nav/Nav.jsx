import React from "react";
import {Link} from 'react-router-dom'

const Nav = (props) => {
  const {  currentUser, handleLogout } = props;

  return (
    <nav class="bg-gray-100">
      <div cass="max-w-6xl mx-auto border border-red-400"></div>
      <div class="flex justify-between">
        <div class='flex space-x-4'>
          <div>
            <Link class='flex items-center' to='/posts'>
            <svg class="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
</svg>
              Sqills</Link>
          </div>
          <div>
            <Link>
            </Link>
          </div>
        </div>
        <div>
          <button onClick={handleLogout}>Logout</button>

 
      
        </div>
      </div>
    </nav>
  );
};

export default Nav;
