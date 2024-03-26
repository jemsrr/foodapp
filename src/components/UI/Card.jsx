import React from 'react'

const Card = props => {
  return (
    <div className=' bg-black rounded-2xl text-white p-8'>{props.children}</div>
  )
}

export default Card