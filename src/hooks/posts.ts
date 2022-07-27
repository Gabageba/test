import axios, {AxiosError} from 'axios'
import {useEffect, useState} from 'react'
import {IPost} from '../models'


export const usePosts = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [posts, setPosts] = useState<IPost[]>([])
  const [allPosts, setAllPosts] = useState<IPost[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [visiblePost, setVisiblePost] = useState<IPost[]>([])

  const idFilter = (isReverse: boolean) => {
    isReverse ?
      setPosts(posts.sort((a, b) => {
        return a.id - b.id
      }).reverse())
      :
      setPosts(posts.sort((a, b) => {
        return a.id - b.id
      }))
    setCurrentPage(1)
    setVisiblePost(posts.slice(0, 10))
  }

  const abcTitleSort = (a: IPost, b: IPost) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  }

  const search = (str: string) => {
    let searchPost: any[] = []
    allPosts.map(post => {
      if (post.id.toString().indexOf(str) != -1 || post.body.indexOf(str) != -1 || post.title.indexOf(str) != -1) {
        searchPost = [...searchPost, post]
      }
    })
    return searchPost
  }

  const searchClick = (str: string) => {
    setCurrentPage(1)
    setPosts(search(str))
    setVisiblePost(search(str))
  }



  const abcDescSort = (a: IPost, b: IPost) => {
    if (a.body > b.body) {
      return 1;
    }
    if (a.body < b.body) {
      return -1;
    }
    return 0;
  }

  const titleFilter = (isReverse: boolean) => {
    isReverse ?
      setPosts(posts.sort(abcTitleSort).reverse())
      :
      setPosts(posts.sort(abcTitleSort))
    setCurrentPage(1)
    setVisiblePost(posts.slice(0, 10))
  }

  const descriptionFilter = (isReverse: boolean) => {
    isReverse ?
      setPosts(posts.sort(abcDescSort).reverse())
      :
      setPosts(posts.sort(abcDescSort))
    setCurrentPage(1)
    setVisiblePost(posts.slice(0, 10))
    setTotalCount(posts.length)
  }

  async function fetchPosts() {
    try {
      setError('')
      setLoading(true)
      setVisiblePost([])
      const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      setAllPosts(response.data)
      setPosts(response.data)
      setTotalCount(response.data.length)
      setVisiblePost(response.data.slice(currentPage * 10 - 10, currentPage * 10))
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    setVisiblePost(posts.slice(currentPage * 10 - 10, currentPage * 10))
  }, [currentPage, posts])


  useEffect(() => {
      fetchPosts()
  }, [])


  return {error, loading, visiblePost, currentPage, totalCount, setCurrentPage, idFilter, descriptionFilter, titleFilter, searchClick}
}