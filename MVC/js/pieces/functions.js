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

function atomDateStartUTC(dateUTC){
    console.log("String UTC");
        console.log(dateUTC);
        var date = new Date(dateUTC);
        console.log("new Date()");
        console.log(date);
             var dayDate = date.getDate();
             var months = [ "Januar", "Februar", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];
              var month = date.getMonth();
            var selectedMonthName = months[month];
             
             var year = date.getFullYear();
             
             var hours = date.getHours(); //returns 0-23
            var minutes = date.getMinutes(); //returns 0-59
            if(minutes>9){
                console.log(">9");
            }else{
                 console.log("<9");
                 var minutes = minutes.toString();
                 var minutes = minutes.substr(0)+"0";
            }
            var seconds = date.getSeconds(); // returns 0-59
            var attrDate = {dayStart: dayDate, monthStart: selectedMonthName,yearStart:year,hoursStart:hours,minutesStart:minutes};
            console.log(dayDate);
            console.log(selectedMonthName);
            console.log(year);
            console.log(hours);
            console.log(minutes);
    return attrDate;
}

function atomDateEndUTC(dateUTC){
    console.log("String");
        console.log(date);
        var date = new Date(dateUTC);
        console.log("new Date()");
        console.log(date);
             var dayDate = date.getDate();
             
             var months = [ "Januar", "Februar", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];
              var month = date.getMonth();
            var selectedMonthName = months[month];
             
             var year = date.getFullYear();
             
             var hours = date.getHours(); //returns 0-23
            var minutes = date.getMinutes(); //returns 0-59
            var seconds = date.getSeconds(); // returns 0-59
            var attrDate = {dayEnd: dayDate, monthEnd: selectedMonthName,yearEnd:year,hoursEnd:hours,minutesEnd:minutes};
            
    return attrDate;
}

function getAllArtists(){
    
     var allArtistsView = new ViewAllArtists({collection: artistsList});
     artistsList.fetch({
         success: function(){
             console.log(artistsList);
         }
     });
}

function getOneArtist(id){
   
   var OneArtist = Artist.extend({
       urlRoot:ARTISTS+"/"+id
    });
   
    var artist1 = new OneArtist();

    artist1.fetch();
}

function saveArtist(event_id, name,genre, shortDescr, longDescr){

    var event_id = event_id;
    
    var artist1 = new Artist({
        "name":name,
        "genres": [genre],
        "short_description_de": shortDescr,
        "complete_description_de": longDescr});
       
      artist1.save({ //Work only when we add ouais confirmation success ne ds'active pas si on ne fait pas de modif^^
                                                        //a new attribute in the save method in first parameter
//
//           success: function(model, response, options){
//               console.log("Reponse dans success");
//               console.log(response);
//               if(response.status === 'success'){
//                   console.log("ARTISTS SAVED");
//                   console.log(response.data.response.title);
//                   console.log(response.data.response.id);
//                   return response.data.response.id;
//                   
//               }//else
////               if (response.status == 'error'){
//////                   console.log(response.status);
//////                   console.log(response.data.name);
////               }else if(response.status == 'fail'){
//////                   console.log("ARTISTS SAVED");
//////                   console.log(response.data.response.title);
//////                   console.log(response.data.response.id);
//////                   return response.data.response.id;
////                   
////               }
//           },
//           error:function(model, response, options){ // A tester en se déconnectant!
//               console.log("ARTISTS ERROR");
//               console.log('Model');
//               console.log(model);
//               console.log('response');
//               console.log(response);
//           }
//           ,fail: function(model, response){ //pas prévu pour .save() tout va dans success
//           
       });
         
                   
}//FIN save Artist

function savePerformer(event_id, artist_id, order, isSuppport, hourArrival){
//    order, isSuppport, hourArrival,
    
    return;
    
}//FIN savePerformer

function saveMusician(artist_id, firstName, lastName, stageName, instrument_id){
    
    
    return;
    
}//FIN saveMusician

function saveEvent(hourArrival){
    
    
    return;
    
}//FIN saveEvent

function loginButton(){
    

     
    $("#btnConnect").on("click", function(){
      var email = $("input[type=email]").val();
      console.log("email");
    console.log(email);
    var password = $("input[type=password]").val();
    console.log("password");
    console.log(password);
    
    
   if ($('#remember').is(":checked"))
{
  console.log("remember checked");
  var remember = "true"; //peut-être qu'en string ca ne marche pas à test
  
}else{
    console.log("rememeber not checked");
    var remember = "false";
}
    
//    var user = '{"email":"'+email+'", "password":"'+password+'"}';
//    var userJ = $(user).toJSON();
//    console.log(user);
    //Requête de connection API
    $.ajax({  
    type: "POST",
    url: LOGIN,
    dataType: 'json',
    //async: false,
    data: {"email":email ,"password":password, remember: remember} ,      //email     password            //AUTH_MANAGER_FR ,      //"matou@matou.ch""matou"}

    
    success: function (data, textStatus, jqXHR){
      console.log("Dialogue client serveur : "+ textStatus);
      console.log("TextStatut : "+ data.status);
      
      
      console.log(data);
      if(data.status==='success'){
          console.log("Data.title : ");
          console.log(data.data.title);
          //$("#loginFab").hide();
          alert(data.data.title);
      }else if (data.status==="error"){
          alert(data.message.title);
          console.log("Phrase d'erreur : "+ data.message.title);
          //IsConnected();
          return;
      }else if((data.status==="fail")){
          console.log("Phrase d'erreur : "+ data.message);
          return;
      }
      
      //IsConnected();
    }
   //, crossDomain: true
//    error: function(jqXHR, textStatus,errorThrown){
//        console.log("Vous n'êtes pas authentifié blblblbl!");
//        console.log(textStatus);
//        console.log(errorThrown);
//        console.log(jqXHR);
//        
//    }
}); //FIN AJAX
    });//FIN #btnConnect
    
};
    



function TESTS(){
    
console.log('--------------------  VALIDATOR TEST  --------------------');

console.log("--------------------  Création d'artists  --------------------");

  


    
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



