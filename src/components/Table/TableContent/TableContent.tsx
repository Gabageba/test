import React from 'react'
import {IPost} from '../../../models'
import style from './TableContent.module.css'

interface TableContentProps {
  posts: IPost
}

const TableContent = ({posts}: TableContentProps) => {

  return (
      <tr className={style.tableContent}>
        <td className={style.id}>{posts.id}</td>
        <td className={style.content}>{posts.title}</td>
        <td className={style.content}>{posts.body}</td>
      </tr>
  )
}

export default TableContent