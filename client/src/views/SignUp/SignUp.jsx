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
<div class='min-h-screen flex items-center justify-center bg-blue-900'>
      <div class='bg-gray-50 opacity-100 p-16 rounded-lg shadow-2xl w-2/3'>
      <h2 class="font-chau text-3xl font-bold mb-10 text-purple-700">Register</h2>
    <form class='space-y-1'
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <label class="block mb-1 font-bold text-small text-gray-600">
        Username:
        <input
          type='text'
          class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label class="block mb-1 font-bold text-small text-gray-600">
        Email:
        <input
          class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label class="block mb-1 font-bold text-small text-gray-600">
        Password:
        <input
          class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        </label>
      <br />
      <button class="block w-full bg-purple-400 hover:bg-purple-300 p-4 rounded-lg text-purple-800 transition duration-300">Submit</button>
    </form>
      </div>
  </div>
  );
}