class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

// read the value of carsAtEnd from the database and store it as the rank of the player
  getCarsAtEnd(){
    var carsAtEndRef = database.ref('carsAtEnd');
    carsAtEndRef.on("value", (data)=>{
      this.rank = data.val();
    })
  }

// write a new value for cars at end and since it is a function common to all the objects we make it static
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd : rank
    })
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
