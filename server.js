const express = require('express')
const app = express()

app.use(express.static('www'))
// routing: https://expressjs.com/en/guide/routing.html
app.get('/api', (req, res) => res.json('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))