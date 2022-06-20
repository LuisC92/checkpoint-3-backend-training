const router = require("express").Router();
const Album = require("../models/album")

//? http://localhost:5000/album/
router.get("/", (req, res) => {
    Album.findAll().then((albums) => {
        res.json(albums)
    })
})

// be able to see an album by entering its id in the url.
//? http://localhost:5000/album/:id
router.get("/:id", (req, res) => {
    const id = req.params.id
    Album.findById(id).then((foundAlbum) => {
        res.status(200).json(foundAlbum);
    })
})


// be able to create a new album
//? http://localhost:5000/album/create-album
router.post("/create-album", (req, res) => {
    const { title } = req.body
    // Verify if title already exists
    Album.findByTitle(title).then((albumExists, err) => {
        if (albumExists) return Promise.reject("DUPLICATE_ALBUM")
        return Album.createAlbum(req.body);
    }).then((createdAlbum) => {
        res.status(201).json(createdAlbum)
    })
        .catch((error) => {

            if (error === "DUPLICATE_ALBUM") return res.status(409).json
                ({ message: "Album already exists" })
            else res.status(500).send
                ("Error creating the album")
        })
})

module.exports = router;