function initHandler(){
    
    
    
   $(".moreDetails").on("click", function(){
       
       var id = $(this).parent("div[data-id]").attr("data-id");
        getOneArtist(id);
       
   });
   
   //    $('button.moreDetails').on("click", function(){
//        
//        var id = $(this).parent("div[data-id]").attr("data-id");
//        getOneArtist(id);
//        console.log("click");
//    });
}

function atomDateStartUTC(dateUTC){
   
        var date = new Date(dateUTC);
        
             var dayDate = date.getDate();
             var months = [ "Januar", "Februar", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];
              var month = date.getMonth();
            var selectedMonthName = months[month];
             
             var year = date.getFullYear();
             
             var hours = date.getHours(); //returns 0-23
            var minutes = date.getMinutes(); //returns 0-59
            if(minutes>9){
                
            }else{
                 
                 var minutes = minutes.toString();
                 var minutes = minutes.substr(0)+"0";
            }
            var seconds = date.getSeconds(); // returns 0-59
            var attrDate = {dayStart: dayDate, monthStart: selectedMonthName,yearStart:year,hoursStart:hours,minutesStart:minutes};
            
    return attrDate;
}

function atomDateEndUTC(dateUTC){
    
        var date = new Date(dateUTC);
        
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

////*********************************************************************************************************************
////*************************************GENRES*************************************************************************
////*********************************************************************************************************************

/************************************************FONCTION****************************************************
 * Nom: addGenre
 * Description: ajouter un champs permettant d'ajouter un genre de musique
 * **********************************************************************************************************/
function addGenre() {
    var genre = templateGenre.clone();
    //cloner et rajouter au dom
    $(genre).clone().appendTo("#genre");
    //modifier l'id du dernier élément ajouté
    $(".genre").last().attr('data-key', nbGenres);
    //ajouter le bouton supprimer
    var btn = $('<button class="deleteGenre"><i class="ico-delete "></i>Delete</button><br/> ').appendTo($(".genre").last());
    //supprimer un ticket
    btn.on('click', deleteElement);
    nbGenres++;
}


////*********************************************************************************************************************
////*************************************TICKETS *************************************************************************
////*********************************************************************************************************************

/************************************************FONCTION****************************************************
 * Nom: addTicket
 * Description: ajouter un champs permettant d'ajouter une catégorie de ticket et son prix
 * **********************************************************************************************************/
function addTicket() {
    var ticket = templateTicket.clone();
    //cloner et rajouter au dom
    $(ticket).clone().appendTo("#selectTicket");
    //modifier l'id du dernier élément ajouté
    $(".ticket").last().attr('id', 'ticket_' + nbTickets);
    //faire apparaître
    $(".ticket").last().removeClass('hide');
    //ajouter le bouton supprimer
    var btn = $('<button class="deleteTicket"><i class="ico-delete "></i>Supprimer</button> ').appendTo($(".ticket").last());
    //supprimer un ticket
    btn.on('click', deleteElement);
    nbTickets++;
}


//*********************************************************************************************************************
//*************************************MUSICIEN************************************************************************
//*********************************************************************************************************************

/************************************************FONCTION****************************************************
 * Nom: addMusician
 * Description: ajouter un formulaire permettant de créer un musicien
 * **********************************************************************************************************/
function addMusician() {
    //cloner le template de musicien
    var musician = templateMusician.clone();
    //cloner et rajouter le musicien au DOM
    $(musician).clone().appendTo(".musicians");
    //modifier l'id du dernier élément ajouté
    var nextID = nbMucicians;
    $(".musician").last().attr('data-key', nextID);
    //ajouter le bouton sauver
    var btnSave = $('<button class="pull-right saveMusician"><i class="ico-save"></i>Save</button>').appendTo($(".musician").last());
    //ajouter le bouton supprimer
    var btn = $('<button class="deleteMusician pull-right"><i class="ico-delete"></i>Delete</button><div class="clearfix"></div>').appendTo($(".musician").last());
    //supprimer un musicien
    btn.on('click', deleteElement);
    //sauvegarder un musicien
    btnSave.on('click', function() {
        saveMusician(nextID, $(this));
    });
    //incrémenter le nombre de musiciens et les id
    nbMucicians++;
}


/************************************************FONCTION****************************************************
 * Nom: saveMusician
 * Description: sauvegarder le musicien créé et l'afficher dans un cadre de résumé
 * @param id
 * @param bouton
 * **********************************************************************************************************/
function saveMusician(id, bouton) {
    var musicianApercu = templateMusicianApercu.clone();
    //récupérer les données du musicien
    var firstName = bouton.parent().find('input[data-key=musicianFirstName]').val();
    var lastName = bouton.parent().find('input[data-key=musicianLastName]').val();
    var sceneName = bouton.parent().find('input[data-key=musicianScenetName]').val();
    var instrument = bouton.parent().find('select[data-key=instrument]').val();
    //injecter le nom du musicien dans la ligne de résumé
    $(musicianApercu).find('span[data-key=firstName]').text(firstName + ' ');
    $(musicianApercu).find('span[data-key=lastName]').text(lastName);
    $(musicianApercu).find('span[data-key=sceneName]').text(sceneName);
    $(musicianApercu).find('span[data-key=instrument]').text(instrument);
    $(musicianApercu).attr('data-key', id);
    //$(musicianApercu).appendTo('#listMusicians');
    $(musicianApercu).insertBefore('.musicians');
    //cacher le formulaire du musicien
    bouton.parent().remove();
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'musicianApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.musicianApercu').last());
    btnEditApercu.on('click', musicianApercuEdit);
    var btnDeleteApercu = $('<button class=\'musicianApercuDelete pull-right\'><i class="ico-delete"></i></button>').appendTo($('.musicianApercu').last());
    btnDeleteApercu.on('click', deleteElement);
    $('<div class="clearfix"></div>').appendTo($('.musicianApercu').last());
}

