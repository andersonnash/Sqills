import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../services/posts';
import { addCategoryToPost } from '../../services/categories';
import { Link } from "react-router-dom"

export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { id } = useParams();
  const { categories } = props;

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  };

  // Our handle submit for adding the flavor to our food
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postItem = await addCategoryToPost(id, selectedCategory);
    setPostItem(postItem);
  };

  return (
    <div>
      <h3>{postItem?.title}</h3>
      <img src={postItem?.image_url}></img>
      <h3>{postItem?.description}</h3>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
        </button>
    </div>
  );
}