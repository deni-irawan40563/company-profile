import React from 'react'
import './Card.css'

export default function Card({thumbnail, title, image, blog, goDetail, id}) {
  if(thumbnail){
    return (
      <div id="card-container" onClick={() => goDetail(id)}>
        <img src={image} alt={title} />
        <div className="title-container">
          <h1>{title}</h1>
          <p>17 Mei 2021, Admin, 0 Komentar</p>
        </div>
      </div>
    )
  }
  return (
    <div id="card-container" onClick={() => goDetail(id)}>
      <img src={image} alt={title} loading="lazy"/>
      <div className="title-container">
        <h1>{title}</h1>
        <p>17 Mei 2021, Admin, 0 Komentar</p>
        <article><p>{blog}</p></article>
      </div>
    </div>
  )
}
