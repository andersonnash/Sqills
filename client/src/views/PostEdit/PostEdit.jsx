import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostEdit(props) {
  const { posts, handleUpdate } = props;
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
  });

  const { title, description, image_url } = formData;

  useEffect(() => {
    const prefillFormData = () => {
      const singlePost = posts?.find((post) => post.id === Number(id));
      setFormData({
        title: singlePost.title,
        description: singlePost.description,
        image_url: singlePost.image_url,
      });
    };
    // const prefillFormData = () => {
    //   const postItem = posts.find((post) => post.id === Number(id));
    //   setFormData(postItem)

    if (posts.length) {
      prefillFormData();
    }
  }, [id, posts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-16 rounded-lg shadow-2xl w-2/3">
        <h2 className="text-5xl font-bold mb-10 text-gray-900">Edit</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(id, formData);
          }}
        >
          <label className="block mb-1 font-bold text-xl text-gray-900">
            Title
            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-1 font-bold text-xl text-gray-900">
            Description
            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-1 font-bold text-xl text-gray-900">
            Image
            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-400"
              name="image_url"
              value={image_url}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
