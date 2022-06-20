const router = require("express").Router();
const { createAlbum } = require("../models/album");
const Track = require("../models/track")
const Album = require("../models/album")

//? http://localhost:5000/track?album_id=1
// list all the songs from an album
router.get("/", (req, res) => {
    let albumId
    if (req.query !== undefined) {
        albumId = req.query.album_id
    }
    Track.findTracks(albumId).then((foundTracks) => {
        console.log("object");
        if (!foundTracks) return Promise.reject("MISSING_TRACKS")
        res.status(201).json(foundTracks)
    }).catch((error) => {
        if (error === "MISSING_TRACKS") res.status(404).json
            ({ message: "Track is missing" })
        else res.status(500).send("Error getting the track")
    })
})

//? http://localhost:5000/track/create-track
// create and assign a song to an album
router.post("/create-track", (req, res) => {
    const { title, album_id } = req.body



    // Verify if title already exists
    Track.findByTitle(title).then((trackExists, err) => {
        if (trackExists) return Promise.reject("DUPLICATE_TRACK")
        Album.findById(album_id).then((albumExists) => {
            if (albumExists) return Promise.reject("ALBUM_NON-EXISTENT")
            return Track.createTrack(req.body);
        })
    }).then((createdTrack) => {
        res.status(201).json(createdTrack)
    }).catch((error) => {
        if (error === "DUPLICATE_TRACK") return res.status(409).json
            ({ message: "Track already exists" })
        else if (error === "ALBUM_NON-EXISTENT") return res.status(409).json
            ({ message: "Album doesn't exists" })
        else res.status(500).send
            ("Error creating the track")
    })
})

module.exports = router;