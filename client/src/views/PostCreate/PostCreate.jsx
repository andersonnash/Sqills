import { useState } from "react";
import { addCategoryToPost } from "../../services/categories";

export default function PostCreate(props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [postItem, setPostItem] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    category: "",
  });
  // const { name } = formData;
  const { handleCreate, categories } = props;
  const { id } = props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const handleChange = (e) => {
  //   const {name, value } = e.target;
  //   setSelectedCategory(value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postItem = await addCategoryToPost(id, selectedCategory);
    setPostItem(postItem);
  };
  const [selectedCat, setSelectedCat] = useState("default");

  const handleCategoryChange = (event) => {
    setSelectedCat(event.target.value);
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-blue-100">
      <div class="bg-white p-16 rounded-lg shadow-2xl w-2/3">
        <h2 class="text-5xl font-bold mb-10 text-gray-900">Add Activity</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate(formData);
          }}
        >
          {/* <h3>New Activity</h3> */}
          <label class="block mb-1 font-bold text-xl text-gray-900">
            Title
            <input
              type="text"
              class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label class="block mb-1 font-bold text-xl text-gray-900">
            Description
            <input
              type="text"
              class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label class="block mb-1 font-bold text-xl text-gray-900">
            Image
            <input
              type="text"
              class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
          </label>
          <select
            value={selectedCat}
            placeholder="Category"
            onChange={handleCategoryChange}
          >
                        
            <option disabled value="default">
                            All Categories             
            </option>
                        
            {categories?.map((category) => (
              <option value={category.name} key={category.id}>
                                {category.name}
                              
              </option>
            ))}
                      
          </select>
          <button class="block my-6 py-1 w-1/3 w-full bg-gray-400 hover:bg-blue-600 p-4 rounded-lg text-xl text-gray-900 font-bold transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
