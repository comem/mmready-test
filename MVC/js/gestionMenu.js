


window.onpopstate = function(event) {
    var section = location.pathname.split('/').pop();
    menuGoToSection(section);
};


$(function() {
    
   
    $('.advancedResearch').hide();
    $('#advancedResearchEvents').hide();
    $('#advancedResearchArtists').hide();
    $('#advancedresearchRepresenters').hide();
    
    $('#login').hide();
    $('#eventsList').show();
    $('#artistsList').hide();
    $('#researchRepresenters').hide();
    $('#representersList').hide();
    $('#showDetailEvent').hide();
    $('#showDetailArtist').hide();
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


