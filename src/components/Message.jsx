import React from 'react'

const Message = props => {
  if (props.displayResult === 'new') {
    return <h2 className='wlmessage'>Choose A Difficulty</h2>
  } else if (props.displayResult === 'playing') {
    return <h2 className='wlmessage'>You're Playing!</h2>
  } else if (props.displayResult === 'lost') {
    return <h2 className='wlmessage'>You lose! Try again!</h2>
  } else if (props.displayResult === 'won') {
    return <h2 className='wlmessage'>'You won! Play Again?'</h2>
  } else {
    return <h2 className='wlmessage'>{props.displayResult}</h2>
  }
}

export default Message