/************************************************FONCTION****************************************************
 * Nom: editMusician
 * Description: sauvegarder le musicien édité
 * @param id 
 * @param  bouton 
 * **********************************************************************************************************/
function editMusician(id, bouton) {
    var musicianApercu = templateMusicianApercu.clone();
    //récupérer les données du musicien
    var firstName = bouton.parent().find('input[data-key=musicianFirstName]').val();
    var lastName = bouton.parent().find('input[data-key=musicianLastName]').val();
    var sceneName = bouton.parent().find('input[data-key=musicianScenetName]').val();
    var instrument = bouton.parent().find('select[data-key=instrument]').val();

    //injecter le nom du musicien dans la ligne de résumé
    $(musicianApercu).find('span[data-key=firstName]').text(firstName + ' ');
    $(musicianApercu).find('span[data-key=lastName]').text(lastName);
    $(musicianApercu).find('span[data-key=sceneName]').text(sceneName);
    $(musicianApercu).find('span[data-key=instrument]').text(instrument);
    $(musicianApercu).attr('data-key', id);
    //$(musicianApercu).appendTo('#listMusicians');
    $(musicianApercu).insertBefore('.musicians');
    //cacher le formulaire du musicien
    bouton.parent().remove();
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'musicianApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.musicianApercu').last());
    btnEditApercu.on('click', musicianApercuEdit);
    var btnDeleteApercu = $('<button class=\'musicianApercuDelete pull-right\'><i class="ico-delete"></i></button>').appendTo($('.musicianApercu').last());
    btnDeleteApercu.on('click', deleteElement);
    $('<div class="clearfix"></div>').appendTo($('.musicianApercu').last());
}


/************************************************FONCTION****************************************************
 * Nom: musicianApercuEdit
 * Description: affiche le formulaire permettant d'éditer un musicien existant
 * **********************************************************************************************************/
