import uniqueId from "lodash/uniqueId"
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Content from "../components/Content"
import LazyImage from '../components/LazyImage'
import './Home.sass'

export default ({ fields }) => {
  const {
    // title,
    subtitle,
    paragraph,
    buttonText,
    buttonLinkTo,
    // featuredImage,
    // body,
    // featuredVideo,
    featuredClients,
  } = fields

  const { carouselTitle, featuredClientsLogos } = featuredClients



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
          slidesToScroll: 2
        }
      }
    ]
  }

  return (
    <main className="Home" >
      <video playsInline muted loop autoPlay id="myVideo">
        <source src="/images/Film-set.mp4" type="video/mp4" />
      </video>

      <div className="intro-header">
        <div className="intro-content cc-homepage">
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="heading-jumbo intro-logo"
          >
            <img
              alt="Logo Of Cstop"
              className="logoImage"
              src="images/logos/cStopIconColor.png"
            />
            <img
              alt="Cstop- orange and blue text logo"
              className="logoText"
              style={{ paddingLeft: '20px' }}
              src="images/logos/cStopFullColorTextNew.svg"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="intro-text"
            style={{ overflow: 'hidden' }}
          >
            <div className="cc-bigger-white-light">
              <h5><Content source={subtitle} className="intro-subtitle"/></h5>
              <Content source={paragraph} className="intro-paragraph"/>
              <br />
            </div>
            <Link to={buttonLinkTo} className="Button inline-block">
              <div>{buttonText}</div>
            </Link>
          </div>
        </div>
        <div
          className="intro-subsection intro-text"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-anchor="top-top"
        >
          <div className="divider"></div>

          <a
            className="label cc-light subsection"
            style={{ textTransform: 'uppercase', color: 'white' , textDecoration:"none" }}
            href="/about/clients"
          >
            <h4 style={{alignSelf:"flex-start"}}>{carouselTitle}</h4>

            <div className="subsection-client-logos">
              <Slider {...settings}>
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
              </Slider>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
