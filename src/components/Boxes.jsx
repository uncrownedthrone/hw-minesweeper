import React from 'react'

const Boxes = props => {
  return (
    <td
      onClick={props.leftClick}
      onContextMenu={e => {
        e.preventDefault()
        props.rightClick()
      }}
    >
      {props.display}
    </td>
  )
}

export default Boxes
