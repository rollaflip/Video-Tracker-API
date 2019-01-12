const Joi = require('joi');
const express = require('express');
const app = express();
const { Video, View } = require('../db/models/video');

app.use(express.json());

const videos = [
  {
    id: 1,
    name: 'vid1',
    brand: 'Thrillist',
    published: Date.now(),
  },
  {
    id: 2,
    name: 'vid2',
    brand: 'Thrillist',
    published: Date.now(),
  },
  {
    id: 3,
    name: 'vid3',
    brand: 'Thrillist',
    published: Date.now(),
  },
];
const views = [
  {
    id: 1,
    date: Date.now(),
    videoID: 1,
  },
  {
    id: 2,
    date: Date.now(),
    videoID: 2,
  },
  {
    id: 3,
    date: Date.now(),
    videoID: 3,
  },
];
//validate data w/ Joi function
const validateVideo = video => {
  const schema = {
    name: Joi.string()
      .min(1)
      .required(),
    brand: Joi.string()
      .min(1)
      .required(),
    published: Joi.string()
      .min(1)
      .required(),
  };
  return Joi.validate(video, schema);
};

//validate view
const validateView = view => {
  const schema = {
    videoID: Joi.number()
      .min(1)
      .required(),
  };
  return Joi.validate(view, schema);
};

app.get('/', (req, res, next) => {
  res.send('get req hit');
});
//get all videos
app.get('/api/videos', async (req, res, next) => {
  try {
    const allVideos = await Video.findAll();
    res.send(allVideos);
    // res.send(videos);
  } catch (err) {
    next(err);
  }
});

//get video by id
app.get('/api/videos/:id', async (req, res, next) => {
  try {
    const video = videos.find(vid => vid.id === parseInt(req.params.id, 10));
    const countArr = views.filter(
      view => view.videoID === parseInt(req.params.id, 10)
    );
    video.count = countArr.length;

    // const video = await View.findById(req.params.id);
    if (!video)
      return res.status(404).send('The video with the given ID was not found');
    if (!countArr)
      return res.status(404).send('No views for the given VideoID were found');

    // const count = find all views with view.id return count and add to json under 'count'
    //const count = Views.findAndCountAll()
    // const view = videos.find(vid => vid.id === parseInt(req.params.id, 10));
    // const viewsById = await View.findAllById(req.params.id);
    //View.findAndCountAll({
    //     where: {
    //        videoID: req.params.id
    //     }
    //  })
    let duckduck = req.params;
    res.send({ message: 'Video report recieved.', video });
  } catch (err) {
    next(err);
  }
});

//create vid
app.post('/api/videos', async (req, res, next) => {
  try {
    const { error } = validateVideo(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // const newVideo = {
    //   id: videos.length + 1, //dummy db id for now
    //   name: req.body.name,
    // };
    // videos.push(newVideo); //to dummy db

    const newVideo = await Video.create(req.body);
    if (!newVideo) return res.status(500).send('Server or DB error');
    res.send({ message: 'Video successfully created.', newVideo });
  } catch (err) {
    next(err);
  }
});

//Track a view
app.post('/api/views', (req, res, next) => {
  try {
    const { error } = validateView(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newView = {
      id: views.length + 1, //dummy db id for now
      videoID: req.body.videoID,
    };
    views.push(newView); //to dummy db

    // const newView = await Video.create(req.body);
    // if (!newView)  return res.status(500).send('Server or DB error')

    // const [, affectedRows] = await Video.update(req.body, {
    //   where: {
    //     videoID: req.params.id
    //   },
    //   returning: true
    // }
    res.send({ message: 'Video successfully tracked.', newView });
  } catch (err) {
    next(err);
  }
});

const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`listening on port ${port}...`));

app.listen(port, () => console.log(`listening on ${port}`));
