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
    //var event1 = new Event({title: 'La grosse fiesta 2014', name_de: 'rock', start_date_hour: '25.06.2014',
       // ending_date_hour: '26.06.2014', opening_doors: '16:00'});
    var representant1 = new Representer({first_name: 'Jean', last_name: 'Ducommun',
        email: 'jean.duc@gmail.com', phone: '0789867877'});
    //var artistsList = new Artists();
    //var eventsList = new Events([event1]);
    var representerList = new Representers([representant1]);

    var event = new Event({});
    
    
    
    
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




    var advancedResearchEvent = new ViewAdvancedResearchEvent({collection: new Events()});
    var advancedResearchArtist = new ViewAdvancedResearchArtist({collection: new Artists()});
    //var researchRepresentant = new ViewResearchRepresentant({collection: artistsList});
    var eventsListView = new ViewEvents({collection: new Events()});
    var artistsListView = new ViewArtists({collection: new Artists()});
    var representersListView = new ViewRepresenters({collection: representerList});

    var addEvent = new ViewAddEvent({model: event});
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


