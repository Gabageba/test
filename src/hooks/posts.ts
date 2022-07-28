import {useDispatch, useSelector} from 'react-redux'
import {addPosts, addVisiblePosts, setAllPosts, setPage, setTotalCount} from '../redux/actionCreators'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export const usePosts = () => {
  const posts = useSelector((state: IState) => state.posts.posts)
  const allPosts = useSelector((state: IState) => state.posts.allPosts)
  const currentPage = useSelector((state: IState) => state.page.page)
  const dispatch = useDispatch()
  const params = window.location.pathname
  const navigate = useNavigate()

  useEffect(() => {
    setVisiblePost(posts)
  }, [currentPage])

  const setVisiblePost = (post: IPost[]) => {
    dispatch(addVisiblePosts(post.slice(currentPage * 10 - 10, currentPage * 10)))
  }

  const idSort = (isReverse: boolean) => {
    isReverse ?
      dispatch(addPosts(posts.sort((a, b) => {
        return a.id - b.id
      }).reverse()))
      :
      dispatch(addPosts(posts.sort((a, b) => {
        return a.id - b.id
      })))

    dispatch(setPage(1))
    navigate('/1')
    setVisiblePost(posts)
  }

  useEffect(() => {
    const num = parseInt(params.split('/')[1])
    num && dispatch(setPage(num))
  }, [params])

  const abcTitleSort = (a: IPost, b: IPost) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
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

  const titleSort = (isReverse: boolean) => {
    isReverse ?
      dispatch(addPosts(posts.sort(abcTitleSort).reverse()))
      :
      dispatch(addPosts(posts.sort(abcTitleSort)))
    dispatch(setPage(1))
    navigate('/1')
    dispatch(setAllPosts(posts))
    setVisiblePost(posts)
  }

  const bodySort = (isReverse: boolean) => {
    isReverse ?
      dispatch(addPosts(posts.sort(abcDescSort).reverse()))
      :
      dispatch(addPosts(posts.sort(abcDescSort)))
    dispatch(setPage(1))
    navigate('/1')
    dispatch(setAllPosts(posts))
    setVisiblePost(posts)
  }

  const search = (str: string) => {
    if (str === '') {
      dispatch(setTotalCount(allPosts.length))
      dispatch(addPosts(allPosts))
      dispatch(setPage(1))
      navigate('/1')
      setVisiblePost(allPosts)
    } else {
      let searchPost: any[] = []
      allPosts.map(post => {
        if (post.id.toString().indexOf(str) != -1 || post.body.indexOf(str) != -1 || post.title.indexOf(str) != -1) {
          searchPost = [...searchPost, post]
        }
      })
      dispatch(setTotalCount(searchPost.length))
      setVisiblePost(searchPost)
      dispatch(setPage(1))
      navigate('/1')
      dispatch(addPosts(searchPost))
    }
  }

  return {setVisiblePost, idSort, bodySort, titleSort, search}
}