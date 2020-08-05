class Game {
  constructor(){

  }

  // Gets the Game State
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  // Updates State of Game
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  // Async Start Function to Start Game
  // Is Async so Only Four Players Can Get In
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    // Creates all Car Sprites
    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];
  }

  play(){
    // Hides Form
    form.hide();
    
    // Calls Static Player Function
    Player.getPlayerInfo();
    
    // Checks if allPlayers is not undefined
    if(allPlayers !== undefined){

      // Sets up all Cars and Their movement
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;
      
      // For loop to add certain properties to each idividual car
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){

          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          fill(255, 0, 0)
          stroke(10)
          ellipse(x, y + 10, 60, 60)
        }


       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    // Movement of Car
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 4000){
      gameState = 2;
      game.update(2)
    }
   
    drawSprites();
  }

  // End State
  end(){
    console.log("Game Ended");
  }
}
