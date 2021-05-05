import { uniqueId } from 'lodash'
import React from 'react'
import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import './Services.sass'

export default ({ fields }) => {
  const { title, subTitle, featuredImage, section1, section2 } = fields

  const {
    serviceBackground,
    belowServicesBody,
    belowServicesTitle,
    section2Body,
    section2Subtitle,
    section2Title,
    smallSections,
  } = section2

  const { section1Title, section1Body } = section1

  const backgroundImage = () => {
    return serviceBackground === !undefined
      ? `URL(${serviceBackground})`
      : `none`
  }

  return (
    <div className="Service">
      <PageHeader
        title={title}
        subtitle={subTitle}
        backgroundImage={featuredImage}
        className="service-header"
        opacity="0.8"
      />

      <div className="container">
        <div className="story-wrap">
          <div className="heading-jumbo-small">{section1Title}</div>
          <Content className="paragraph-dark" source={section1Body} />
        </div>
      </div>

      <div
        className="section service-container"
        style={{ backgroundImage: { backgroundImage } }}
        data-aos="fade-up"
      >
        <div className="container ">
          <div className="section-heading-wrap">
            <div className="label">{section2Subtitle}</div>
            <h2>{section2Title}</h2>
            <Content source={section2Body} />
          </div>

          <div className="our-services-grid">
            {smallSections.map((card) => {
              return (
                <div key={uniqueId(`sv_`)} className="service-card" >
                  <img
                    src={
                      card.serviceIconImage
                        ? card.serviceIconImage
                        : 'images/Icon-1.svg'
                    }
                    width="100"
                    alt={`Badge looking icon with ${card.title} written on it`}
                    className="service-icon"
                  />
                  <div className="paragraph-bigger">{card.title}</div>
                  <Content className="paragraph-light" source={card.body} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="container story-wrap">
          <h2 className="heading-jumbo-small">{belowServicesTitle}</h2>
          <Content src={belowServicesBody} className="paragraph-dark" />
          <a href="mailto:solutions@c-stop.services" className="Button">
            Talk to a Specialist
          </a>
        </div>
      </div>
    </div>
  )
}
