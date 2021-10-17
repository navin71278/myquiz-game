class Contestant {
  constructor(){
    this.index=null;
    this.answer=0;
    this.name=null;
   }

   getCount(){
     var constestantCountRef= database.ref('contsetantCount');
     contestantCountRef . on("value",(data)=>{
       contestantCount = data.val();
     })
   }
 
   updataCount(count){
     database.ref('/').update({
       contestantCount : count
     });
    }

    update(){
      var contestantIndex = "contestants/contestant"
      database.ref(contestantIndex).set({
        name:this.name,
        answer : this.answer

      });
    }

    static getplayerInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfo . on("value",(data)=>{
     allcontestants=data.val();
      })

    }
  
}
