import React from 'react';
import style from './Pages.module.css'
import {IPost} from '../../models'
import {useNavigate} from 'react-router-dom'

interface PagesProps {
  limit: number
  currentPage: number
  totalCount: number
  setPage: (page: number) => void
}


const Pages = ({limit, currentPage, totalCount, setPage} : PagesProps) => {
  const pageCount = Math.ceil(totalCount / limit)
  const pages = []
  const navigate = useNavigate()
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <div className={style.pages}>
      {currentPage > 1 &&
        <div className={style.prevButton} onClick={() => setPage(currentPage - 1)}>Назад</div>
      }
      <span className={style.buttons}>
         {pages.map(page => {
           return (
             <button className={style.pageButton} style={{color: page === currentPage ? '#7EBC3C' : '#474955'}} onClick={() => {
               setPage(page)
               navigate(`/${page}`)
             }}>
               {page}
             </button>
           )
         })}
      </span>
      {currentPage < pageCount &&
        <div className={style.nextButton} onClick={() => setPage(currentPage + 1)}>Вперед</div>
      }
    </div>
  );
};

export default Pages;