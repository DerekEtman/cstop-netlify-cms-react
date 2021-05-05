const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const { app } = require('firebase-admin')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
})

transporter.verify(function (error, success) {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})

app.post('/send', (req, res, next) => {
    console.log("Inside Server /send ", req)
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message

  var mail = {
    from: name,
    to: email,
    text: message,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      })
    } else {
      res.json({
        status: 'success',
      })
    }
  })
})
