const express = require("express")
const server = express()

var Internal_GameSettings = {
    BroadcastPlayerLocations: 10,
    IntermissionPeriod: "Size*1"
}
var GameSettings = {

}

var StandardColors = {
    "Green": "#FFFFFF",
    "Red": "#FFFFF",
    "Blue": "#FFFFF",
    "Orange": "#FFFFF",
    "Yellow": "#FFFFF",
    "Purple": "#FFFFF",
}

var Games = {
    "gameid": {
        hasEnded: false,
        Players: {
            "Unassigned 1": {
                Color: "Green"
            },
            "Unassigned 2": {
                Color: "Red"
            },
            "Unassigned 3": {
                Color: "Blue",
                Host: true
            },  
        }
    }
}

function gameLogic() {

}

server.get("*", (req, res) => {

})