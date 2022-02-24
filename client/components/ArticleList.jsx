import React, { Fragment } from 'react'
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
// import Signin from './Signin'

function ArticleList () {
  const tempRef = query(collection(getFirestore(), 'test_read'), orderBy('timestamp', 'desc'), limit(4))
  const history = useHistory()
  const [userArticles, loading, error] = useCollectionData(tempRef, { idField: 'id' })
  const { signOutFunc, auth, user } = useAuth()
  async function handleClick (e) {
    e.preventDefault()

    try {
      const val = await signOutFunc(auth)
      console.log(val)
      console.log(user)
    } catch {
      alert('failed to signout something went wrong')
    } finally {
      history.push('/login')
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
        <span className='banner'><span id='white'>LATEST &nbsp;&nbsp;</span><span>&nbsp;&nbsp;TRUTHS</span></span>
        <div className='article-container'>
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
