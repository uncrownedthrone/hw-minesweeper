import React from 'react'

const Cells = prop => {
  if (prop.data === '#') {
    return '💣'
  } else if (prop.data === 'F') {
    return '🚩'
  } else if (props.data === '_') {
    return ' '
  } else {
    return <>{prop.data}</>
  }
}

export default Cells
