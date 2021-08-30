import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom'

import { getAllPosts, postPosts, putPost, deletePost } from '../services/posts';
import { getAllCategories, addCategoryToPost } from '../services/categories';
import Categories from '../views/Categories/Categories'
import Posts from '../views/Posts/Posts'
import PostCreate from '../views/PostCreate/PostCreate';
import PostEdit from '../views/PostEdit/PostEdit'
import PostDetail from '../views/PostDetail/PostDetail'
import CategoryPosts from '../views/CategoryPosts/CategoryPosts'
import UserPosts from '../views/UserPosts/UserPosts'

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
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  const handleCategoryAdd = async (categoryId, postId) => {
    const updatedCategory = await addCategoryToPost(categoryId, postId);
    setPosts((prevState) =>
      prevState.map((post) => {
        return categories.postId === Number(postId)
          ? updatedCategory
          : post;
      })
    );
    props.setToggleFetch((prev) => !prev);
    history.push(`/posts/${postId}`);
  };

  return (
    <div>
      <Switch>
        <Route path='/users/:id'>
          <UserPosts posts={posts} handleDelete={handleDelete}
            currentUser={currentUser}/>
        </Route>
        <Route path='/categories'>
          <Categories categories={categories} />
        </Route>
        <Route path= '/edit/:id'>
          <PostEdit
            posts={posts}
            categories={categories}
            handleUpdate={handleUpdate}
            handleCategoryAdd={handleCategoryAdd}
          />
        </Route>
        <Route path='/posts/new'>
          <PostCreate handleCreate={handleCreate}
            categories={categories}
            posts={posts}
            handleCategoryAdd={handleCategoryAdd}
          />
        </Route>
        <Route path='/posts/:id'>
          <PostDetail
            categories={categories} />
        </Route>
        <Route path='/posts'>
          <Posts
            posts={posts}

          />
        </Route>
        <Route exact path='/category/:id'>
          <CategoryPosts />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer
