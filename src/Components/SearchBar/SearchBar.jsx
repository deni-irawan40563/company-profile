import React from 'react'
import './SearchBar.css'
export default function SearchBar() {
  return (
    <div id="search-container">
      <input type="text" name="search" id="search" placeholder="Search..."/>
      <button><i class="fas fa-search"></i></button>
    </div>
  )
}
