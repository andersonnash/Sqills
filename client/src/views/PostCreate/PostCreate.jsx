import { useState } from 'react';
import { addCategoryToPost } from '../../services/categories';


export default function PostCreate(props) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [postItem, setPostItem] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    category: ''
  });
  // const { Name } = formData;
  const { handleCreate } = props;
const {id} = props
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedCategory(value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postItem = await addCategoryToPost(id, selectedCategory);
    setPostItem(postItem);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>New Activity</h3>
      <label>
        Title:
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange} />
      </label>
      <label>
        Description:
        <input
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange} />
      </label>
      <label>
        Image:
        <input
          type='text'
          name='image_url'
          value={formData.image_url}
          onChange={handleChange} />
      </label>
      <label>
        Category:
        <input
          type='text'
          name='category'
          value={formData.category}
          onChange={handleChange} />
      </label>
      
      <button>Submit</button>
    </form>
  );
}
