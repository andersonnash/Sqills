import { useState } from 'react';

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    category: ''
  });
  const { Name } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
