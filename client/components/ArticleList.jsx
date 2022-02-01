import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataDB } from '../actions/text'
import Article from './Article'

function ArticleList () {
  const dispatch = useDispatch()

  const [toggle, setToggle] = useState(false)
  const articleData = useSelector(state => state.dbGet)

  // useEffect(() => {
  //   getArticles()
  //   console.log(dbData)
  // }, [articleData.slice(-1)[0].id])

  useEffect(() => {
    getArticles()
    refresher()
  }, [toggle])

  function getArticles () {
    const date = new Date()
    dispatch(fetchDataDB())
    console.log('getArticles hit at ', date)
  }

  // 10 secs refresh
  function refresher () {
    setTimeout(() => { setToggle(!toggle) }, 10000)
  }

  return (
    <>
      <h1>News</h1>
      <div>
        {articleData.map(dataObj => {
          return (
            <Article
              key={dataObj.id}
              name={dataObj.name}
              article={dataObj.article}
              time={dataObj.timestamp}
            />
          )
        })}
      </div>
    </>

  )
}

export default ArticleList
