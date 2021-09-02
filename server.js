// Dependencies

const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const uri = process.env.MONGODB_URI || 'mongodb://localhost/portfolio';

// Middleware

const app = express();
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
// app.use('/', router);/
app.use(express.static(path.resolve(__dirname, '../../client/build')));

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.GMAIL,
//     pass: process.env.GMAIL_PW,
//   },
// });

// contactEmail.verify(error => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Ready to send...');
//   };
// });

// Routes

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// router.post('/contact', (req, res) => {
//   console.log(req.body);
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;
//   const mail = {
//     from: name,
//     to: process.env.GMAIL,
//     subject: 'Portfolio Contact Submission',
//     html: `
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, error => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.json({ message: 'Email sent!' });
//     }
//   })
// });

// Server start

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});