function musicianApercuEdit() {
    //récupérer les valeurs
    var sceneName = $(this).prev().find('span[data-key=sceneName]').text();
    var lastName = $(this).prev().find('span[data-key=lastName]').text();
    var firstName = $(this).prev().find('span[data-key=firstName]').text();
    var instrument = $(this).prev().find('span[data-key=instrument]').text();

    //récupéré l'id du musicien (résumé)
    var idMusicianEnCours = $(this).parent().attr('data-key');
    //afficher le formulaire du musicien désiré
    var aEditer = templateMusician.clone();
    aEditer.find('h3').text('Edit musician');
    aEditer.find('input[data-key=musicianFirstName]').val(firstName);
    aEditer.find('input[data-key=musicianLastName]').val(lastName);
    aEditer.find('input[data-key=musicianScenetName]').val(sceneName);
    aEditer.find('select[data-key=instrument]').val(instrument);

    var btnSave = $('<button class="pull-right saveMusician"><i class="ico-save"></i>Save</button>').appendTo(aEditer);
    btnSave.on('click', function() {
        editMusician(idMusicianEnCours, $(this));
    });
    var btnCancel = $('<button class="pull-right cancelMusician"><i class="ico-cancel"></i>Cancel</button><br/>').appendTo(aEditer);
    btnCancel.on('click', function() {
        cancelEditMusician(idMusicianEnCours, $(this), sceneName, lastName, firstName, instrument);
    });
    aEditer.insertAfter('div[data-key=' + idMusicianEnCours + '][class="musicianApercu"]');
    //supprimer
    $(this).parent().remove();

}

/************************************************FONCTION****************************************************
 * Nom: cancelEditMusician
 * Description: annuler l'édition en cours et rafficher l'anciene version
 * @param idMusicianEnCours
 * @param bouton
 * @param lastName
 * @param firstName
 * @param instrument
 * @param sceneName
 * **********************************************************************************************************/
function cancelEditMusician(idMusicianEnCours, bouton, sceneName, lastName, firstName, instrument) {
    var musicianApercu = templateMusicianApercu.clone();
    //injecter le nom du musicien dans la ligne de résumé
    $(musicianApercu).find('span[data-key=firstName]').text(firstName + ' ');
    $(musicianApercu).find('span[data-key=lastName]').text(lastName);
    $(musicianApercu).find('span[data-key=sceneName]').text(sceneName);
    $(musicianApercu).find('span[data-key=instrument]').text(instrument);
    $(musicianApercu).attr('data-key', idMusicianEnCours);
    //$(musicianApercu).appendTo('#listMusicians');
    $(musicianApercu).insertBefore('.musicians');
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'musicianApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.musicianApercu').last());
    btnEditApercu.on('click', musicianApercuEdit);
    var btnDeleteApercu = $('<button class=\'musicianApercuDelete pull-right\'><i class="ico-delete"></i></button>').appendTo($('.musicianApercu').last());
    btnDeleteApercu.on('click', deleteElement);
    $('<div class="clearfix"></div>').appendTo($('.musicianApercu').last());
    bouton.parent().remove();
}

//*********************************************************************************************************************
//*************************************IMAGE************************************************************************
//*********************************************************************************************************************

/************************************************FONCTION****************************************************
 * Nom: addImage
 * Description: ajouter un formulaire permettant d'ajouter une image à un artiste
 * **********************************************************************************************************/
function addImage() {
    //cloner le template
    var image = templateImage.clone();
    //cloner et rajouter au dom
    $(image).clone().appendTo(".images");
    //incrémenter l'id du prochain élément
    var nextId = nbImages;
    //modifier l'id du dernier élément ajouté
    $(".image").last().attr('id', 'image_' + nextId);
    //ajouter le bouton sauver
    var btnSave = $('<button class="pull-right saveImage"><i class="ico-save"></i>Save</button>').appendTo($(".image").last());
    //ajouter le bouton supprimer
    var btnDelete = $('<button class="deleteImage pull-right"><i class="ico-delete"></i>Delete</button><div class="clearfix"></div>').appendTo($(".image").last());
    //supprimer une image
    btnDelete.on('click', deleteElement);
    ////sauvegarder une image
    btnSave.on('click', function() {
        saveImage(nextId, $(this));
    });
    //incrémenter le nombre d'éléments
    nbImages++;
}


