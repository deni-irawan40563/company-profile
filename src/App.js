import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Page/Home/Home'
import Blog from './Page/Blog/Blog'
import NotFound from './Page/NotFound/NotFound'
import AddNewBlog from './Page/AddNewBlog/AddNewBlog'
export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/blog/:id' component={Blog} exact/>
          <Route path='/new' component={AddNewBlog} exact/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
  )
}
