import React, { Fragment, useState } from 'react'
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
// import Signin from './Signin'

function ArticleList ({ user, userError }) {
  // const auth = getAuth()
  // const [user, userLoading, userError] = useAuthState(auth)

  const tempRef = query(collection(getFirestore(), 'test_read'), orderBy('timestamp', 'desc'), limit(5))
  const [userArticles, loading, error] = useCollectionData(tempRef, { idField: 'id' })

  // const [signInState, setSignInState] = useState(false)

  // function handleClick (e) {
  //   e.preventDefault()
  //   setSignInState(true)
  //   // signOut(auth)
  // }
  // if (!user || userError || error) {
  //   return (
  //     <>
  //       {!signInState &&
  //       <div>
  //         <h1>Current user does not have the permissions to view this page, shame</h1>
  //         <button onClick={handleClick}>log in with valid user</button>
  //       </div>}
  //       {signInState && <Signin setSignInState={setSignInState}/>}
  //     </>
  //   )
  // }
  // if (user && !userError) {
  return (
    <>
      <h1 className='banner'>NEWS TODAY</h1>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <LoadAnim/>}
      {userArticles &&
            <div className='article-container'>
              <Article
                key={userArticles[0].id}
                name={userArticles[0].name}
                article={userArticles[0].article}
                time={userArticles[0].timestamp.toDate()}
                profileImg={userArticles[0].profileImg}
                idx={userArticles[0].idx}
              />
            </div>
      }
      {userArticles &&
        <div className='subArticle-container'>
          {userArticles.map((dataObj, idx) => {
            if (idx !== 0) {
              return (
                <Fragment>
                  <SubArticle
                    key={dataObj.id + idx}
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
