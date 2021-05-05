import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UseIframe from './useIframe'

export default function Form({ data }) {
  const [test, setTest] = useState()
  const { id } = useParams()
  const form = data.find((p) => p.id === id)

  useEffect(() => {
    setTest(form)
  }, [form])

  let formData

  if (form) {
    formData = <UseIframe {...test} />
  } else {
    formData = <h2> Sorry. form doesn't exist </h2>
  }

  return <div>{formData}</div>
}
