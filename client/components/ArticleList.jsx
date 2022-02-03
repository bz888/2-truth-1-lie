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

function ArticleList () {
  // const dispatch = useDispatch()
  // const [dataArr, setDataArr] = useState([])

  // const articleData = useSelector(state => state.dbGet)
  // console.log('articleData', articleData)

  const tempRef = query(collection(getFirestore(), 'test_input'), orderBy('timestamp', 'desc'))
  const [userArticles] = useCollectionData(tempRef)

  return (
    <>
      <h1>News</h1>
      <div>
        {userArticles && userArticles.map((dataObj, idx) => {
          return (
            <Article
              key={idx}
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
