import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import API from '../../Services'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import DropDown from '../../Components/DropDown/DropDown'
import ToAddPost from '../../Components/ToAddPost/ToAddPost'

export default class Home extends Component {
  state = {
    blogs : [],
    isDropdown: false
  }
  //Read Data From API
  getBlogsPost = () => {
    API.getBlogs()
    .then(res => {
      this.setState({
        blogs : res
      })
    })
  }

  handleGoDetail = (id) => {
    this.props.history.push(`/blog/${id}`);
  }
  changeDropdown = () => {
    this.setState({
      isDropdown : !this.state.isDropdown
    })
  }
  componentDidMount(){
    this.getBlogsPost()
  }
  render() {
    return (
      <div>
        <ToAddPost />
        <div className="header-element">
          <div className="filter">
            <Header />
            <Navbar onClick={this.changeDropdown} />
            <DropDown active={this.state.isDropdown} />
            <div className="hero-text">
              <div className="website-title">
                <h1>News & Artical</h1>
                <p>The Interior speak for themselves</p>
              </div>
              <div class="extended"></div>
              <div class="extended"></div>
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
            {
            this.state.blogs.map( blog => {
              return <Card thumbnail={true} key={blog.id} id={blog.id} title={blog.title} image={blog.image} goDetail={this.handleGoDetail}/>
            })
            }
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
