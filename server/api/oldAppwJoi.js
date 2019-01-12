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
//validate data w/ Joi function
const validateVideo = video => {
  const schema = {
    name: Joi.string()
      .min(1)
      .required(),
    // brand: Joi.string()
    //   .min(1)
    //   .required(),
    // published: Joi.string()
    //   .min(1)
    //   .required(),
  };
  return Joi.validate(video, schema);
};

app.get('/', (req, res, next) => {
  res.send('get req hit');
});
//get all videos
app.get('/api/videos', async(req, res, next) => {
  try{
    // const allVideos = await Videos.findAll()
    // res.send(allVideos);
    res.send(videos)
  } catch(err){
    next(err)
  }

});

//get video by id
app.get('/api/videos/:id', async (req, res, next) => {
  try{
    const video = videos.find(vid => vid.id === parseInt(req.params.id,10));
    // const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).send('The video with the given ID was not found');
    res.send(video);

  }catch(err){
    next(err)
  }
});


//create vid
app.post('/api/videos', (req, res, next) => {
  try{
    const { error } = validateVideo(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newVideo = {
      id: videos.length + 1, //dummy db id for now
      name: req.body.name,
    };
    videos.push(newVideo); //to dummy db

    // const newVideo = await Video.create(req.body);
    // if (!newVideo)  return res.status(500).send('Server or DB error')

    res.send(newVideo);

  }catch(err){ next(err)}
});

//edit video
app.put('/api/videos/:id', (req, res, next) => {
  try{
    const video = videos.find(vid => vid.id === parseInt(req.params.id,10));
    if (!video) return res.status(404).send('A video with the given ID was not found');

    const { error } = validateVideo(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    video.name = req.body.name;

    // const [, affectedRows] = await Video.update(req.body, {
    //   where: {
    //     id: req.params.id
    //   },
    //   returning: true
    // }

    res.send(video);

  }catch(err){
    next(err)
  }
});

app.delete('/api/videos/:id', (req, res, next) => {
  try{

    const video = videos.find(vid => vid.id === parseInt(req.params.id,10));
    if (!video) return res.status(404).send('The video with the given ID was not found');

    const index = videos.indexOf(video); //finding in dummy db
    videos.splice(index, 1); // deleting from dummy db

    // const deletedAdress = await Address.destroy({
    //   where: {
    //     id: req.params.id
    //   }
    // })
    // if (deletedAdress) {
    //   res.sendStatus(204).send('video deleted')
    // }

    let addMessage = `${JSON.stringify(video)} ITEM DELETED`
    res.send(addMessage);

  } catch(err){
    res.send(err)
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
