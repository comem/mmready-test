/*--------------------------------------------------------------------------
 *    Default Value Ajax
 *///-----------------------------------------------------------------------


$.ajaxSetup({
    
    xhrFields: {
        withCredentials: true
    }
    
});

$(function() {
    

    var instrusList = new Instruments();
    var event1 = new Event({title: 'La grosse fiesta 2014', name_de: 'rock', start_date_hour: '25.06.2014',
        ending_date_hour: '26.06.2014', opening_doors: '16:00'});
    var representant1 = new Representer({first_name: 'Jean', last_name: 'Ducommun',
        email: 'jean.duc@gmail.com', phone: '0789867877'});
    var artistsList = new Artists();
    var eventsList = new Events([event1]);
    var representerList = new Representers([representant1]);





    var advancedResearchEvent = new ViewAdvancedResearchEvent({collection: eventsList});
    var advancedResearchArtist = new ViewAdvancedResearchArtist({collection: artistsList});
    //var researchRepresentant = new ViewResearchRepresentant({collection: artistsList});
    var eventsListView = new ViewEvents({collection: eventsList});
    var artistsListView = new ViewArtists({collection: artistsList});
    var representersListView = new ViewRepresenters({collection: representerList});

    //var addEvent = new ViewAddEvent({collection: eventsList});



    $('#advancedResearchEvents').show;
    $('#login').hide();
    $('#eventsList').show();
    $('#artistsList').hide();
    $('#advancedResearchArtists').hide();
    $('#researchRepresenters').hide();
    $('#representersList').hide();
    $('#showDetailEvent').hide();
    $('#showDetailArtist').hide();
    $('#addEvent').hide();
    $('#musiciansList').hide();
    $('#showTicket').hide();
    $('#showRepresenter').hide();
    



        //RESEARCH
        advancedResearchEvent.render().$el.appendTo('#advancedResearchEvents');
        advancedResearchArtist.render().$el.appendTo('#advancedResearchArtists');
        //researchRepresentant.render().$el.appendTo('#researchRepresentants');

        //LIST
        eventsListView.render().$el.appendTo('#eventsList');
        artistsListView.render().$el.appendTo('#artistsList');
        representersListView.render().$el.appendTo('#representersList');
        
        //ADD
        //addEvent.render().$el.appendTo('#addEventView');


        artistsList.fetch({
            success: function(collection, response, options) {
                console.log(artistsList);
                console.log(JSON.stringify(artistsList));
            }

        });




//    // gestion des boutons "back" et "forward" du browser
//    $(window).on('popstate', historyHandler);
    
    $('ul#mainNav a').on('click', function(e) {
        menuElementClickHandler($(this));
        e.preventDefault();
        return false;
    });
    $('a').on('click', function(e) {
        menuElementClickHandler($(this));
        e.preventDefault();
        return false;
    });
    $('#plusOption').on('click', function(e) {
        $('#advancedResearchEvents').show();
        $('#eventsList').show();
    });
    
     $(".listArtists p").each(function (index, elem){
        $(elem).prepend(++index +". ");
    });
});
/*
 |--------------------------------------------------------------------------
 | Gestion de l'historique (pour les boutons "back" et "forward" du browser
 |--------------------------------------------------------------------------
 */
function historyHandler() {
    // Prend la dernière partie de l'url (après le dernier '/')
    var sectionName = location.pathname.split("/").pop();
    // Si aucune section (page d'accueil ?), on va sur 'eventsList' par défaut
    if (sectionName === '') {
        sectionName = DEFAULT_SECTION;
    }
    menuGoToSection(sectionName);
}
/*
 |--------------------------------------------------------------------------
 | Gestion du menu
 |--------------------------------------------------------------------------
 */
//API History
function menuElementClickHandler(menuElement) {
    // Recupère la section corespondante (attribut href du lien)
    var sectionName = menuElement.attr('href');
    // Si la section est déjà active ne rien faire
    var actualSectionName = location.pathname.split("/").pop();
    if (sectionName === actualSectionName) {
        return;
    }
    // Simule le changement d'url ver cette section
    history.pushState(null, null, sectionName);
    // Affiche la section en question
    menuGoToSection(sectionName);
}
function menuGoToSection(sectionName) {
    var nodeIdToShow = '#' + sectionName;
    // Cache toutes les <section>
    $('section').hide();
    // Affichage de la bonne <section>
    $(nodeIdToShow).show();
}



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




