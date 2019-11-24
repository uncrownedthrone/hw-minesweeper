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
// cannot get styling for cells to work
// const getValue = props => {
//   if (!props.isRevealed) {
//     return props.value.isFlagged ? '🚩' : null
//   }
//   if (props.isMine) {
//     return '💣'
//   }
//   if (props.neighbour === 0) {
//     return null
//   }
//   return props.neighbor
// }

export default Boxes
