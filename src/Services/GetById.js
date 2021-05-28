import axios from 'axios'
import {defaultPath} from './config';

const Get = (path,id) => {
  const promise = new Promise((resolve, reject)=>{
    axios.get(`${defaultPath}/${path}/${id}`)
    .then((result)=>{
      resolve(result.data);
    },(err)=>{
      reject(err);
    })
  })
  return promise
}

export default Get;