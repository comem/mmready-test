//$.post('http://pingouin.heig-vd.ch/rockit/v1/login',{
//    email:"matou@matou.ch", password:"matou"
//}, function (data, textStatus,jqXHR) {
//    console.log(data);
//    console.log(textStatus);
//    console.log(jqXHR);
//    
//    if(textStatus==="success"){
//      IsConnected();
//      console.log(data.data.title);
//    }else{
//        
//    }
//    
//});

$.ajax //Requête de connection API
  ({
    type: "POST",
    url: "http://pingouin.heig-vd.ch/rockit/v1/login",
    dataType: 'json',
    //async: false,
    data: AUTH_MANAGER_FR,       //{"email":"matou@matou.ch", "password":"matou"}
    
    success: function (data, textStatus, jqXHR){
      console.log("Dialogue client serveur : "+ textStatus);
      console.log("TextStatut : "+ data.status);
      
      console.log(data);
      if(data.status==='success'){
          console.log(data.data.title);
      }else{
          console.log("Phrase d'erreur : "+ data.message.title);
          return;
      }
      
      IsConnected();
    },
    crossDomain: true,
    error: function(jqXHR, textStatus,errorThrown){
        console.log("Vous n'êtes pas authentifié !");
        console.log(textStatus);
        console.log(errorThrown);
        console.log(jqXHR);
        
    }
});





function IsConnected(){

console.log("start function IsConnected()");

 var french = new LangFR();
 french.fetch();
     

     
     var musiciansList = new Musicians({"id":"3",
        "name":"Romain",
        "stagename":"Remixed",
        "created_at":"2014-05-26 14:22:41",
        "updated_at":"2014-06-02 09:47:42",
        "instruments":[
        {"id":"2","musician_id":"3","name":"Guitar"},
        {"id":"3","musician_id":"3","name":"Bass"},
        {"id":"4","musician_id":"3","name":"Clarinette"}]},
        {"id":"4",
        "name":"Naty",
        "stagename":"Remixed",
        "created_at":"2014-05-26 14:22:41",
        "updated_at":"2014-06-02 09:47:42",
        "instruments":[
        {"id":"2","musician_id":"3","name":"Drums"},
        {"id":"3","musician_id":"3","name":"Piano"}]});
     
     //var receivedMusicians = musiciansList.fetch();
     console.log("Liste de Musicians :");
    console.log(receivedMusicians); 
    console.log(JSON.stringify(receivedMusicians));
    
};

//***************************************************************************//
//*******************             main                ***********************//
//***************************************************************************//

$(function () {
    console.log('-------------DOM IS READY----------------------');
   


    
    
    

console.log('-------------DOM IS FINISH---------------------');
});







