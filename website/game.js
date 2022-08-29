var LocalPlayer = {
  Color: "White", // this is local player, always one color
  Position: {
    lng: 0,
    ltd: 0
  },

  UpdatePosition: function (newPosition) {
    if (newPosition) {
      self.Position = newPosition
    } else {
      navigator.geolocation.getCurrentPosition(self.UpdatePosition)
    }
  }
}

var map = {
  MapContainer: undefined,
  GameCircle: undefined,
  CreateGameCircle: function(Position, Game) {
    self.GameCircle = new google.maps.Circle({
      strokeColor: "#00FF00",
      strokeOpacity: 0.75,
      strokeWeight: 1,
      fillColor: "#00FF00",
      fillOpacity: 0.15,
      map,
      center: Position,
      radius: Game.Size
    })
  },
  UpdateGameCircle: function(newSize) {
    // Make it smaller by tweening the size
  },
  UpdatePlayerCircle: function (Position, existingCircle, Color, Duration) {
    if (!existingCircle) {
      existingCircle = new google.maps.Circle({
        strokeColor: Color,
        strokeOpacity: 0.65,
        strokeWeight: 1,
        fillColor: Color,
        fillOpacity: 0.15,
        map,
        center: Position,
        radius: 10,
      });

      if (Duration) {
        setTimeout(() => {
          existingCircle.setMap(null)
          existingCircle = null
        }, Duration * 1000)
      }
    } else {
      existingCircle.setOptions({
        strokeColor: Color,
        fillColor: Color,
        center: Position
      })
    }
  }
}
var Game = {
  Size: 100,
  MinimumSize: 15,
  ShrinkSize: 5,
  ShrinkDuration: 5,
  ShrinkDelay: 60,
}
