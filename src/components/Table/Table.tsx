import React, {useEffect, useState} from 'react'
import style from './Table.module.css'
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'
import {usePosts} from '../../hooks/posts'
import TableContent from './TableContent/TableContent'
import Pages from '../Pages/Pages'
import Loader from '../Loader'
import Error from '../Error'

const Table = () => {
  const {
    visiblePost,
    currentPage,
    totalCount,
    setCurrentPage,
    loading,
    error,
    idFilter,
    descriptionFilter,
    titleFilter
  } = usePosts()
  const [idReverse, setIdReverse] = useState(true)
  const [titleReverse, setTitleReverse] = useState(true)
  const [descriptionReverse, setDescriptionReverse] = useState(true)

  useEffect(() => {
    console.log('dfs')}, [])

  return (
    <>
      <table className={style.table}>
        <tr style={{height: '54px', border: '1px solid #474955'}}>
          <th className={style.header} style={{width: '110px'}} onClick={() => {
            idFilter(idReverse)
            setIdReverse(!idReverse)
          }}>
            <span style={{marginRight: '39px'}}>ID</span>
            <img src={idReverse ? arrowUp : arrowDown} className={style.arrow} alt="arrow"/>
          </th>
          <th className={style.header} style={{width: '529px'}} onClick={() => {
            titleFilter(titleReverse)
            setTitleReverse(!titleReverse)
          }}>
            <span style={{marginRight: '39px'}}>Заголовок</span>
            <img src={idReverse ? arrowUp : arrowDown} className={style.arrow} alt="arrow"/>
          </th>
          <th className={style.header} onClick={() => {
            descriptionFilter(descriptionReverse)
            setDescriptionReverse(!descriptionReverse)
          }}>
            <span style={{marginRight: '39px'}}>Описание</span>
            <img src={idReverse ? arrowUp : arrowDown} className={style.arrow} alt="arrow"/>
          </th>
        </tr>
        {visiblePost.map(visiblePost => <TableContent posts={visiblePost}/>)}
      </table>
      {loading && <Loader/>}
      {error && <Error error={error}/>}
      <Pages limit={10} currentPage={currentPage} totalCount={totalCount} setPage={(page) => setCurrentPage(page)}/>

    </>

  )
}

export default Table