/************************************************FONCTION****************************************************
 * Nom: saveImage
 * Description: sauvegarder l'image créé et l'afficher dans un cadre de résumé
 * @param id
 * @param bouton
 * **********************************************************************************************************/
function saveImage(id, bouton) {
    var imageApercu = templateImageApercu.clone();
    //récupérer les données 
    var imageTitle = bouton.parent().find('input[data-key=imageTitle]').val();
    var imageDescription = bouton.parent().find('input[data-key=imageDescription]').val();
    var imageSrc = bouton.parent().find('input[data-key=artistImage]').val();
    //injecter les infos de l'élément dans la ligne de résumé
    $(imageApercu).find('span[data-key=imageTitle]').text(imageTitle);
    $(imageApercu).find('span[data-key=imageDescription]').text(imageDescription);
    $(imageApercu).find('a[data-key=imageSrc]').text(imageSrc);
    $(imageApercu).attr('data-key', id);
    //insérer le résumé dans le DOM
    $(imageApercu).appendTo('.images');
    //supprimer le formulaire d'ajout
    bouton.parent().remove();
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'imageApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.artistImage').last());
    btnEditApercu.on('click', imageApercuEdit);
    var btnDeleteApercu = $('<button class=\'imageApercuDelete pull-right\'><i class="ico-delete"></i></button><div class="clearfix"></div>').appendTo($('.artistImage').last());
    btnDeleteApercu.on('click', deleteElement);
}


/************************************************FONCTION****************************************************
 * Nom: imageApercuEdit
 * Description: affiche le formulaire permettant d'éditer une image existante
 * **********************************************************************************************************/
function imageApercuEdit() {
    //récupérer les données 
    var imageTitle = $(this).prev().find('span[data-key=imageTitle]').text();
    var imageDescription = $(this).prev().find('span[data-key=imageDescription]').text();
    var imageSrc = $(this).prev().find('a[data-key=imageSrc]').text();

    //récupéré l'id de l'élément (résumé)
    var idImageEnCours = $(this).parent().attr('data-key');
    //afficher le formulaire du musicien désiré
    var imageAEditer = templateImage.clone();
    //injecter les infos de l'élément dans la ligne de résumé
    imageAEditer.find('h3').text('Edit image');
    imageAEditer.find('input[data-key=imageTitle]').val(imageTitle);
    imageAEditer.find('input[data-key=imageDescription]').val(imageDescription);
    imageAEditer.find('input[data-key=imageSrc]').val(imageSrc);
    imageAEditer.attr('data-key', idImageEnCours);

    var btnSave = $('<button class="pull-right saveArtistImage"><i class="ico-save"></i>Save</button>').appendTo(imageAEditer);
    btnSave.on('click', function() {
        editImage(idImageEnCours, $(this));
    });
    var btnCancel = $('<button class="pull-right cancelArtistImage"><i class="ico-cancel"></i>Cancel</button><br/>').appendTo(imageAEditer);
    btnCancel.on('click', function() {
        cancelEditImage(idImageEnCours, $(this), imageTitle, imageDescription, imageSrc);
    });
    //$(this).parent().parent().next().find('div[data-key=' + idMusicianAAfficher + ']');
    imageAEditer.insertAfter('div[data-key=' + idImageEnCours + '][class="artistImage"]');
    //supprimer
    $(this).parent().remove();
}
/************************************************FONCTION****************************************************
 * Nom: editImage
 * Description: sauvegarder l'image éditée
 * @param id 
 * @param  bouton 
 * **********************************************************************************************************/
