import uniqueId from 'lodash/uniqueId'
import React from 'react'
import Slider from 'react-slick'
import './ClientLogos.sass'
import LazyImage from './LazyImage'

export default function ClientLogos({ data }) {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <>
      <div className="section-heading-wrap">
        <h2 className="heading-jumbo-small">SOME OF OUR SATISFIED CLIENTS</h2>
          <a href="/about/clients">View More</a>
      </div>

      <a href="/about/clients">
        <Slider {...settings}>
          {data.map((client, index, array) => {
            return (
              <div
              className="logo-wrapper"
              key={uniqueId(`${client.companyName}_${index}`)}
              >
                <LazyImage
                  className="client-logo-img"
                  id={uniqueId(`${client.companyName}_inner_${index}`)}
                  src={client.image}
                  alt={client.companyName}
                  width="100px"
                  height="100px"
                />
              </div>
            )
          })}
        </Slider>
      </a>

      {/* <Slider {...settings}>
        {featuredClientsLogos.map((image) => {
          return (
            <LazyImage
              id={uniqueId(`ft_${image.companyName}_`)}
              src={image.companyLogo}
              alt={image.companyName}
              key={uniqueId(`ft_${image.companyName}_`)}
              className="intro-client-logo"
            />
          )
        })}
      </Slider> */}
    </>
  )
}
