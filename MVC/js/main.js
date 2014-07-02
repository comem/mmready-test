/*--------------------------------------------------------------------------
 *    Default Value Ajax
 *///-----------------------------------------------------------------------



$.ajaxSetup({
    
    xhrFields: {
        withCredentials: true
    }
    
});

var templateMusician;
var templateTicket;
var templateImage;
var templateLink;




$(function() {

//Function holdready to get VALiDATOR   
$.holdReady( true );
$.getScript( "js/pieces/ValidatorModelnView.js", function() {
$.holdReady( false );
});
    
   // console.log("---DOM IS READY---");

    var instrusList = new Instruments();
    var event1 = new Event({title: 'La grosse fiesta 2014', name_de: 'rock', start_date_hour: '25.06.2014',
        ending_date_hour: '26.06.2014', opening_doors: '16:00'});
    var representant1 = new Representer({first_name: 'Jean', last_name: 'Ducommun',
        email: 'jean.duc@gmail.com', phone: '0789867877'});
    var artistsList = new Artists();
    var eventsList = new Events([event1]);
    var representerList = new Representers([representant1]);
    
    var event = new Event({});
    var artist = new Artist({});





    var advancedResearchEvent = new ViewAdvancedResearchEvent({collection: eventsList});
    var advancedResearchArtist = new ViewAdvancedResearchArtist({collection: artistsList});
    var researchRepresenter = new ViewResearchRepresenter({collection: representerList});
    var eventsListView = new ViewEvents({collection: eventsList});
    var artistsListView = new ViewArtists({collection: artistsList});
    var representersListView = new ViewRepresenters({collection: representerList});

    var addEvent = new ViewAddEvent({model: event});
    var addArtist = new ViewAddArtist({model: artist});

        //RESEARCH
        advancedResearchEvent.render().$el.appendTo('#advancedResearchEvents');
        advancedResearchArtist.render().$el.appendTo('#advancedResearchArtists');
        researchRepresenter.render().$el.appendTo('#researchRepresenters');

        //LIST
        eventsListView.render().$el.appendTo('#eventsList');
        artistsListView.render().$el.appendTo('#artistsList');
        representersListView.render().$el.appendTo('#representersList');
        
        //ADD
        addEvent.render().$el.appendTo('#addEvent');
        addArtist.render().$el.appendTo('#addOneArtist');


        artistsList.fetch({
            success: function(collection, response, options) {
                
            }
           

        });

 //console.log(artistsList);
   //             console.log(JSON.stringify(artistsList));


//    // gestion des boutons "back" et "forward" du browser
//    $(window).on('popstate', historyHandler);
    
    
   
 
    
     $(".listArtists p").each(function (index, elem){
        $(elem).prepend(++index +". ");
    });
    
    ///////GESTION DES EVENEMENT DANS LES FORMULAIRE DE CREATE ARTIST ET EVENT////////////
    
//    //musiciens
//    templateMusician = $('.musician').clone();
//    $('#addMusician').click(addMusician);
//    $('.musicians').empty();
//    //ticket
//    templateTicket = $('.ticket').clone();
//    $('#addTicketCategory').on('click', addTicket);
//    //image
//    templateImage = $('.image').clone();
//    $('#addImage').on('click', addImage);
//    $('.images').empty();
//    //link
//    templateLink = $('.link').clone();
//    $('#addLink').on('click', addLink);
//    $('.links').empty();
//    //$('#addInstrument').click(addInstrument);
});



//
//////***********************************************************************************
//////*************************************TICKETS***************************************
//////***********************************************************************************
//function addTicket() {
//    var ticket = templateTicket.clone();
//    //récupérer le nombre de ticket actuellement visibles
//    var nbTickets = $(".ticket").length;
//    //incrémenter l'id du prochain ticket
//    var nextId = nbTickets + 1;
//    //cloner et rajouter au dom
//    $(ticket).clone().appendTo("#selectTicket");
//    //modifier l'id du dernier élément ajouté
//    $(".ticket").last().attr('id', 'ticket_' + nextId);
//    //faire apparaître
//    $(".ticket").last().removeClass('hide');
//    //ajouter le bouton supprimer
//    $('<button class="deleteTicket"><i class="ico-delete "></i>Supprimer</button> ').appendTo($(".ticket").last());
//    //supprimer un ticket
//    $('.deleteTicket').on('click', deleteTicket);
//    
//}
//
//function deleteTicket() {
//    $(this).parent().remove();
//}
//
////***********************************************************************************
////*************************************MUSICIEN**************************************
////***********************************************************************************
//function addMusician() {
//    var musician=templateMusician.clone();
//    //récupérer le nombre de ticket actuellement visibles
//    var nbMusicians = $(".musician").length;
//    //incrémenter l'id du prochain musicien
//    var nextId = nbMusicians + 1;
//    //cloner et rajouter au dom
//    $(musician).clone().appendTo(".musicians");
//    //modifier l'id du dernier élément ajouté
//    $(".musician").last().attr('id', 'musician_' + nextId);
//    //supprimer un musicien
//    $('.deleteMusician').click(deleteMusician);
//    //sauvegarder un musicien
//    $('.saveMusician').click(saveMusician);
//
//}
//
//function deleteMusician() {
//    $(this).parent().remove();
//}
//function saveMusician() {
//    var firstName = $(this).parent().find('input[data-key=musicianFirstName]').val();
//    var lastName = $(this).parent().find('input[data-key=musicianLastName]').val();
//    var sceneName = $(this).parent().find('input[data-key=musicianScenetName]').val();
//    alert(firstName);
//    alert(lastName);
//}
////***********************************************************************************
////*************************************IMAGE**************************************
////***********************************************************************************
//function addImage() {
//    var image=templateImage.clone();
//    //récupérer le nombre de ticket actuellement visibles
//    var nb = $(".image").length;
//    //incrémenter l'id du prochain musicien
//    var nextId = nb + 1;
//    //cloner et rajouter au dom
//    $(image).clone().appendTo(".images");
//    //modifier l'id du dernier élément ajouté
//    $(".image").last().attr('id', 'image_' + nextId);
//    
//    //supprimer un musicien
//    $('.deleteImage').click(deleteImage);
//}
//
//function deleteImage() {
//    $(this).parent().remove();
//}
//
////***********************************************************************************
////*************************************LINKS**************************************
////***********************************************************************************
//function addLink() {
//    var image=templateLink.clone();
//    //récupérer le nombre de ticket actuellement visibles
//    var nb = $(".link").length;
//    //incrémenter l'id du prochain musicien
//    var nextId = nb + 1;
//    //cloner et rajouter au dom
//    $(image).clone().appendTo(".links");
//    //modifier l'id du dernier élément ajouté
//    $(".link").last().attr('id', 'link_' + nextId);
//    
//    //supprimer un musicien
//    $('.deleteLink').click(deleteLink);
//
//}
//
//function deleteLink() {
//    $(this).parent().remove();
//}



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




