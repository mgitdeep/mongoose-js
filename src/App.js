const mongoose = require('mongoose')

// Creating a connection Or coreating a new Database
mongoose.connect('mongodb://127.0.0.1:27017/grabitgo').then(() => {
    console.log('Connection established...')
}).catch((err) => {
    console.log(err)
})


// Define the Schema
const playlistSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cType: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})


// Creating the Collection where the above documents will be placed
const Playlistt = new mongoose.model("Playlist", playlistSchema)


// Create or Insert document
const reactPlaylist = new Playlistt({
    name: "React JS",
    cType: "Front End",
    videos: 81,
    author: "TT",
    active: true,
})

reactPlaylist.save()