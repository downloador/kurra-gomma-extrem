// import all the junk modules

const express = require("express")

// do web router first

const WebServer = express()
WebServer.use(express.static("front"));
// serve files from front

// Website stuff
WebServer.get("/", (req,res) => { res.sendFile("index.html") })
WebServer.get("/index.css", (req,res) => { res.sendFile("index.css") })
WebServer.get("/index.js", (req,res) => { res.sendFile("index.js") })
WebServer.get("/favicon.ico", (req,res) => { res.status(404); res.send() })

// I want to know if the game exists!
WebServer.post("/api/join-game", express.json(), (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    
    let GameID = req.body.GameID
    if (!GameID) {
        req.statusCode(400)
        req.send({ error: "Missing GameID parameter"})
        // how can you be this stupid
        return
    }

    if (GameID in Games) {
        res.status(200)
        req.send({ success: true })
    } else {
        res.status(200)
        req.send({ success: false })
        // what the hell dawg
    }
})

WebServer.post("/api/create-game", express.json(), (req,res) => {
    res.setHeader('Content-Type', 'application/json');

    let GameID = (Math.random() + 1).toString(36).substring(9)

    req.statusCode(200)
    req.send({"GameID": GameID})
})

WebServer.listen(2055)

// backend server of the game

var Games = {}