$(function() {
    $.ajax //Requête de connection API
            ({
                type: "POST",
                url: LOGIN,
                dataType: 'json',
                //async: false,
                data: {"email": "chris@chris.ch", "password": "chr"}, //AUTH_MANAGER_FR       //{"email":"matou@matou.ch", "password":"matou"}

                success: function(data, textStatus, jqXHR) {
                    console.log("Dialogue client serveur : " + textStatus);
                    console.log("TextStatut : " + data.status);


                    console.log(data);
                    if (data.status === 'success') {
                        console.log("Data.title : ");
                        console.log(data.data.title);
                    } else {
                        console.log("Phrase d'erreur : " + data.message.title);
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

    var instrusList = new Instruments();
    var musiciansList = new Musicians();

    var artistsList = new Artists();
    var eventsList = new Events();
    var representerList = new Representers();
    

    var advancedResearchEvent = new ViewAdvancedResearchEvent({collection: eventsList});
    var advancedResearchArtist = new ViewAdvancedResearchArtist({collection: artistsList});
    //var researchRepresentant = new ViewResearchRepresentant({collection: artistsList});
    var eventsListView = new ViewEvents({collection: eventsList});
    var artistsListView = new ViewArtists({collection: artistsList});
    var representantsListView = new ViewRepresentant({collection: representerList});
    var showEvent = new ViewShowEvent({collection: eventsList});
    var showArtist = new ViewShowArtist({collection: artistsList});
    var addEvent = new ViewAddEvent({collection: eventsList});


    console.log('-------------DOM IS READY----------------------');
    $('#advancedResearchEvents').show;
    $('#login').hide();
    $('#eventsList').show();
    $('#artistsList').hide();
    $('#advancedResearchArtists').hide();
    $('#researchRepresentants').hide();
    $('#representantsList').hide();
    $('#showDetailEvent').hide();
    $('#showDetailArtist').hide();
    $('#addEvent').hide();
    $('#musiciansList').hide();
    console.log("COUCOU");


    console.log('-------------DOM IS FINISH---------------------');

    function IsConnected() {
        console.log("start function IsConnected()");

        //RESEARCH
        advancedResearchEvent.render().$el.appendTo('#advancedResearchEvents');
        advancedResearchArtist.render().$el.appendTo('#advancedResearchArtists');
        //researchRepresentant.render().$el.appendTo('#researchRepresentants');

        //LIST
        eventsListView.render().$el.appendTo('#eventsList');
        artistsListView.render().$el.appendTo('#artistsList');
        representantsListView.render().$el.appendTo('#representantsList');
        

        //DETAIL
        showEvent.render().$el.appendTo('#showDetailEvent');
        showArtist.render().$el.appendTo('#showDetailArtist');

        //ADD
        addEvent.render().$el.appendTo('#addEventView');
        
        
        eventsList.fetch({
            success: function(collection, response, options) {
                console.log('FETCH EVENT LIST');
                console.log(eventsList);
                console.log(JSON.stringify(eventsList));
            }
        });

//        artistsList.fetch({
//            success: function(collection, response, options) {
//                console.log(artistsList);
//                console.log(JSON.stringify(artistsList));
//            }
//
//        });


    }
    ;
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


//console.log('--------------------  All Events  --------------------');
//eventsList.fetch({
//    success: function (collection, response, options) {
//        console.log(eventsList);
//        console.log(JSON.stringify(eventsList));
//    }
//});

//console.log('--------------------  All Artists  --------------------');

//
//console.log('--------------------  All Musicians  --------------------');
//musiciansList.fetch({
//    success: function (collection, response, options) {
//        console.log(musiciansList);
//        console.log(JSON.stringify(musiciansList));
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




