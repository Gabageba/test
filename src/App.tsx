import React, {useEffect} from 'react'
import './App.css'
import Search from './components/Search/Search'
import Table from './components/Table/Table'
import {fetchPosts} from './http/postsAPI'
import {useDispatch, useSelector} from 'react-redux'
import {addPosts, addVisiblePosts, setAllPosts, setPage, setTotalCount} from './redux/actionCreators'
import {usePosts} from './hooks/posts'
import Pages from './components/Pages/Pages'

const App = () => {

  const dispatch = useDispatch()
  const {setVisiblePost} = usePosts()
  const currentPage = useSelector((state: IState) => state.page.page)
  const totalCount = useSelector((state: IState) => state.page.totalCount)

  useEffect(() => {
    dispatch(addVisiblePosts([]))
    fetchPosts().then(data => {
      dispatch(addPosts(data))
      dispatch(setAllPosts(data))
      setVisiblePost(data)
      dispatch(setTotalCount(data.length))
    })
  }, [])

  return (
    <div className="App">
      <Search/>
      <Table/>
      <Pages limit={10} currentPage={currentPage} totalCount={totalCount} setPage={(page) => dispatch(setPage(page))}/>
    </div>
  )
}

export default App