function editImage(id, bouton) {
    var imageApercu = templateImageApercu.clone();
    //récupérer les données du musicien
    var imageTitle = bouton.parent().find('input[data-key=imageTitle]').val();
    var imageDescription = bouton.parent().find('input[data-key=imageDescription]').val();
    var imageSrc = bouton.parent().find('input[data-key=artistImage]').val();

    //injecter les infos de l'élément dans la ligne de résumé
    $(imageApercu).find('span[data-key=imageTitle]').text(imageTitle);
    $(imageApercu).find('span[data-key=imageDescription]').text(imageDescription);
    $(imageApercu).find('a[data-key=imageSrc]').text(imageSrc);
    $(imageApercu).attr('data-key', id);
    $(imageApercu).appendTo('.images');
    //$(imageApercu).insertAfter('div[class="image"][data-key=id]');
    //cacher le formulaire du musicien
    bouton.parent().remove();
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'imageApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.artistImage').last());
    btnEditApercu.on('click', imageApercuEdit);
    var btnDeleteApercu = $('<button class=\'imageApercuDelete pull-right\'><i class="ico-delete"></i></button>').appendTo($('.artistImage').last());
    btnDeleteApercu.on('click', deleteElement);
    $('<div class="clearfix"></div>').appendTo($('.artistImage').last());
}

/************************************************FONCTION****************************************************
 * Nom: cancelEditImage
 * Description: annuler l'edition d'une image et rafficher le résumé de la version avant changements
 * @param idImageEnCours
 * @param  bouton 
 * @param imageTitle
 * @param imageDescription
 * @param imageSrc
 * **********************************************************************************************************/
function cancelEditImage(idImageEnCours, bouton, imageTitle, imageDescription, imageSrc) {
    var imageApercu = templateImageApercu.clone();
    //injecter le nom du musicien dans la ligne de résumé
    $(imageApercu).find('span[data-key=imageTitle]').text(imageTitle);
    $(imageApercu).find('span[data-key=imageDescription]').text(imageDescription);
    $(imageApercu).find('a[data-key=imageSrc]').text(imageSrc);
    $(imageApercu).attr('data-key', idImageEnCours);
    $(imageApercu).insertBefore('.images');
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'musicianApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.artistImage').last());
    btnEditApercu.on('click', imageApercuEdit);
    var btnDeleteApercu = $('<button class=\'musicianApercuDelete pull-right\'><i class="ico-delete"></i></button>').appendTo($('.artistImage').last());
    btnDeleteApercu.on('click', deleteElement);
    $('<div class="clearfix"></div>').appendTo($('.artistImage').last());
    bouton.parent().remove();
}

//*********************************************************************************************************************
//*************************************LINKS************************************************************************
//*********************************************************************************************************************

/************************************************FONCTION****************************************************
 * Nom: addLink
 * Description: ajouter un formulaire permettant d'ajouter un lien à l'artiste
 * **********************************************************************************************************/
function addLink() {
    //cloner le template d'ajout d'élément
    var link = templateLink.clone();
    //cloner et rajouter au dom
    $(link).clone().appendTo(".links");
    //incrémenter l'id du prochain musicien
    var nextId = nbLinks;
    $(".link").last().attr('data-key', nextId);
    //ajouter le bouton sauver
    var btnSave = $('<button class="pull-right saveLink"><i class="ico-save"></i>Save</button>').appendTo($(".link").last());
    //ajouter le bouton supprimer
    var btn = $('<button class="deleteLink pull-right"><i class="ico-delete"></i>Delete</button><div class="clearfix"></div>').appendTo($(".link").last());
    //supprimer un musicien
    btn.on('click', deleteElement);
    //sauvegarder un musicien
    btnSave.on('click', function() {
        saveLink(nextId, $(this));
    });
    //incrémenter le nombre d'éléments
    nbLinks++;
}



/************************************************FONCTION****************************************************
 * Nom: saveLink
 * Description: sauvegarder le lien créé et l'afficher dans un cadre de résumé
 * @param id
 * @param bouton
 * **********************************************************************************************************/
