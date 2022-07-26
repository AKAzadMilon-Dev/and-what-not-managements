const express = require('express')
const app = express()
var cors = require('cors')


app.use(cors())

app.get('/', function (req, res) {
  res.send('Milon World')
})

app.listen(8000,()=>{
    console.log("port 8000 connect")
})