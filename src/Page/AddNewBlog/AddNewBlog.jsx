import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './AddNewBlog.css'
import API from '../../Services'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import DropDown from '../../Components/DropDown/DropDown'

export default class AddNewBlog extends Component {
  state = {
    blogs : [],
    blogPost : {
      id : '',
      title : '',
      image : '',
      blog: ''
    },
    isDropdown : false
  }
  //Post Data From API
  handlePostData = () => {
    API.postBlogs(this.state.blogPost)
    .then((res)=>{
      alert(`Submit Data : ${this.state.blogPost.title} status ${res.status} Success`);
      this.setState({
        blogPost : {
          id : '',
          title : '',
          image : '',
          blog : ''
        }
      })
      this.props.history.push(`/`);
    }, (err)=>{
      alert(`Submit Data : Failed Because ${err}`);
    })
  }
  //Create Id Data
  handlePost = (event) => {
    let newPost = {...this.state.blogPost}; //Mengclone object state postProduct
    let crypto = require("crypto");
    let createId = crypto.randomBytes(5).toString('hex');
    newPost['id'] = createId
    newPost[event.target.name] = event.target.value //Menentukan target lewat name
    this.setState({
      blogPost : newPost
    })
  }

  handleSubmit = () => {
    this.handlePostData()
  }

  changeDropdown = () => {
    this.setState({
      isDropdown : !this.state.isDropdown
    })
  }
  render() {
    return (
      <div>
        <div className="header-element">
          <div className="filter">
            <Header />
            <Navbar onClick={this.changeDropdown}/>
            <DropDown active={this.state.isDropdown} />
            <div className="hero-text">
              <div className="website-title">
                <h1>Create New Article</h1>
                <p>The Interior speak for themselves</p>
              </div>
              <div></div>
              <div></div>
              <div className="navigation-link">
                <Link to="/">Home</Link>
                <span>-</span>
                <Link to="/">Blog</Link>
              </div>
            </div>
          </div>
        </div>
        <main className="main-components">
          <article>
            <input type="text" name="title" id="blog-title" placeholder="blog title..."  onChange={this.handlePost} />
            <input type="text" name="image" id="blog-image" placeholder="link blog image..."  onChange={this.handlePost} />
            <input type="text" name="blog" id="blog" placeholder="blog body..."  onChange={this.handlePost} />
            <button onClick={this.handleSubmit} >Posting</button>
          </article>
          <aside>
            <SearchBar />
            <CategoryCard />
          </aside>
        </main>
        <Footer />
      </div>
    )
  }
}