function saveLink(id, bouton) {
    var linkApercu = templateLinkApercu.clone();
    //récupérer les données 
    var linkTitle = bouton.parent().find('input[data-key=linkTitle]').val();
    var linkDescription = bouton.parent().find('input[data-key=linkDescription]').val();
    var linkURL = bouton.parent().find('input[data-key=linkURL]').val();
    //injecter les infos de l'élément dans la ligne de résumé
    $(linkApercu).find('span[data-key=linkTitle]').text(linkTitle);
    $(linkApercu).find('span[data-key=linkDescription]').text(linkDescription);
    $(linkApercu).find('a[data-key=linkURL]').text(linkURL);
    $(linkApercu).attr('data-key', id);
    //insérer le résumé dans le DOM
    $(linkApercu).appendTo('.links');
    //supprimer le formulaire d'ajout
    bouton.parent().remove();
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'linkApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.linkApercu').last());
    btnEditApercu.on('click', linkApercuEdit);
    var btnDeleteApercu = $('<button class=\'linkApercuDelete pull-right\'><i class="ico-delete"></i></button><div class="clearfix"></div>').appendTo($('.linkApercu').last());
    btnDeleteApercu.on('click', deleteElement);
}



function linkApercuEdit() {
    //récupérer les données 
    var linkTitle = $(this).prev().find('span[data-key=linkTitle]').text();
    var linkDescription = $(this).prev().find('span[data-key=linkDescription]').text();
    var linkURL = $(this).prev().find('a[data-key=linkURL]').text();

    //récupéré l'id de l'élément (résumé)
    var idLinkEnCours = $(this).parent().attr('data-key');
    //afficher le formulaire du musicien désiré
    var linkAEditer = templateLink.clone();
    //injecter les infos de l'élément dans la ligne de résumé
    linkAEditer.find('h3').text('Edit link');
    linkAEditer.find('input[data-key=linkTitle]').val(linkTitle);
    linkAEditer.find('input[data-key=linkDescription]').val(linkDescription);
    linkAEditer.find('input[data-key=linkURL]').val(linkURL);
    linkAEditer.attr('data-key', idLinkEnCours);

    var btnSave = $('<button class="pull-right saveLinkApercu"><i class="ico-save"></i>Save</button>').appendTo(linkAEditer);
    btnSave.on('click', function() {
        editLink(idLinkEnCours, $(this));
    });
    var btnCancel = $('<button class="pull-right cancelLinkApercu"><i class="ico-cancel"></i>Cancel</button><br/>').appendTo(linkAEditer);
    btnCancel.on('click', function() {
        cancelEditLink(idLinkEnCours, $(this), linkTitle, linkDescription, linkURL);
    });
    //$(this).parent().parent().next().find('div[data-key=' + idMusicianAAfficher + ']');
    linkAEditer.insertAfter('div[data-key=' + idLinkEnCours + '][class="linkApercu"]');
    //supprimer
    $(this).parent().remove();
}

/************************************************FONCTION****************************************************
 * Nom: editLink
 * Description: sauvegarder l'image éditée
 * @param id 
 * @param  bouton 
 * **********************************************************************************************************/
function editLink(id, bouton) {
    var linkApercu = templateLinkApercu.clone();
    //récupérer les données du musicien
    var linkTitle = bouton.parent().find('input[data-key=linkTitle]').val();
    var linkDescription = bouton.parent().find('input[data-key=linkDescription]').val();
    var linkURL = bouton.parent().find('input[data-key=linkURL]').val();

    //injecter les infos de l'élément dans la ligne de résumé
    $(linkApercu).find('span[data-key=linkTitle]').text(linkTitle);
    $(linkApercu).find('span[data-key=linkDescription]').text(linkDescription);
    $(linkApercu).find('a[data-key=linkURL]').text(linkURL);
    $(linkApercu).attr('data-key', id);
    $(linkApercu).appendTo('.links');
    //imageApercu.insertBefore('div[class="image"][data-key='+id+']');
    //cacher le formulaire du musicien
    bouton.parent().remove();
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'linkApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.linkApercu').last());
    btnEditApercu.on('click', linkApercuEdit);
    var btnDeleteApercu = $('<button class=\'linkApercuDelete pull-right\'><i class="ico-delete"></i></button>').appendTo($('.linkApercu').last());
    btnDeleteApercu.on('click', deleteElement);
    $('<div class="clearfix"></div>').appendTo($('.linkApercu').last());
}

