class Game 
{
  constructor() {}
  
  //Declare getState function to the gamestate
  getState() 
  {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
 //Declare update function to update the game state
  update(state) 
  {
    database.ref("/").update({
      gameState: state
    });
  }

  start() 
  {
    form = new Form();
    form.display();
    player = new Player();

    //write code to retrive player information
    
    //Create car Sprite & add Image
    
  }
  //Write handle Elements function
  handleElements() 
  {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //Declare play function
  play() 
  {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) 
    {
      //Add track image
      

      drawSprites();
    }
  }
}
