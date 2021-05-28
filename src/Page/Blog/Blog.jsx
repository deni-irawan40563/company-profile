import React, { Component } from 'react'
import './Blog.css'
import {Link} from 'react-router-dom'  
import API from '../../Services'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import DropDown from '../../Components/DropDown/DropDown'
import ToAddPost from '../../Components/ToAddPost/ToAddPost'
export default class Blog extends Component {
  state = {
    blogs : {
      title: '',
      image: '',
      blog: ''
    },
    isDropdown: false
  }
  //Read Data From API
  getBlog = () => {
    let id = this.props.match.params.id
    console.log(id)
    API.getBlogsById(id)
    .then(res => {
      let data = res
      this.setState({
        blogs : {
          title: data.title,
          image: data.image,
          blog: data.blog
        }
      })
    })
  }
  changeDropdown = () => {
    this.setState({
      isDropdown : !this.state.isDropdown
    })
  }
  componentDidMount(){
    this.getBlog()
  }
  render() {
    return (
      <div>
      <ToAddPost />
      <div className="header-element">
        <div className="filter">
          <Header />
          <Navbar onClick={this.changeDropdown}/>
          <DropDown active={this.state.isDropdown} />
          <div className="hero-text">
            <div className="website-title">
              <h1>{this.state.blogs.title}</h1>
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
          <Card title={this.state.blogs.title} image={this.state.blogs.image} blog={this.state.blogs.blog}/>
        </article>
        <aside>
          <SearchBar />
          <CategoryCard />
        </aside>
      </main>
      <Footer/>
    </div>
    )
  }
}
