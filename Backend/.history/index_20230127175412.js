const express = require('express')
const connecttoMongo = require('./db');

const port = 5000

const app = express()

app.use(express.json())


connecttoMongo();

//available Routes
app.use('/auth', require('./routes/User'));
app.use('/products',require('./routes/Product'));

app.listen(port, () => {
  console.log(`shopping app listening on http://localhost:${port}`)
})
