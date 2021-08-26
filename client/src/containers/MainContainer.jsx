import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllPosts, postPost, putPost, deletePost } from '../services/posts';
import { getAllCategories } from '../services/catagories';

import React from 'react'

const MainContainer = (props) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { currentUser } = props
  const history = useHistory()

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts;
      setPosts(postList)
    }
    fetchPosts();
  }, []);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getAllCategories;
      setCategories(CategoryList)
    }
    fetchCategories();
  }, []);

  const handleCreate = async (formData) => {
    const postData = await postPost(formData);
    setPosts((prevState) => [...prevState, postData]);
    history.push('/posts');
  };

  const handleUpdate = async (id, formData) => {
    const postData = await putPost(formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Numver(id) ? postData : post;
      }))
    history.push('/posts');
  };

  return (
    <div>
      
    </div>
  )
};

export default MainContainer
