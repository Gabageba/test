import React, {useState} from 'react'
import style from './Search.module.css'
import searchLogo from '../../assets/SearchLogo.svg'
import {usePosts} from '../../hooks/posts'


const Search = () => {
  const [value, setValue] = useState('')
  const {search} = usePosts()


  return (
    <div className={style.searchForm}>
      <input type="text" placeholder='Поиск' className={style.search} value={value} onChange={(e) => {
        setValue(e.target.value)
        search(e.target.value)
      }} />
      <img className={style.searchLogo} src={searchLogo} alt="search"/>
    </div>
  )
}

export default Search