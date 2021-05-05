import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import Form from './FormPage'
import './FormRouter.sass'

export default (props, { match })  => {
  const [formList, setFormList] = useState([])
  const [findForm, setFindForm] = useState()
  const { url } = useRouteMatch()
  
  // let apiKey = process.env.REACT_APP_JOTFORM_API_READ

  // console.log(apiKey);
  useEffect(() => {
    Axios.get(`https://api.jotform.com/user/forms?apiKey=1b7a59414b7860edcfe2a63477d857bf`)
      .then((resp) => {
        let form = resp.data.content
        // console.log(resp)
        setFormList(form)
      })
      .then()
      .catch((err) => console.log(err))

    // eslint-disable-next-line
  }, [])

  const handleFormSearch = (event) => {
    props.history.push(`/forms/${findForm}`)
  }

  const handleChange = (event) => {
    setFindForm(event.target.value)
  }

  return (
    <div className="form-container">
      <Route path={`${url}/:id`}>
        <Form data={formList} />
      </Route>

      <Route exact path={`${url}`}>
        <div className="form-search-container">
          <h2
            className="heading-small"
            style={{ alignSelf: 'center', marginBottom: '.5rem' }}
          >
            Hey There! Trying to find a form?
          </h2>
          <h3
            className="heading-small"
            style={{ alignSelf: 'center', marginBottom: '2rem' }}
          >
            Please enter your form number below
          </h3>
          <span>
            <input
              type="text"
              name="formID"
              onChange={handleChange}
              value={findForm}
              placeholder="form ID"
            />
            <button type="submit" onClick={handleFormSearch}>
              Submit
            </button>
          </span>
        </div>
      </Route>
    </div>
  )
}
