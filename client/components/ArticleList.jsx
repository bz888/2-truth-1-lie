import React from 'react'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit
} from 'firebase/firestore'
import Article from './Article'
import SubArticle from './SubArticle'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import LoadAnim from './LoadAnim'

function ArticleList () {
  const tempRef = query(collection(getFirestore(), 'test_read'), orderBy('timestamp', 'desc'), limit(5))
  const [userArticles, loading, error] = useCollectionData(tempRef, { idField: 'id' })
  return (
    <>
      <h1 className='banner'>NEWS TODAY</h1>
      <div className='article-container'>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <LoadAnim/>}
        {userArticles && userArticles.map((dataObj, idx) => {
          if (idx === 0) {
            return (
              <Article
                key={dataObj.id}
                name={dataObj.name}
                article={dataObj.article}
                time={dataObj.timestamp.toDate()}
                profileImg={dataObj.profileImg}
                idx={idx}
              />
            )
          } else {
            return (
              <SubArticle
                key={dataObj.id}
                name={dataObj.name}
                article={dataObj.article}
                time={dataObj.timestamp.toDate()}
                profileImg={dataObj.profileImg}
                idx={idx}
              />
            )
          }
        })}
      </div>
    </>

  )
}

export default ArticleList
