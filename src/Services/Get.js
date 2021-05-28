import axios from 'axios'
import {defaultPath} from './config';

const Get = (path) => {
  const promise = new Promise((resolve, reject)=>{
    axios.get(`${defaultPath}/${path}`)
    .then((result)=>{
      resolve(result.data);
    },(err)=>{
      reject(err);
    })
  })
  return promise
}

export default Get;