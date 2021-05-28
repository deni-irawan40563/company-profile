import axios from 'axios'
import {defaultPath} from './config';

const Post = (path, data) => {
  const promise = new Promise((resolve, reject)=>{
      axios.post(`${defaultPath}/${path}`, data)
      .then((result) => {
        resolve(result);
      }, (err) => {
        reject(err);
      })
  })
  return promise
}

export default Post;