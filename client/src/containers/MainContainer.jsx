import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllPosts, postPosts, putPost, deletePost } from '../services/posts';
import { getAllCategories } from '../services/categories';
import Categories from '../views/Categories/Categories'
import Posts from '../views/Posts/Posts'
import PostCreate from '../views/PostCreate/PostCreate';
import PostEdit from '../views/PostEdit/PostEdit'
import PostDetail from '../views/PostDetail/PostDetail'

import React from 'react'

const MainContainer = (props) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { currentUser } = props
  const history = useHistory()

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList)
    }
    fetchPosts();
  }, []);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getAllCategories();
      setCategories(categoryList)
    }
    fetchCategories();
  }, []);

  const handleCreate = async (formData) => {
    const postData = await postPosts(formData);
    setPosts((prevState) => [...prevState, postData]);
    history.push('/posts');
  };

  const handleUpdate = async (id, formData) => {
    const postData = await putPost(formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? postData : post;
      }))
    history.push('/posts');
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((food) => food.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route path='/categories'>
          <Categories categories={categories} />
        </Route>
        <Route path='/edit'>
          <PostEdit posts={posts} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/posts/new'>
          <PostCreate handleCreate={handleCreate} />
        </Route>
        <Route path='/posts/:id'>
          <PostDetail categories={categories} />
        </Route>
        <Route path='/posts'>
          <Posts
            posts={posts}
            // handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer
