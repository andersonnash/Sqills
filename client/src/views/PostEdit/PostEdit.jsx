import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


export default function PostEdit(props) {  
  const { posts, handleUpdate } = props;
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
  })

  const {
    title,
    description,
    image_url,
  } = formData

  useEffect(() => {
    const prefillFormData = () => {
      const singlePost = posts?.find((post) => post.id === Number(id))
      setFormData({
        title: singlePost.title,
        description: singlePost.description,
        image_url: singlePost.image_url,
      })
    }
    // const prefillFormData = () => {
    //   const postItem = posts.find((post) => post.id === Number(id));
    //   setFormData(postItem)
   
    if (posts.length) {
      prefillFormData();
    }
  }, [id, posts])


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form
    onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}
      >
      <label>
        Title:
        <input 
          type='text' 
          name='title' 
          value={title} 
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input 
          type='text' 
          name='description' 
          value={description} 
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input 
          type='text' 
          name='image_url' 
          value={image_url} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
      </form>
  )
};
