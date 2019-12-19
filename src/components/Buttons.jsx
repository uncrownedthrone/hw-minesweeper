import React from 'react'

const Buttons = props => {
  return (
    <>
      <section className='gameButtons'>
        <button onClick={props.easyLevel}>Easy </button>
        <button onClick={props.mediumLevel}>Medium</button>
        <button onClick={props.hardLevel}>Hard</button>
      </section>
    </>
  )
}

export default Buttons
