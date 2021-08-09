const express = require('express')
const consign = require('consign')
const db = require('./config/db')
const app = express()
app.db = db

consign()
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.listen(3000, (req, res) => {
  console.log('Backend rodando na porta 3000...');
})

app.get('/', (req, res) => {
  res.send('Backend rodando na porta 3000...')
})