import { useState } from 'react';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
    class="h-screen flex flex-col 
    items-center justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>
      <label>
        Username:
        <input
          class="text-sm text-gray-base w-full 
          mr-3 py-5 px-4 h-2 border 
          border-gray-200 rounded mb-2"
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          class="text-sm text-gray-base w-full 
          mr-3 py-5 px-4 h-2 border 
          border-gray-200 rounded mb-2"
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          class="text-sm text-gray-base w-full 
          mr-3 py-5 px-4 h-2 border 
          border-gray-200 rounded mb-2"
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form> 

  );
}