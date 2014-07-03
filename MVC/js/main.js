window.onpopstate = function(event) {
    var section = location.pathname.split('/').pop();
    menuGoToSection(section);
};


/*--------------------------------------------------------------------------
 *    Default Value Ajax
 *///-----------------------------------------------------------------------


//$.ajaxSetup({
//    xhrFields: {
//        withCredentials: true
//    }
//
//});

$(function() {
    
    
    navMgmt();

    console.log("---DOM IS READY---");

    var instrusList = new Instruments();
    
    //***************** AUTOCOMPLETE VIEW **********************************
    
    var plugins = new PluginCollection();
     new AutoCompleteView({
        input: $("#autocomplete"),
        model: plugins,
        onSelect: function(model){
            $("#selectionned").find("p").html(model.value());
        }
    }).render();

    //***************** AUTOCOMPLETE VIEW **********************************

        $("#navSection").hide;
        var loginViewVar = new LoginView({model: new LoginModel()});
        


    var nav = new ViewNav({model: new Nav()});
    var advancedResearchEvent = new ViewAdvancedResearchEvent({collection: new Events()});
    var advancedResearchArtist = new ViewAdvancedResearchArtist({collection: new Artists()});
    //var researchRepresentant = new ViewResearchRepresentant({collection: artistsList});
    var eventsListView = new ViewEvents({collection: new Events()});
    var artistsListView = new ViewArtists({collection: new Artists()});
    var representersListView = new ViewRepresenters({collection: new Representers()});

    var addEvent = new ViewAddEvent({model: new Event({})});
    var addArtist = new ViewAddArtist({model: new Artist({})});

    //NAV
    loginViewVar.$el.appendTo("body");
    nav.render().$el.appendTo('body');

    //RESEARCH
    advancedResearchEvent.render().$el.appendTo('#advancedResearchEvents');
    advancedResearchArtist.render().$el.appendTo('#advancedResearchArtists');
    //researchRepresentant.render().$el.appendTo('#researchRepresentants');

    //LIST
    eventsListView.render().$el.appendTo('#eventsList');
    artistsListView.render().$el.appendTo('#artistsList');
    representersListView.render().$el.appendTo('#representersList');

    //ADD
    addEvent.render().$el.appendTo('#addEvent');
    addArtist.render().$el.appendTo('#addOneArtist');

    
    $(".listArtists p").each(function(index, elem) {
        $(elem).prepend(++index + ". ");
    });

});

    //----------------------------------------------------------------------
    //                   Nav Management
    //----------------------------------------------------------------------
function navMgmt(){
    
    

    
    $('.advancedResearch').hide();
    $('#advancedResearchEvents').hide();
    $('#advancedResearchArtists').hide();
    $('#advancedresearchRepresenters').hide();
    
    $('#login').show();
    $('#eventsList').hide();
    $('#artistsList').hide();
    $('#researchRepresenters').hide();
    $('#representersList').hide();
    $('#showDetailEvent').hide();
    $('#showDetailArtist').hide();
    $('#showDetailRepresenter').hide();
    $('#addOneArtist').hide();
    $('#musiciansList').hide();
    $('#showTicket').hide();
    $('#showRepresenter').hide();
    $('#addArtistIntoEvent').hide();
    $('#addEvent').hide();
   


// GESTION ADVANCED SEARCH

$('nav').on('click', '#plusOption', function(e) {
    e.preventDefault();
$('.advancedResearch').toggle(function(){
$('#plusOption > i').toggleClass('ico-plus ico-calendar');
});
});


$('body').on('click', '#events', function(e){
     $('#advancedresearchRepresenters').hide();
    $('#advancedResearchArtists').hide();
    $('#advancedResearchEvents').show();
});

$('body').on('click', '#artists', function(e){
     $('#advancedResearchEvents').hide();
    $('#advancedresearchRepresenters').hide();
    $('#advancedResearchArtists').show();
});

$('body').on('click', '#filterRepresenters', function(e){
    $('#advancedResearchArtists').hide();
    $('#advancedResearchEvents').hide();
    $('#advancedresearchRepresenters').show();
});



// gestion des boutons "back" et "forward" du browser
    
    $('ul#mainNav a').on('click', function(e) {
        menuElementClickHandler($(this));
        e.preventDefault();
        return false;
    });



     $('body').on('click', '.secondNav', function(e) {
        menuElementClickHandler($(this));
        e.preventDefault();
        return false;
    });


    $('body').on('click','a', function(e) {
        menuElementClickHandler($(this));
        e.preventDefault();
        return false;
    });





$('ul#mainNav a:first').trigger('click');



    
}


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
    // Enlève la classe "activ" de tous les liens
    $('#mainNav > li').removeClass('active');
    // Rajoute la classe "activ" pour le lien actuellement clické
    menuElement.parent().addClass('active');
     // Cache toutes les >section>

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


