import React from 'react'

const Cells = props => {
  if (props.data === '#') {
    return '💣'
  } else if (props.data === 'F') {
    return '🚩'
  } else if (props.data === '_') {
    return ' '
  } else {
    return <>{props.data}</>
  }
}

export default Cells
