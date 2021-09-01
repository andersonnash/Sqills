import { useState } from "react";

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    category_id: "",
  });
  
  const { handleCreate, categories } = props;
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
        <h2 className=" flex justify-center text-5xl font-bold mb-6 text-gray-900">Show Us Your Sqills</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate(formData);
          }}
        >
          {/* <h3>New Activity</h3> */}
          <label className="block mb-1 font-bold text-xl text-gray-900">
            Title
            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-1 font-bold text-xl text-gray-900">
            Description
            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-1 font-bold text-xl text-gray-900">
            Image
            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-1 font-bold text-xl text-gray-900">
            Categories
          <select
            className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
            value={formData.category_id}
            placeholder="Category"
            onChange={handleChange}
            name='category_id'
          >
            <option disabled value="default">
              All Categories             
            </option>     
            {categories?.map((category) => (
              <option value={category.id} key={category.id}>
              {category.name}
                              
              </option>
            ))}
                      
            </select>
            </label>
          <button className="block my-6 py-1 w-1/3 w-full bg-gray-400 hover:bg-blue-600 p-4 rounded-lg text-xl text-gray-900 font-bold transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
