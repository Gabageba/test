import React, {useState} from 'react'
import style from './Table.module.css'
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'
import TableContent from './TableContent/TableContent'
import {useSelector} from 'react-redux'
import {usePosts} from '../../hooks/posts'

const Table = () => {

  const {idSort, bodySort, titleSort} = usePosts()
  const visiblePost = useSelector((state: IState) => state.posts.visiblePosts)
  const [idReverse, setIdReverse] = useState(true)
  const [titleReverse, setTitleReverse] = useState(true)
  const [descriptionReverse, setDescriptionReverse] = useState(true)


  return (
    <>
      <table className={style.table}>
        <thead>
        <tr style={{height: '54px', border: '1px solid #474955'}}>
          <th className={style.header} style={{width: '110px'}} onClick={() => {
            idSort(idReverse)
            setIdReverse(!idReverse)
            setTitleReverse(true)
            setDescriptionReverse(true)
          }}>
            <span style={{marginRight: '39px'}}>ID</span>
            <img src={idReverse ? arrowUp : arrowDown} className={style.arrow} alt="arrow"/>
          </th>
          <th className={style.header} style={{width: '529px'}} onClick={() => {
            titleSort(titleReverse)
            setTitleReverse(!titleReverse)
            setIdReverse(true)
            setDescriptionReverse(true)
          }}>
            <span style={{marginRight: '39px'}}>Заголовок</span>
            <img src={titleReverse ? arrowUp : arrowDown} className={style.arrow} alt="arrow"/>
          </th>
          <th className={style.header} onClick={() => {
            bodySort(descriptionReverse)
            setDescriptionReverse(!descriptionReverse)
            setIdReverse(true)
            setTitleReverse(true)
          }}>
            <span style={{marginRight: '39px'}}>Описание</span>
            <img src={descriptionReverse ? arrowUp : arrowDown} className={style.arrow} alt="arrow"/>
          </th>
        </tr>
        </thead>
        <tbody>
        {visiblePost && visiblePost.map(post => <TableContent posts={post} key={post.id}/>)}
        </tbody>
      </table>
    </>

  )
}

export default Table