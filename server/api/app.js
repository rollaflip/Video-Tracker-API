const Joi = require('joi');
const express = require('express');
const app = express();
const { Video, View } = require('../db/models/video');

app.use(express.json());

//Validate video req.body w/ Joi function
const validateVideo = video => {
  const schema = {
    name: Joi.string()
      .min(1)
      .required(),
    brand: Joi.string()
      .min(1)
      .required(),
    published: Joi.number()
      .min(1)
      .required(),
  };
  return Joi.validate(video, schema);
};

//Validate req.body view
const validateView = view => {
  const schema = {
    videoID: Joi.number()
      .min(1)
      .required(),
  };
  return Joi.validate(view, schema);
};

app.get('/api/videos', async (req, res, next) => {
  const videos = await Video.findAll();
  res.send(videos);
});

//Create video
app.post('/api/videos', async (req, res, next) => {
  try {
    const { error } = validateVideo(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newVideo = await Video.create(req.body);
    if (!newVideo) return res.status(500).send('Server or DB error');

    res.send({ message: 'Video successfully created.', newVideo });
  } catch (err) {
    next(err);
  }
});

//Track a view
app.post('/api/views', async (req, res, next) => {
  try {
    const { error } = validateView(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    req.body.date = new Date()
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, '');

    const newView = await View.create(req.body);
    if (!newView) return res.status(500).send('Server or DB error');

    res.send({ message: 'Video successfully tracked.', newView });
  } catch (err) {
    next(err);
  }
});

//Get video report by id
app.get('/api/videos/:id', async (req, res, next) => {
  try {
    const video = await Video.findByPk(req.params.id);
    if (!video)
      return res.status(404).send('The video with the given ID was not found');

    const count = await View.count({ where: { videoID: req.params.id } });
    if (!count)
      return res.status(404).send('No views for the given videoID were found');

    const videoReport = {
      name: video.dataValues.name,
      brand: video.dataValues.brand,
      published: video.dataValues.published,
      count: count,
    };
    // video.dataValues.count = count;

    res.send({ message: 'Video report recieved.', videoReport });
  } catch (err) {
    next(err);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