/************************************************FONCTION****************************************************
 * Nom: cancelEditImage
 * Description: annuler l'edition d'une image et rafficher le résumé de la version avant changements
 * @param idLinkEnCours
 * @param  bouton 
 * @param linkTitle
 * @param linkDescription
 * @param linkURL
 * **********************************************************************************************************/
function cancelEditLink(idLinkEnCours, bouton, linkTitle, linkDescription, linkURL) {
    var linkApercu = templateImageApercu.clone();
    //injecter le nom du musicien dans la ligne de résumé
    $(linkApercu).find('span[data-key=linkTitle]').text(linkTitle);
    $(linkApercu).find('span[data-key=linkDescription]').text(linkDescription);
    $(linkApercu).find('a[data-key=linkURL]').text(linkURL);
    $(linkApercu).attr('data-key', idLinkEnCours);
    $(linkApercu).insertBefore('.links');
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'musicianApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.linkApercu').last());
    btnEditApercu.on('click', linkApercuEdit);
    var btnDeleteApercu = $('<button class=\'musicianApercuDelete pull-right\'><i class="ico-delete"></i></button>').appendTo($('.linkApercu').last());
    btnDeleteApercu.on('click', deleteElement);
    $('<div class="clearfix"></div>').appendTo($('.linkApercu').last());
    bouton.parent().remove();
}

//*********************************************************************************************************************
//*************************************ARTIST************************************************************************
//*********************************************************************************************************************

/************************************************FONCTION****************************************************
 * Nom: addArtist
 * Description: ajouter un formulaire permettant de créer un artiste
 * **********************************************************************************************************/
function addArtist() {
    if ($('#artists').is(':empty')) {
        var artist = templateArtist.clone();
        //incrémenter l'id du prochain musicien
        var nextId = nbArtists;
        //cloner et rajouter au dom
        $(artist).clone().appendTo("#artists");
        //modifier l'id du dernier élément ajouté
        $(".artist").last().attr('id', 'artist_' + nextId);
        //ajouter le bouton de sauvegarde intermédiaire
        var btnSave = $('<button class="pull-right saveArtist"><i class="ico-save"></i>Save Artist</button>').appendTo('fieldset[id=infosArtist]');
        btnSave.on('click', function() {
            saveArtist(nbArtist, $(this));
        });
        //supprimer un musicien
        $('.deleteArtist').click(deleteElement);
        //ajouter une image
        $('#addImage').on('click', addImage);
        //ajouter un musicien
        $('#addMusician').click(addMusician);
        //ajouter un lien
        $('#addLink').on('click', addLink);
        //ajouter un genre
        $('#addGenre').on('click', addGenre);
        nbArtist++;
    } else {
        $('#alertArtist').toggle(1000).delay(2000).toggle(1000);
    }
}

/************************************************FONCTION****************************************************
 * Nom: saveArtist
 * Description: sauvegarder l'artist (incomplet) et afficher le reste du formulaire (musiciens, liens et images)
 * **********************************************************************************************************/
function saveArtist(id, bouton) {
    //ajouter les champs facultatifs
    $('#links').show();
    $('#images').show();
    $('#musicians').show();
    $('.saveArtist').remove();
    $('<div class="input-group"><p class="pull-left">Short description:</p><textarea name="shortDescription" cols="40" rows="3" id="shortDescription"></textarea></div>').appendTo('fieldset[id=infosArtist]');
    $('<div class="input-group"><p class="pull-left">Complete description:</p><textarea name="completeDescription" cols="40" rows="4" id="completeDescription"></textarea></div>').appendTo('fieldset[id=infosArtist]');
    //ajouter le bouton de sauvegarde
    var btnSavecomplete = $('<button class="pull-right saveArtistComplete"><i class="ico-save"></i>Save Artist</button>').appendTo('.artist');
    btnSavecomplete.on('click', function() {
        saveArtistComplete(id, $(this));
    });
    var btnDeleteArtist = $('<button class="pull-right deleteArtist"><i class="ico-delete"></i>Delete Artist</button><br/>').appendTo('.artist');
    btnDeleteArtist.on('click', deleteElement);
}

