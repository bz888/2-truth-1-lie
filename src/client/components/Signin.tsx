import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
// import LoadAnim from './LoadAnim'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import { validateHuman } from '../api/api'

interface signInState {
  email: string
  password: string
}

interface signInProp {
  loginState: string
}

export default function Signin ({ loginState }: signInProp) {
  const [validHuman, setValidHuman] = useState()
  const [signInVal, setSignInVal] = useState<signInState>({
    email: '',
    password: ''
  })
  const { signIn, user, error, loading } = useAuth()
  const navigate = useNavigate()
  // const reRef = useRef()

  async function handleClick (e: SyntheticEvent) {
    e.preventDefault()
    try {
      await signIn(signInVal.email, signInVal.password)
      if (loginState === 'admin') {
        navigate('/53e61336bb49ec978968786b07dea50b')
      } else {
        navigate('landing')
      }
    } catch (err) {
      console.error(err)
    }
  }
  async function onChange (val: string) {
    const validateVal = await validateHuman(val)
    setValidHuman(validateVal)
  }

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    const name = e.target.name
    setSignInVal({
      ...signInVal,
      [name]: value
    })
  }

  return (
    <div className='signIn-body'>
      <div className='signIn-div'>
        <div className="padlock">
          <div className="padlock__hook">
            <div className="padlock__hook-body"></div>
            <div className="padlock__hook-body"></div>
          </div>
          <div className="padlock__body">
            <div className="padlock__face">
              <div className="padlock__eye padlock__eye--left"></div>
              <div className="padlock__eye padlock__eye--right"></div>
              <div className="padlock__mouth padlock__mouth--one"></div>
              <div className="padlock__mouth padlock__mouth--two"></div>
              <div className="padlock__mouth padlock__mouth--three"></div>
            </div>
          </div>
        </div>
        {/* {loading && <LoadAnim/>} */}
        {error && <strong>The password you entered was incorrect</strong>}
        {
          !user &&
          <form className='signIn-form'>
            {/* <input
              id='inputEmail'
              value={signInVal.email}
              name='email'
              onChange={handleChange}
              placeholder='Enter your Email'
              type='email'
              required="required"/> */}

            <label htmlFor='password'>Password</label>
            <input
              title='did you forget your password?'
              id='inputPass'
              value={signInVal.password}
              name='password'
              onChange={handleChange}
              placeholder='Enter your password'
              type='password'
              // required="required"
            />
            <ReCAPTCHA
              // ref={reRef}
              sitekey={process.env.RECAPTCHA_KEY}
              onChange={validHuman}
              // size='normal'
            />
            {validHuman &&
              <>
                <input disabled={loading} id="login" type="checkbox" onClick={handleClick}/>
                <label className='login-button' htmlFor='login'>
                  <span>Enter</span>
                  <svg>
                    <path d="M10,17V14H3V10H10V7L15,12L10,17M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16H7V20H17V4H7V8H5V4A2,2 0 0,1 7,2Z"></path>
                  </svg>
                </label>
              </>
            }
          </form>
        }
      </div>
    </div>
  )
}
