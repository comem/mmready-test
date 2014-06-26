$.ajax //Requête de connection API
  ({
    type: "POST",
    url: LOGIN,
    dataType: 'json',
    //async: false,
    data: {"email":"chris@chris.ch","password":"chr"}, //AUTH_MANAGER_FR       //{"email":"matou@matou.ch", "password":"matou"}
    
    success: function (data, textStatus, jqXHR){
      console.log("Dialogue client serveur : "+ textStatus);
      console.log("TextStatut : "+ data.status);
      
      
      console.log(data);
      if(data.status==='success'){
          console.log("Data.title : ");
          console.log(data.data.title);
      }else{
          console.log("Phrase d'erreur : "+ data.message.title);
          IsConnected();
          return;
      }
      
      IsConnected();
    },
    crossDomain: true,
//    error: function(jqXHR, textStatus,errorThrown){
//        console.log("Vous n'êtes pas authentifié blblblbl!");
//        console.log(textStatus);
//        console.log(errorThrown);
//        console.log(jqXHR);
//        
//    }
});
var eventsList = new Events();
var artistsList = new Artists();
var musiciansList = new Musicians();
var instrusList = new Instruments();

function IsConnected(){

console.log("start function IsConnected()");

console.log('--------------------  All Events  --------------------');
eventsList.fetch({
    success: function (collection, response, options) {
        console.log(eventsList);
        console.log(JSON.stringify(eventsList));
    }
});

console.log('--------------------  All Artists  --------------------');
artistsList.fetch({
    success: function (collection, response, options) {
        console.log(artistsList);
        console.log(JSON.stringify(artistsList));
    }
});

console.log('--------------------  All Musicians  --------------------');
musiciansList.fetch({
    success: function (collection, response, options) {
        console.log(musiciansList);
        console.log(JSON.stringify(musiciansList));
    }
});

console.log('--------------------  All Instruments  --------------------');
instrusList.fetch({
    success: function (collection, response, options) {
        console.log(instrusList);
        console.log(JSON.stringify(instrusList));
    }
});





};


//function IsConnected(){
//
//console.log("start function IsConnected()");
//
// var french = new LangFR();
// french.fetch();
//     
//
//     
//     var musiciansList = new Musicians({"id":"3",
//        "name":"Romain",
//        "stagename":"Remixed",
//        "created_at":"2014-05-26 14:22:41",
//        "updated_at":"2014-06-02 09:47:42",
//        "instruments":[
//        {"id":"2","musician_id":"3","name":"Guitar"},
//        {"id":"3","musician_id":"3","name":"Bass"},
//        {"id":"4","musician_id":"3","name":"Clarinette"}]},
//        {"id":"4",
//        "name":"Naty",
//        "stagename":"Remixed",
//        "created_at":"2014-05-26 14:22:41",
//        "updated_at":"2014-06-02 09:47:42",
//        "instruments":[
//        {"id":"2","musician_id":"3","name":"Drums"},
//        {"id":"3","musician_id":"3","name":"Piano"}]});
//     
//     //var receivedMusicians = musiciansList.fetch();
//     console.log("Liste de Musicians :");
//    console.log(receivedMusicians); 
//    console.log(JSON.stringify(receivedMusicians));
//    
//};

//***************************************************************************//
//*******************             main                ***********************//
//***************************************************************************//

$(function () {
    console.log('-------------DOM IS READY----------------------');
   


    
    console.log("COUCOU");
    

console.log('-------------DOM IS FINISH---------------------');
});


//$.ajax //Requête de connection API
//  ({
//    type: "POST",
//    url: "http://pingouin.heig-vd.ch/rockit/v1/login",
//    //dataType: 'json',
//    //async: false,
//    //data: AUTH_MANAGER_FR,       //{"email":"matou@matou.ch", "password":"matou"}
//    username: "matou@matou.ch",
//    password: 'matou',
//    success: function (data, textStatus, jqXHR){
//      console.log("Dialogue client serveur : "+ textStatus);
//      console.log("TextStatut : "+ data.status);
//      
//      console.log(data);
//      if(data.status==='success'){
//          console.log(data.data.title);
//      }else{
//          console.log("Phrase d'erreur : "+ data.message.title);
//          return;
//      }
//      
//      IsConnected();
//    },
//    crossDomain: true,
//    error: function(jqXHR, textStatus,errorThrown){
//        console.log("Vous n'êtes pas authentifié !");
//        console.log(textStatus);
//        console.log(errorThrown);
//        console.log(jqXHR);
//        
//    }
//});




