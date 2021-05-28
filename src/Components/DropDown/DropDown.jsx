import React from 'react'
import './DropDown.css'

export default function DropDown({active}) {
  return (
    <div id={active ? 'dropdown' : 'hidden'}>
      <ul>
        <li>Home</li>
        <li className="double">
          <p>About</p>
          <button><i class="fas fa-chevron-down"></i></button>
        </li>
        <li>Services</li>
        <li>Project</li>
        <li>Blog</li>
        <li>contact</li>
      </ul>
    </div>
  )
}