/************************************************FONCTION****************************************************
 * Nom: saveArtistComplete
 * Description: sauvegarder l'artist (complet) et l'afficher l'affiche dans un cadre de résumé
 * @param id
 * @param bouton
 * **********************************************************************************************************/
function saveArtistComplete(id, bouton) {
    var artistApercu = templateArtistApercu.clone();
    //récupérer les données du musicien
    var name = bouton.parent().find('input[id=artistName]').val();
    var genre = bouton.parent().find('select[data-key=genre]').val();
    var shortDescription = bouton.parent().find('textarea[id=shortDescription]').val();
    alert(name);
    alert(genre);
    alert(shortDescription);

    //injecter le nom du musicien dans la ligne de résumé
    $(artistApercu).find('span[data-key=artistName]').text(name);
    $(artistApercu).find('span[data-key=genre]').text(genre);
    $(artistApercu).find('span[data-key=shortDescription]').text(shortDescription);

    $(artistApercu).attr('data-key', id);
    $(artistApercu).appendTo('#listArtists');
    //cacher le formulaire de l'artiste
    bouton.parent().remove();
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'artistApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.artistApercu').last());
    btnEditApercu.on('click', artistApercuEdit);
    var btnDeleteApercu = $('<button class=\'artistApercuDelete pull-right\'><i class="ico-delete"></i></button><div class="clearfix"></div>').appendTo($('.artistApercu').last());
    btnDeleteApercu.on('click', deleteElement);
}

function deleteElement(){
    $(this).parent().remove();
}

function artistApercuEdit() {

}

//*********************************************************************************************************************
//*************************************INSTRUMENt**********************************************************************
//*********************************************************************************************************************
//function addInstrument() {
//    //récupérer le nombre de ticket actuellement visibles
//    var nbInstruments = $(".instrument").length;
//    //incrémenter l'id du prochain ticket
//    var nextId = nbInstruments + 1;
//    //cloner et rajouter au dom
//    $(".instrument").first().clone().appendTo("#instruments");
//    //modifier l'id du dernier élément ajouté
//    $(".instrument").last().attr('id', 'instrument_' + nextId);
//    //faire apparaître
//    $(".instrument").last().removeClass('hide');
//    //supprimer un musicien
//    $('.deleteInstrument').click(deleteInstrument);
//}
//
//function deleteInstrument() {
//    $(this).parent().remove();
//}

function createEvent() {
//masque les messages d'erreur
    $('#alertArtist').hide();
    //cloner les templates
    templateTicket = $('.ticket').clone();
    templateMusician = $('.musician').clone();
    templateMusicianApercu = $('.musicianApercu').clone();
    templateImage = $('.image').clone();
    templateLink = $('.link').clone();
    templateLinkApercu = $('.linkApercu').clone();
    templateGenre = $('.genre').clone();
    templateImageApercu = $('.artistImage').clone();
    $('#links').hide();
    $('#images').hide();
    $('#musicians').hide();

    //vider les champs
    $('.musicians').empty();
    $('#listImages').empty();
    $('#listLinks').empty();
    //$('#listMusicians').empty();
    $('#listMusicians').remove();
    $('.images').empty();
    $('.links').empty();
    //cloner le template d'artiste
    templateArtist = $('.artist').clone();
    templateArtistApercu = $('.artistApercu').clone();

    //vider les artistes
    $('#artists').empty();
    $('#listArtists').empty();

    //éVéNEMENTS
    $('#addTicketCategory').on('click', addTicket);
    $('#addArtist').on('click', addArtist);

    //$('#addInstrument').click(addInstrument);
}
