import React from 'react'
import {
  getFirestore,
  collection,
  query,
  orderBy
} from 'firebase/firestore'
import Article from './Article'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import LoadAnim from './LoadAnim'

function ArticleList () {
  const tempRef = query(collection(getFirestore(), 'test_db_2'), orderBy('timestamp', 'desc'))
  const [userArticles, loading, error] = useCollectionData(tempRef)
  console.log(userArticles)
  return (
    <>
      <div className='article-container'>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <LoadAnim/>}
        {userArticles && userArticles.map((dataObj, idx) => {
          return (

            <Article
              key={dataObj.id}
              name={dataObj.name}
              article={dataObj.article}
              time={dataObj.timestamp}
              profileImg={dataObj.profileImg}
              colorID={idx}
            />

          )
        })}
      </div>
    </>

  )
}

export default ArticleList
