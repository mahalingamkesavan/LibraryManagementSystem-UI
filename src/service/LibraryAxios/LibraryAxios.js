import axios from 'axios';
import { HeaderDetail } from './ApiConfiguration';

export const GetAxios =async(Url)=> {
  return await axios.get(Url,HeaderDetail())
}

export const PostAxios =async(Url,Data)=>{
  return await axios.post(Url,Data,HeaderDetail())
}

export const PutAxios =async(Url,Data)=>{
  return await axios.put(Url,Data,HeaderDetail())
}

export const DeleteAxios =async(Url)=>{
  return await axios.delete(Url,HeaderDetail())
}



