import React, {useEffect, useState} from 'react'
import style from './Search.module.css'
import searchLogo from '../../assets/SearchLogo.svg'
import {usePosts} from '../../hooks/posts'


const Search = () => {
  const {searchClick} = usePosts()
  const [value, setValue] = useState('')


  return (
    <div className={style.searchForm}>
      <input type="text" placeholder='Поиск' className={style.search} value={value} onChange={(e) => setValue(e.target.value)} />
      <img className={style.searchLogo} src={searchLogo} alt="search" onClick={() => searchClick(value)}/>
    </div>
  )
}

export default Search