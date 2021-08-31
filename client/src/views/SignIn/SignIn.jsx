import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-16 rounded-lg shadow-2xl w-100">
        <h2 className="text-5xl font-bold mb-10 text-gray-900">Login</h2>
        <form
          className="space-y-1"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          <label className="block mb-1 font-bold text-xl text-gray-900">
            Username
            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="block mb-1 font-bold text-xl text-gray-900">
            Password
            <input
              type="password"
              className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          {/* <Link to='/register'>Register</Link> */}
          <button className="block w-full bg-gray-400 hover:bg-blue-600 p-4 rounded-lg text-xl text-gray-900 font-bold transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
