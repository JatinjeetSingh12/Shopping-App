const express = require('express')
const connecttoMongo = require('./db');

const port = 5000

const app = express()

app.use(express.json())


connecttoMongo();

//available Routes
app.use('/auth', require('./routes/User'))
app.use()

app.listen(port, () => {
  console.log(`Food app listening on http://localhost:${port}`)
})
