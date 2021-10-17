class Quiz {
  constructor(){}

  getState(){
    var gameStateref = database.ref('gameState');
    gameStateref.on("value",function(data){
      gameState=data.val();

    })

  }
    
  
update(state){
  database.ref('/').update({
    gameState : state

  });
}

async start(){

  if(gameState === 0){
 contestant = new Contestant();
 var contestantCountref = database.ref('contestantCount').once("value");

 if(contestantCountref. exsits()){
   contestantCount=contestantCountref.val();
   contestant.getCount();
 }
 question = new Question()
 question.display(); 
}
    
  // question = new Question()
 // question.display();
    
  }

 play(){
   question.hide();
   background("lightBlue");
   textSize(30);
   fill("brown");
   text("RESULT OF THE QUIZ",340,50);
   text("...................",320,65);
   contestant.getPlayerInfo();

  if(allcontestants !== undefined){
    var display_answers = 230;
    fill("blue");
    textSize(20);
    text("*NOTE:contestant Who answered correct are highlighted in green colour,130,230");
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("green");
      else
      fill("red");
      display_answers+=20;
      textSize(15);
      text(allContestants[plr].name + " :" + allContestants[plr].answer,250,display_answers);
    }
  }




 }


}
