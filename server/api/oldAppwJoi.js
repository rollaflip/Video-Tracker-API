const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const videos = [
  {
    id: 1,
    name: 'vid1',
    brand: 'Thrillist',
    published: Date.now(),
    viewCount: 5,
  },
  {
    id: 2,
    name: 'vid2',
    brand: 'Thrillist',
    published: Date.now(),
    viewCount: 5,
  },
  {
    id: 3,
    name: 'vid3',
    brand: 'Thrillist',
    published: Date.now(),
    viewCount: 5,
  },
];
app.get('/', (req, res, next) => {
  res.send('get req hit');
});

app.get('/api/videos', (req, res, next) => {
  res.send(videos);
});

//app/videos/`id`
app.get('/api/videos/:id', (req, res, next) => {
  const video = videos.find(vid => vid.id === parseInt(req.params.id));
  if (!video) res.status(404).send('The video with the given ID was not found');
  else res.send(video);
});

//create vid
app.post('/api/videos', (req, res, next) => {
  const schema = {
    name: Joi.string().min(1).required(),
    brand: Joi.string().min(1).required(),
    published: Joi.string().min(1).required(),
  };

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    //400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const video = {
    id: videos.length + 1, //dummy db id for now
    name: req.body.name,
  };
  videos.push(video); //to dummy db
  res.send(video);
});

//add a view to video by id
app.put('/api/vidoes/:id', (req, res, next) => {
  //look up video, if not exist, return 404
  const video = videos.find(vid => vid.id === parseInt(req.params.id));
  if (!video) res.status(404).send('The video with the given ID was not found');
  //validate

  const schema = {
    name: Joi.string().min(1).required(),
    brand: Joi.string().min(1).required(),
    published: Joi.string().min(1).required(),
  };

  const result = Joi.validate(req.body, schema);
  //if invalidd, return 400
  if (result.error) {
    //400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }
  //update video
  video.name = req.body.name
  //return updated video
  res.send(video)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

