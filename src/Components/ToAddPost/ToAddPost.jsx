import React from 'react'
import {Link} from 'react-router-dom'
import './ToAddPost.css'

export default function ToAddPost() {
  return (
    <button id="to-add-post">
      <Link to="/new">+</Link>
    </button>
  )
}
