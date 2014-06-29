/*
 |--------------------------------------------------------------------------
 | DOM
 |--------------------------------------------------------------------------
 */
$(function() {
    //research
    $('#advancedResearchEvents').append(advancedResearchEvent.el);
    $('#advancedResearchArtists').hide();
    $('#advancedResearchArtists').append(advancedResearchArtist.el);
    $('#researchRepresentants').hide();
    $('#researchRepresentants').append(researchRepresentant.el);
    //lists
    $('#eventsList').append(eventListView.el);
    $('#artistsList').hide();
    //artistsListView.render().$el.appendTo('#artistsList');
    $('#artistsList').append(artistsListView.el);
    //artistsList.fetch();
    console.log(artistsList);
    $('#representantsList').hide();
    $('#representantsList').append(representantsListView.el);
    //details
    $('#showDetailEvent').hide();
    $('#showDetailEvent').append(showEvent.el);
    $('#showDetailArtist').hide();
    $('#showDetailArtist').append(showArtist.el);
    //add
    $('#addEvent').hide();
    $('#addEvent').append(addEventView.el);
//    // gestion des boutons "back" et "forward" du browser
//    $(window).on('popstate', historyHandler);
//    // simule un premier changement d'url
//    $(window).trigger('popstate');
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



