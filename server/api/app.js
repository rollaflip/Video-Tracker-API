const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('get req hit')
})


app.get('/api/videos', (req, res, next) => {
  res.send('[1,2,3,4]')
})



const port  = process.env.PORT || 3000

app.listen(port, ()=> console.log(`listening on port ${port}...`))


app.post('/', (req, res, next) => {

})
app.put('/', (req, res, next) => {

})
app.delete('/', (req, res, next) => {

})

