import React from 'react'

const Message = props => {
  console.log({ props })
  return (
    <>
      <h2 className='wlmessage'>{props.displayResult}</h2>
    </>
  )
}
export default Message
