# Video Tracker API

#### By Ian Knepper

After you have Video Tracker API installed and running, you are ready to go!

API endpoint for videos: http://localhost:3000/api/videos
API endpoint for views: http://localhost:3000/api/views

Features include:
- Create Video: Adds new video to DB
- Track Video View: Adds view to DB
- Get Video Report: Returns info on a video including view count

## Create a new video:
Required Parameters
- name: video name. MUST be string
- brand: brand that owns this video. MUST be string
- published: date the video is being published. Must be integer

* The following format for 'published' is REQUIRED: yyyy-MM-dd
ie: 2019-01-13


A post request for creating a new video returns the following format:
{
    "message": "Video successfully created.",
    "newVideo": {
        "id": 4,
        "name": "Dracula Cooks With Garlic",
        "brand": "Thrillist",
        "published": "2019-01-13"
    }
}

## Track a video view:
Required Parameters
- videoID: video ID of video watched. MUST be integer

A post request for a view returns the following format:
{
    "message": "Video successfully tracked.",
    "newView": {
        "id": 10,
        "videoID": 3,
        "updatedAt": "2019-01-13",
        "createdAt": "2019-01-13"
    }
}

## Get a report of video views:
Required Parameters
- id: ID of video requested. MUST be integer
ie: http://localhost:3000/api/videos/1

Optional query parameter
- date. Limit views to those that occurred on or after this date
ie: http://localhost:3000/api/videos/1?date=2018-01-13

A get request for a video report returns the following format:
{
    "message": "Video report received.",
    "videoReport": {
        "name": "Water Hydrates",
        "brand": "Thrillist",
        "published": "2018-01-13",
        "count": 1
    }
}

## Authors
- **Ian Knepper** - _Initial work_ - (https://github.com/rollaflip)
