import React, { useEffect, useState } from 'react'
import { getDataDB } from '../api'
import Article from './Article'

function ArticleList ({ toggle }) {
  const [articleData, setArticleData] = useState([])
  useEffect(() => {
    getArticles()
  }, [toggle])

  function getArticles () {
    getDataDB()
      .then(data => {
        setArticleData(data)
        return null
      })
      .catch(err => {
        console.log('oh no error' + err.message)
      })
  }

  return (
    <>
      <h1>test</h1>
      <div>
        {articleData.map(dataDB => {
          return (
            <Article
              key={dataDB.id}
              name={dataDB.name}
              article={dataDB.article}
            />
          )
        })}
      </div>
    </>

  )
}

export default ArticleList
