import { uniqueId } from 'lodash'
import React from 'react'
import LazyImage from '../components/LazyImage'
import './Clients.sass'

export default ({ fields }) => {
  const {
    brandLogos,
    industryLogos,
    productionCompanyLogos,
    healthLogos,
  } = fields

  const openTab = (event, tabName) => {
    event.preventDefault()
    var i, x, tablinks

    x = document.getElementsByClassName('clients-list')

    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }

    tablinks = document.getElementsByClassName('client-nav-button')

    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' selected', '')
    }

    document.getElementById(tabName).style.display = 'block'
    event.currentTarget.className += ' selected'
  }

  const arrayToGrid = (section) => {
    return (
      <div className="client-logo-grid">
        {section.map((logo, index) => {
          return (
            <LazyImage
              src={logo.brandLogo}
              alt={logo.brandName}
              className="client-logo"
              key={uniqueId(`${logo.brandName}_${index}`)}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="Clients container">

      {/* <div className="container"> */}
        {/* <div className="story-wrap" style={{"margin-bottom:"}}> */}
        {/* </div> */}
      <div className="clients-nav-container">
        <h3>Clients</h3>
        <div className="clients-nav-buttons">
      {/* </div> */}
          <a
            className="client-nav-button"
            onClick={(e) => openTab(e, 'brands')}
            href="#brands"
          >
            Brands
          </a>
          <a
            className="client-nav-button"
            onClick={(e) => openTab(e, 'productionCompanies')}
            href="#productionCompanies"
          >
            Production Companies
          </a>
          <a
            className="client-nav-button"
            onClick={(e) => openTab(e, 'industryLeaders')}
            href="#industryLeaders"
          >
            Industry Leaders
          </a>
          <a
            className="client-nav-button"
            onClick={(e) => openTab(e, 'healthOrganizations')}
            href="#healthOrganizations"
          >
            Health Organizations
          </a>
          {/* <a
            className="client-nav-button"
            onClick={(e) => openTab(e, '')}
            href="#all"
          >
            All
          </a> */}
        </div>
      </div>

      <div id="brands" className="clients-list">
        {arrayToGrid(brandLogos)}
      </div>

      <div id="productionCompanies" className="clients-list">
        {arrayToGrid(productionCompanyLogos)}
      </div>

      <div id="industryLeaders" className="clients-list">
        {arrayToGrid(industryLogos)}
      </div>

      <div id="healthOrganizations" className="clients-list">
        {arrayToGrid(healthLogos)}
      </div>
    </div>
  )
}
