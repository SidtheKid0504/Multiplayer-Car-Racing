class Form {

  // Constructor Holding all DOM Elements
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('TEST RESET')
  }

  // Hides all of the Form Elements
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  // Displays all Elements
  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth - 600, 50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      // Updates playerCount if this.button.mousePressed()
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    // Resets game for Test Purposes
    this.reset.mousePressed(() => {
      game.update(0);
      player.updateCount(0);
      console.log(gameState + ":" + playerCount);
    })

  }
}
