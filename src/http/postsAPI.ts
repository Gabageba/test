import axios from 'axios'


export const fetchPosts = async () => {
  const {data} = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  return data

}