import React from 'react'
import Content from './Content'
import './TeamMemberCard.sass'

export default ({ fields }) => {
  const { name, employeeTitle, employeePicture, employeeQuote } = fields

  return (
    <section
      className="team-card-wrapper"
      style={{ backgroundImage: `url(${employeePicture})` }}
    >
        <div className="team-member-title-wrap">
          <Content className="team-member-quote" source={employeeQuote} />
          <div className="paragraph-light">{employeeTitle}</div>
          <div className="team-member-name">{name}</div>
        </div>

    </section>
  )
}
