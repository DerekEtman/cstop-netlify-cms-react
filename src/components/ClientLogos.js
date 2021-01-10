import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './ClientLogos.sass'
import LazyImage from './LazyImage'

export default function ClientLogos({ data }) {
  const settings = {
    className: 'center',
    dots: true,
    // centerMode: true,
    infinite: true,
    // centerPadding: '20px',
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    // slides:3,
    slidesPerRow: 1,
    width: "100%"
  }

  return (
    <>
      <div className="section-heading-wrap">
        <h2 className="heading-jumbo-small">OUR CLIENTS</h2>
      </div>

      {/* <div style={{ width: '80%', margin: 'auto' }}> */}
        <Slider {...settings}>
          {data.map((client) => {
            return (
              
              <div className="logo-wrapper">
                <LazyImage
                  className="client-logo-img"
                  src={client.image}
                  alt={client.companyName}
                />
              </div>
            )
          })}
        </Slider>
      {/* </div> */}
      {/* <div className="divider"></div> */}
    </>
  )
}
