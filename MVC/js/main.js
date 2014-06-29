//--------------------------------------------------------
//                Création des instances
//--------------------------------------------------------

var artistsList = new Artists();
var musiciansList = new Musicians();
var instrusList = new Instruments();




var login = new MyLoginModel({"txtButton":"Activation"});
var loginViewVar = new LoginView({model: login});



function IsConnected(){

//console.log("start function IsConnected()");
//
////console.log('--------------------  All Events  --------------------');//API inexistants
////eventsList.fetch({
////    success: function (collection, response, options) {
////        console.log(eventsList);
////        console.log(JSON.stringify(eventsList));
////    },
////    error: function(collection, response, options){
////        
////        console.log("ERROR FETCH");
////        
////    }
////});
//
console.log('--------------------  All Artists  --------------------'); //fonctionne
artistsList.fetch({
    success: function (collection, response, options) {
        console.log("Ma collection d'Artists mode object");
        console.log(artistsList);
        
        console.log("Ma collection d'Artists mode JSON");
        console.log(JSON.stringify(artistsList));
        
        console.log('artistsList.at(0)');
        console.log(JSON.stringify(artistsList.at(0)));
//        console.log("Get.(artists).at(0)");
//        console.log(JSON.stringify(artistsList.get("artists").at(0)));


    }
});



console.log('--------------------  One Artist  --------------------'); //fonctionne
artistsList.fetch({
    success: function (collection, response, options) {
        console.log("Ma collection d'Artists mode object");
        console.log(artistsList);
        
        console.log("Ma collection d'Artists mode JSON");
        console.log(JSON.stringify(artistsList));
        
        console.log('artistsList.at(0)');
        console.log(JSON.stringify(artistsList.at(0)));
//        console.log("Get.(artists).at(0)");
//        console.log(JSON.stringify(artistsList.get("artists").at(0)));


    }
});


      console.log("--------------------  Création d'artists  --------------------");
       var artist1 = new Artist({"name":"Florent le Babouin", "genres": [1]});
       
       console.log(artist1);
       
       console.log(JSON.stringify(artist1));
       
       console.log("L'artiste après le save()");
       console.log(JSON.stringify(artist1));
       
//       
       
//       artist1.save({"short_description_de": "salut"},{ //Work only when we add
//                                                        //a new attribute in the save method in first parameter
//
//           success: function(model, response, options){
//               if (response.status != 'success'){
//                   console.log(response.status);
//                   console.log(response.data.name);
//               }else{
//                   console.log("ARTISTS SAVED");
//                   console.log(response.data.title);
//               }
//               
//               console.log('Le Model');
//               console.log(model);
//               console.log('response');
//               console.log(response);
//               console.log('options');
//               console.log(options);
//           },
//           error:function(model, response, options){ // A tester en se déconnectant!
//               console.log("ARTISTS ERROR");
//               console.log('Model');
//               console.log(model);
//               console.log('response');
//               console.log(response);
//           }
////           ,fail: function(model, response){ //pas prévu pour .save() tout va dans success
////           
//       });
       
       
       
       
       

//console.log('--------------------  All Musicians  --------------------');
//musiciansList.fetch({
//    success: function (collection, response, options) {
//        console.log(musiciansList);
//        console.log("Ma collection de Musicians en mode JSON");
//       
//        console.log(JSON.stringify(musiciansList));
//        
//        
//    }
//});


//console.log('--------------------  All Instruments  --------------------');
//instrusList.fetch({
//    success: function (collection, response, options) {
//        console.log(instrusList);
//        console.log(JSON.stringify(instrusList));
//    }
//});





};
    
//--------------------------------------------------------
//  DOM READY   Actuel main.js de anciennement login.js de RomainNaty
//--------------------------------------------------------


$(document).ready(function() {
      console.log("document ready occurred!");
      
     var loginViewVar = new LoginView({model: login});//.$el.appendTo("#login");
    //loginViewVar.render().$el.appendTo("#login");
    
    IsConnected();
    $('button').click(function(){
        
    
        //getAllArtits();
    
        console.log("click activation");
        
    var email = $("input#email").val();
    console.log(email);
    var password = $("input#password").val();
    console.log("password");
    console.log(password);
    
//    var user = '{"email":"'+email+'", "password":"'+password+'"}';
//    var userJ = $(user).toJSON();
//    console.log(user);
    //Requête de connection API
    $.ajax({  
    type: "POST",
    url: LOGIN,
    dataType: 'json',
    //async: false,
    data: {"email":email ,"password":password} ,                       //AUTH_MANAGER_FR ,      //"matou@matou.ch""matou"}

    
    success: function (data, textStatus, jqXHR){
      console.log("Dialogue client serveur : "+ textStatus);
      console.log("TextStatut : "+ data.status);
      
      
      console.log(data);
      if(data.status==='success'){
          console.log("Data.title : ");
          console.log(data.data.title);
          $("#login").hide();
          alert("Vous êtes bien authentifié en tant que Manager");
      }else{
          console.log("Phrase d'erreur : "+ data.message.title);
          //IsConnected();
          return;
      }
      
      //IsConnected();
    },
    crossDomain: true
//    error: function(jqXHR, textStatus,errorThrown){
//        console.log("Vous n'êtes pas authentifié blblblbl!");
//        console.log(textStatus);
//        console.log(errorThrown);
//        console.log(jqXHR);
//        
//    }
}); //FIN AJAX
    }); // FIN ONCLICK
            
});//FIN DU DOM



//----------------------------------------------------------------------------
//                LOGIN AJAX
//----------------------------------------------------------------------------                
//$.ajax //Requête de connection API /////LOGIN AJAX
//  ({
//    type: "POST",
//    url: LOGIN,
//    dataType: 'json',
//    //async: false,
//    data: {"email":"matou@matou.ch","password":"matou"}, //AUTH_MANAGER_FR       //{"email":"matou@matou.ch", "password":"matou"}
//    
//    success: function (data, textStatus, jqXHR){
//      console.log("Dialogue client serveur : "+ textStatus);
//      console.log("TextStatut : "+ data.status);
//      
//      
//      console.log(data);
//      if(data.status==='success'){
//          console.log("Data.title : ");
//          console.log(data.data.title);
//      }else{
//          console.log("Phrase d'erreur : "+ data.message.title);
//          IsConnected();
//          return;
//      }
//      
//      IsConnected();
//    },
//    crossDomain: true
////    error: function(jqXHR, textStatus,errorThrown){
////        console.log("Vous n'êtes pas authentifié blblblbl!");
////        console.log(textStatus);
////        console.log(errorThrown);
////        console.log(jqXHR);
////        
////    }
//});
//----------------------------------------------------------------------------
//                LOGIN AJAX
//----------------------------------------------------------------------------


//var eventsList = new Events();







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




