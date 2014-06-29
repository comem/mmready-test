function initHandler(){
    
    
    
   $(".moreDetails").on("click", function(){
       
       var id = $(this).parent("div[data-id]").attr("data-id");
        getOneArtist(id);
        console.log("click");
   });
   
   //    $('button.moreDetails').on("click", function(){
//        
//        var id = $(this).parent("div[data-id]").attr("data-id");
//        getOneArtist(id);
//        console.log("click");
//    });
}

function getAllArtists(){
    
     var allArtistsView = new ViewAllArtists({collection: artistsList});
     artistsList.fetch();
}

function getOneArtist(id){
   
   var OneArtist = Artists.extend({
       url:ONEARTIST,
       parse: function (response) {
        // Gestion conditionnelle du format JSEND
        console.log("La response reçue du Parse d'un collection");
        console.log(response.data.response);
        return typeof response.data.response != "undefined" ? response.data.response : response;
    }
   });
       
   console.log("getOneArtists");
   
   artist1 = new OneArtist();
   var oneArtistView = new ViewShowArtist({collection: artist1});
   
   //artist1.set("id", id);
    artist1.fetch();
//    console.log(artist1);
//    console.log(JSON.stringify(artist1));


//var id=1;
//    artist.set("id", id);
//    artist.fetch();
//    
//    console.log(artist);
    
}


function loginFunction(){
    
    //LOGIN

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
}

function TESTS(){
    
console.log('--------------------  GET ONE ARTIST  --------------------');

//    
//    
//    
//
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
//console.log('--------------------  All Artists  --------------------'); //fonctionne
//artistsList.fetch({
//    success: function (collection, response, options) {
//        console.log("Ma collection d'Artists mode object");
//        console.log(artistsList);
//        
//        console.log("Ma collection d'Artists mode JSON");
//        console.log(JSON.stringify(artistsList));
//        
//        console.log('artistsList.at(0)');
//        console.log(JSON.stringify(artistsList.at(0)));
////        console.log("Get.(artists).at(0)");
////        console.log(JSON.stringify(artistsList.get("artists").at(0)));
//
//
//    }
//});
//
//
//
//console.log('--------------------  One Artist  --------------------'); //fonctionne
//artistsList.fetch({
//    success: function (collection, response, options) {
//        console.log("Ma collection d'Artists mode object");
//        console.log(artistsList);
//        
//        console.log("Ma collection d'Artists mode JSON");
//        console.log(JSON.stringify(artistsList));
//        
//        console.log('artistsList.at(0)');
//        console.log(JSON.stringify(artistsList.at(0)));
////        console.log("Get.(artists).at(0)");
////        console.log(JSON.stringify(artistsList.get("artists").at(0)));
//
//
//    }
//});
//
//
//      console.log("--------------------  Création d'artists  --------------------");
//       var artist1 = new Artist({"name":"Florent le Babouin", "genres": [1]});
//       
//       console.log(artist1);
//       
//       console.log(JSON.stringify(artist1));
//       
//       console.log("L'artiste après le save()");
//       console.log(JSON.stringify(artist1));
//       
//       
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
//       
//       
//       
//       
//       
//
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
//
//console.log('--------------------  All Instruments  --------------------');
//instrusList.fetch({
//    success: function (collection, response, options) {
//        console.log(instrusList);
//        console.log(JSON.stringify(instrusList));
//    }
//});


};

