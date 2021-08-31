import React from 'react'
import { useEffect, useState } from 'react';
import { getOneCategory } from '../../services/categories';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
  
const CategoryPosts = () => {
  const [catData, setCatData] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const singleCategory = await getOneCategory(id);
      setCatData(singleCategory);
    };
    fetchCategory();
  }, [id]);
 

  return (
    <div className=" md:container md:mx-auto px-20 flex flex-wrap items-start my-16" >
      <div className=" lg-w-1/4 w-full lg:pr-3 ">
        <div className=' relative'>
      {catData?.posts?.map((post) => (
          <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <p>{post?.title}</p>
            </Link>
           
            <img className='rounded-xl'src={post?.image_url} alt={post.title}/>
            <p>{post?.description}</p>
        </div>
        
            
      ))}
        </div>
      </div>
      </div>
      
  )
}

export default CategoryPosts
