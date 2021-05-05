import React from 'react'

import './Logo.sass'

export default ({ inverted, imgSrc }) => (
  <div
    className='Logo'
    style={{
      backgroundImage: {imgSrc}
    }}
  />
)
