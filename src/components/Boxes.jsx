import React from 'react'

const Boxes = props => {
  return (
    <td
      onClick={props.doTheClick}
      onContextMenu={e => {
        props.leftClick()
        props.rightClick()
        e.preventDefault()
      }}
    >
      {props.display}
    </td>
  )
}

export default Boxes
