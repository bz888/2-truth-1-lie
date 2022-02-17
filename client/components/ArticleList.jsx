import React from 'react'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  where
} from 'firebase/firestore'
import Article from './Article'
import SubArticle from './SubArticle'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import LoadAnim from './LoadAnim'

function ArticleList () {
  const latest = query(collection(getFirestore(), 'test_read'), orderBy('timestamp', 'desc'), limit(1))
  const tempRef = query(collection(getFirestore(), 'test_read'), orderBy('timestamp', 'desc'), limit(4))
  const [userArticles, loading, error] = useCollectionData(tempRef, { idField: 'id' })
  const [latestArticle] = useCollectionData(latest, { idField: 'id' })
  // const latest = userArticles.shift()
  // console.log('this is latest: ', latest)
  return (
    <>
      <div className='article-container'>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <LoadAnim/>}
        {latestArticle && latestArticle.map((object, idx) => {
          return (
            <Article
              key={object.id}
              name={object.name}
              article={object.article}
              time={object.timestamp.toDate()}
              profileImg={object.profileImg}
              colorProfile={idx}
            />
          )
        })}
        {userArticles && userArticles.map((dataObj, idx) => {
          return (

            <SubArticle
              key={dataObj.id}
              name={dataObj.name}
              article={dataObj.article}
              time={dataObj.timestamp.toDate()}
              profileImg={dataObj.profileImg}
              colorProfile={idx}
            />

          )
        })}
      </div>
    </>

  )
}

export default ArticleList
