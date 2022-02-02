// import { collection, doc, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataDB } from '../actions/text'
// import { getFirebaseConfig } from '../src/firebase-config'
import Article from './Article'

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';

// import { collection, query, orderBy, getFirestore, onSnapshot, QuerySnapshot } from 'firebase/firestore'
// import firebase from 'firebase/app'

// import { useCollectionData } from 'react-firebase-hooks/firestore'

function ArticleList () {
  const dispatch = useDispatch()
  const [dataArr, setDataArr] = useState([])
  const [toggle, setToggle] = useState(false)
  const articleData = useSelector(state => state.dbGet)

  // useEffect(() => {
  //   getArticles()
  //   console.log(dbData)
  // }, [articleData.slice(-1)[0].id])

  useEffect(() => {
    getArticles()
    // getFirebaseArticles()
    // refresher()
  }, [toggle])

  function getArticles () {
    // const articleRef = collection('user_input')
    // articleRef.onSnapshot((querySnapshot) => {
    //   const items = []
    //   querySnapshot.forEach(ele => {
    //     items.push(ele.data)
    //   })
    //   setDataArr(items)
    // })
    // const [articlesData] = useCollectionData()
    const date = new Date()
    dispatch(fetchDataDB())
    // setDataArr(articleData)
    console.log('getArticles hit at ', date)
  }

  // const getFirebaseArticles = async () => {
  //   const data = await getDocs(ref)
  //   setDataArr(data.docs)
  //   console.log(dataArr)
  // }

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
