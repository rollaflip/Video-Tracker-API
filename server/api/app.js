const express = require('express')
const app = express()

const videos = [
  {id: 1, name: 'vid1', brand: 'Thrillist', published: Date.now(), count:5},
  {id: 2, name: 'vid2', brand: 'Thrillist', published: Date.now(), count:5},
  {id: 3, name: 'vid3', brand: 'Thrillist', published: Date.now(), count:5},

]
app.get('/', (req, res, next) => {
  res.send('get req hit')
})


app.get('/api/videos', (req, res, next) => {
  res.send('[1,2,3,4]')
})

//app/videos/`id`
app.get('/api/videos/:id', (req, res, next) => {
  res.send(req.params.id)
})


const port  = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}...`))

//create vid
app.post('/', (req, res, next) => {
})

//add a view to video by id
app.put('/', (req, res, next) => {
})

