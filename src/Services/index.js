import Get from './Get'
import Post from './Post'
import GetDataById from './GetById'

//Create
const postBlogs = (data) => Post('blogs', data);

//Read
const getBlogs = () => Get(`blogs`);
const getBlogsById = (id) => GetDataById(`blogs`, id);

const API = {
  postBlogs,
  getBlogs,
  getBlogsById
}

export default API;