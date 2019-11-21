import React from 'react'

const Boxes = () => {
  return (
    <td
      onClick={this.props.doTheClick}
      onContextMenu={e => {
        this.props.rightClick()
        e.preventDefault()
      }}
    >
      {this.props.display}
    </td>
  )
}

export default Boxes
