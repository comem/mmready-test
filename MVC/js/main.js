var DEFAULT_SECTION = 'eventsList';

/*--------------------------------------------------------------------------
 *    Default Value Ajax
 *///-----------------------------------------------------------------------


$.ajaxSetup({
    xhrFields: {
        withCredentials: true
    }

});




$(function() {

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



    var nav = new ViewNav({model: new Nav()});
    var advancedResearchEvent = new ViewAdvancedResearchEvent({collection: new Events()});
    var advancedResearchArtist = new ViewAdvancedResearchArtist({collection: new Artists()});
    //var researchRepresentant = new ViewResearchRepresentant({collection: artistsList});
    var eventsListView = new ViewEvents({collection: new Events()});
    var artistsListView = new ViewArtists({collection: new Artists()});
    var representersListView = new ViewRepresenters({collection: new Representers()});

    var addEvent = new ViewAddEvent({model: new Event({})});
    var addArtist = new ViewAddArtist({model: new Artist({})});


//
//    $('#advancedResearchEvents').show;
//    $('#login').hide();
//    $('#eventsList').show();
//    $('#artistsList').hide();
//    $('#advancedResearchArtists').hide();
//    $('#researchRepresenters').hide();
//    $('#representersList').hide();
//    $('#showDetailEvent').hide();
//    $('#showDetailArtist').hide();
//    $('#addEvent').hide();
//    $('#addOneArtist').hide();
//    $('#musiciansList').hide();
//    $('#showTicket').hide();
//    $('#showRepresenter').hide();
//    $('#addArtistIntoEvent').hide();


    //NAV
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


