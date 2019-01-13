# Video Tracker API

#### By Ian Knepper

After you have Video Tracker API installed and running, you are ready to go!

API end point for videos: http://localhost:3000/api/videos
API end pont for views: http://localhost:3000/api/views

Features include:
- Create Video: Adds new video to DB
- Track Video View: Adds view to DB
- Get Video Report: Returns info on a video including view count

# Create a new video:
Required Parameters
- name: video name. MUST be string
- brand: brand that owns this video. MUST be string
- published: date the video is being published. Must be integer

* The following format for 'published' is REQUIRED: yyyymmdd
* Use this code to return a formatted date at time of creation:
```
new Date().toISOString().slice(0, 10).replace(/-/g, "")
```

A post request for creating a new video returns the following format:
{
    "message": "Video successfully created.",
    "newVideo": {
        "id": 6,
        "name": "Water Hydrates",
        "brand": "This is Now",
        "published": 20190113
    }
}

# Track a video view:
Required Parameters
- videoID: video ID of video watched. MUST be integer

A post request for a view returns the following format:
{
    "message": "Video successfully tracked.",
    "newView": {
        "id": 5,
        "videoID": 3,
        "date": 20190113
    }
}

# Get a report of video views:
Required Parameters
- id: ID of video requested. MUST be integer

A get request for a video report returns the following format:
{
    "message": "Video report recieved.",
    "videoReport": {
        "name": "vid1",
        "brand": "Thrillist",
        "published": 2342,
        "count": 1
    }
}

## Authors
- **Ian Knepper** - _Initial work_ - (https://github.com/rollaflip)
