import React from 'react'

export default function Button ({ checkInput, handleClick, bannedState, input }) {
  if (checkInput === false && bannedState === true) {
    return (
      <div className='bannedState'>Some words you have used have been flagged as innapropriate</div>
    )
  } else if (checkInput === true && bannedState === true) {
    return (
      <div className='bannedState'>Some words you have used have been flagged as innapropriate</div>
    )
  } else if (checkInput === true && bannedState === false) {
    return (
      <button className='button-31' onClick={handleClick}>submit</button>
    )
  } else if (checkInput === false && bannedState === false) {
    return (
      <>
      </>
    )
  }
}
