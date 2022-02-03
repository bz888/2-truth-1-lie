import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchDataDB } from '../actions/text'

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
  const tempRef = query(collection(getFirestore(), 'test_db'), orderBy('timestamp', 'desc'))
  const [userArticles, loading, error] = useCollectionData(tempRef)

  return (
    <>
      <h1>News</h1>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <LoadAnim/>}
        {userArticles && userArticles.map((dataObj, idx) => {
          return (
            <Article
              key={idx}
              name={dataObj.name}
              article={dataObj.article}
              time={dataObj.timestamp}
              profileImg={dataObj.profileImg}
            />
          )
        })}
      </div>
    </>

  )
}

export default ArticleList
