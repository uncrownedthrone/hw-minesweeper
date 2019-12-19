import React from 'react'
import Cells from './Cells'

const Boxes = props => {
  return (
    <td
      onClick={props.leftClick}
      onContextMenu={e => {
        e.preventDefault()
        props.rightClick()
      }}
    >
      <Cells data={props.display} />
    </td>
  )
}

export default Boxes
