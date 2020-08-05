class Player {
  // Constructor Holds Index, Distance, and Name
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  // Gets the PlayerCount
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  // Updates PlayerCount
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  // Updates the Player Index with Name and the distance
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  // Static Function for every player object to get the PlayerInfo
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
