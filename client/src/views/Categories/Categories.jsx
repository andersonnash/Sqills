import React from 'react'
import { Link } from "react-router-dom";

const Categories = (props) => {
  const {categories} = props
  return (
    <div>

      <h1>Categories</h1>
      {categories?.map((category) => (
        <Link to={`/category/${category.id}`}><p key={category.id}>{category.name}</p></Link>
      ))}
    </div>
  )
}

export default Categories;
