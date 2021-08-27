import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


export default function PostEdit(props) {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: ''
  })
  const { posts, handleUpdate } = props;
  const { id } = useParams();


  useEffect(()=> {
    const prefillFormData = () => {
      const postItem = posts.find((post) => post.id === Number(id));
      setFormData(postItem)
    }
    if (posts.length) {
      prefillFormData()
    }
  }, [posts, id])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
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
          value={formData?.title} 
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input 
          type='text' 
          name='description' 
          value={formData?.description} 
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input 
          type='text' 
          name='image_url' 
          value={formData?.image_url} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
