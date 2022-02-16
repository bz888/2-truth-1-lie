import React, { useEffect, useState } from 'react'

export default function Button ({ checkInput, handleClick, bannedState, input }) {
  // const [checkVal, setCheckVal] = useState(2)
  // useEffect(() => {
  //   if (checkInput === true && bannedState === false) {
  //     setCheckVal(0)
  //   } else if (checkInput === false && bannedState === true) {
  //     setCheckVal(1)
  //   } else if (checkInput === true && bannedState === true) {
  //     setCheckVal(1)
  //   }
  // }, [input])
  if (checkInput === false && bannedState === true) {
    // console.log(input)
    // console.log('checkinput: ', checkInput, 'bannedState: ', bannedState)
    return (
      <div className='bannedState'>Please be dont use bad words lol</div>
    )
  } else if (checkInput === true && bannedState === true) {
    // console.log(input)
    // console.log('checkinput: ', checkInput, 'bannedState: ', bannedState)
    return (
      <div className='bannedState'>Please be dont use bad words lol</div>
    )
  } else if (checkInput === true && bannedState === false) {
    // console.log(input)
    // console.log('checkinput: ', checkInput, 'bannedState: ', bannedState)
    return (
      <button className='button-31' onClick={handleClick}>submit</button>
    )
  } else if (checkInput === false && bannedState === false) {
    return (
      <>
      </>
    )
  }
  // switch (checkVal) {
  //   case 0:
  //     console.log(checkVal)
  //     return (
  //       <button className='button-31' onClick={handleClick}>submit</button>
  //     )
  //   case 1:
  //     console.log(checkVal)
  //     return (
  //       <div className='bannedState'>Please be dont use bad words lol</div>
  //     )
  //   default:
  //     return (
  //       <>
  //       </>
  //     )
  // }
}
