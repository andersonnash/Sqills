import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../../services/posts";
import { Link } from "react-router-dom";

export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState('');
  const { id } = useParams();
  // const { categories } = props;

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);

  return (
    <div className=" flex justify-center md:container md:mx-auto px-20 flex flex-wrap items-start my-16 ">
      <h1>{postItem?.title}</h1>
      <img className="rounded-lg" src={postItem?.image_url} />
      <div className="flex">
        <p>{postItem?.description}</p>
      </div>
      <button className="inline-block px-2 py-1 w-1/3 bg-gray-400 hover:bg-blue-600 p-4 rounded-lg text-lg text-gray-900 font-bold transition duration-300 my-6">
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </div>
  );
}
