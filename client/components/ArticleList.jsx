import React, { Fragment, useEffect } from 'react'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit
} from 'firebase/firestore'
import Article from './Article'
import SubArticle from './SubArticle'
import Image from './Image'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import LoadAnim from './LoadAnim'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ArticleList () {
  const tempRef = query(collection(getFirestore(), 'db_prod'), orderBy('timestamp', 'desc'), limit(4))
  const history = useHistory()
  const [userArticles, loading, error] = useCollectionData(tempRef, { idField: 'id' })
  const { signOutFunc, auth, user } = useAuth()

  // useEffect(() => {
  //   if (user === undefined) {
  //     history.push('/')
  //   }
  // }, [])

  async function handleClick (e) {
    e.preventDefault()

    try {
      await signOutFunc(auth)
    } catch {
      alert('failed to signout something went wrong')
    } finally {
      history.push('/')
    }
  }
  return (
    <>
      {error &&
      <div className='errorMessage'>
        <strong>Error: {JSON.stringify(error)}</strong>
        <button onClick={handleClick}>do it again</button>
      </div>
      }
      {loading && <LoadAnim/>}
      {userArticles &&
      <>
        {/* <div className='banner'>

          <div>TRUTHS</div>
        </div> */}
        <div className='article-container'>
          <div className='banner' id='white'>LATEST</div>
          <Article
            // key={userArticles[0].id}
            name={userArticles[0].name}
            article={userArticles[0].article}
            time={userArticles[0].timestamp.toDate()}
            profileImg={userArticles[0].profileImg}
            idx={userArticles[0].idx}
          />
        </div>
      </>
      }
      {userArticles &&
        <div className='subArticle-container'>
          <div className='banner'>TRUTHS</div>
          {userArticles.map((dataObj, idx) => {
            if (idx !== 0) {
              return (
                <Fragment key={dataObj.id }>
                  <SubArticle
                    name={dataObj.name}
                    article={dataObj.article}
                    time={dataObj.timestamp.toDate()}
                    idx={idx}
                  />
                  <Image
                    key={dataObj.id + 'image' + idx}
                    idx={idx}
                    profileImg={dataObj.profileImg}
                  />
                </Fragment>

              )
            }
          })}
        </div>
      }
    </>
  )
  // }
}

export default ArticleList
