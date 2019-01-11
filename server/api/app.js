const Joi = require('joi');
const express = require('express');
const app = express();
const { Video, View } = require('../db/models/video');

app.use(express.json());

const videosArr = [
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
// app.get('/', (req, res, next) => {
//   res.send('get req hit');
// });

app.get('/api/videos', async (req, res, next) => {
  try {
    const videos = await Video.findAll();
    res.send(videos);
  } catch (err) {
    next(err);
  }
});

//app/videos/`id`
app.get('/api/videos/:id', async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    // if (!video) res.status(404).send('The video with the given ID was not found');
    res.send(video);
  } catch (err) {
    next(err);
  }
});

//create vid
app.post('/api/videos', async(req, res, next) => {
  try {
    const newVideo = await Video.create(req.body);
    if (newVideo) {
      const video = {
        id: videosArr.length + 1, //dummy db id for now
        name: req.body.name,
      };
      videosArr.push(video); //to dummy db
      res.send(newVideo);
    } else res.status(400).send('invalid information in body of request');
  } catch (err) {
    next(err);
  }
});

app.put('/api/vidoes/:id', async(req, res, next) => {

  const [, affectedRows] = await Video.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  }

  //look up video, if not exist, return 404
  const video = Video.findById(vid => vid.id === parseInt(req.params.id));
  if (!video) res.status(404).send('The video with the given ID was not found');
  //validate

  const result = Joi.validate(req.body);
  //if invalidd, return 400
  if (result.error) {
    //400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }
  //update video
  video.name = req.body.name;
  //return updated video
  res.send(video);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
