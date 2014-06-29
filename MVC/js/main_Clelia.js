

/*
 |--------------------------------------------------------------------------
 | Configuration (constantes)
 |--------------------------------------------------------------------------
 */
var DATE_FORMAT = 'DD d MM yy'; //Format des dates pour l'affichage
var DEFAULT_SECTION = 'eventsList';

/*
 |--------------------------------------------------------------------------
 | Fallback et chargements conditionnels
 |--------------------------------------------------------------------------
 */
// Charge conditionnellement la css pour le fallback des champs date
$.holdReady(true); // Indique ? jQuery d'attendre avant l'evt. DOM ready
Modernizr.load({
    test: Modernizr.inputtypes.date,
    nope: 'css/jquery-ui.css',
    complete: function() {
        $.holdReady(false);
    }
});

/*
 |--------------------------------------------------------------------------
 | extending Backbone classes
 |--------------------------------------------------------------------------
 */
var MyModel = Backbone.Model.extend();
var MyCollection = Backbone.Collection.extend();
var MyModelNestedCollection = Backbone.Model.extend({
    nested: 'collection',
    initialize: function(attrs, options) {
        this.get(this.nested).on('all', function(eventName) {
            this.trigger(eventName, this);
        }, this);
    },
    toJSON: function() {
        var colObj = {};
        colObj[this.nested] = this.get(this.nested).toJSON();
        return _.extend(
                Backbone.Model.prototype.toJSON.apply(this, arguments),
                colObj
                );
    }
});
var MyView = Backbone.View.extend();

/*
 |--------------------------------------------------------------------------
 | INSTRUMENT
 |--------------------------------------------------------------------------
 */
var Instrument = MyModel.extend();
var Instruments = MyCollection.extend({
    model: Instrument
});


/*
 |--------------------------------------------------------------------------
 | MUSICIAN
 |--------------------------------------------------------------------------
 */

var Musician = MyModelNestedCollection.extend({
    nested: 'instruments',
    defaults: function() {
        return {
            instruments: new Instruments()
        }
    }
});

var Musicians = MyCollection.extend({
    model: Musician
});

/*
 |--------------------------------------------------------------------------
 | ADVANCED RESEARCH ARTIST
 |--------------------------------------------------------------------------
 */

var ViewAdvancedResearchArtist = MyView.extend({
    template: templates.advancedResearchArtist,
    events: {
        'click button#events': 'showListEvent',
        'click button#artists': 'showListArtist',
        'click button#filterRepresenters' : 'showListRepresentant',
        'click a#close': 'close'
                //'click button#filterRepresenters': 'detail',

    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {event: this.collection.toJSON()}));
        return this;

    },
    showListEvent: function() {
        $('#artistsList').hide();
        $('#eventsList').show();
        $('#advancedResearchArtists').hide();
        $('#advancedResearchEvents').show();
    },
    showListArtist: function() {
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#artistsList').show();
        $('#advancedResearchArtists').show();
    },
    showListRepresentant : function() {
        console.log('fuck');
        $('#artistsList').hide();
        $('#advancedResearchArtists').hide();
        $('#representantsList').show();
        $('#researchRepresentants').show();
    },
    close: function() {
        $('#advancedResearchArtists').hide();
    }

});

/*
 |--------------------------------------------------------------------------
 | ADVANCED RESEARCH EVENT
 |--------------------------------------------------------------------------
 */

var ViewAdvancedResearchEvent = MyView.extend({
    template: templates.advancedResearchEvent,
    events: {
        'click button#events': 'showListEvent',
        'click button#artists': 'showListArtist',
        'click button#representer' : 'showListRepresentant',
        'click a#close': 'close'
                //'click button#filterRepresenters': 'detail',

    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {event: this.collection.toJSON()}));
        return this;
    },
    showListEvent: function() {
        $('#artistsList').hide();
        $('#eventsList').show();
        $('#advancedResearchEvents').show();
        $('#advancedResearchArtists').hide();
    },
    showListArtist: function() {
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#artistsList').show();
        $('#advancedResearchArtists').show();
    },
    showListRepresentant : function() {
        console.log('fuck');
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#researchRepresentants').show();
        $('#representantsList').show();
    },
    close: function() {
        $('#advancedResearchEvents').hide();
    }

});

/*
 |--------------------------------------------------------------------------
 | RESEARCH REPRESENTANTS
 |--------------------------------------------------------------------------
 */

var ViewResearchRepresentant = MyView.extend({
    template: templates.researchRepresentant,
    events: {
        'click button#events': 'showListEvent',
        'click button#artists': 'showListArtist',
        'click button#filterRepresenters' : 'showListRepresentant',
        'click a#close': 'close'
                //'click button#filterRepresenters': 'detail',

    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {event: this.collection.toJSON()}));
        return this;

    },
    showListEvent: function() {
        $('#artistsList').hide();
        $('#eventsList').show();
        $('#advancedResearchArtists').hide();
        $('#advancedResearchEvents').show();
    },
    showListArtist: function() {
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#artistsList').show();
        $('#advancedResearchArtists').show();
    },
    showListRepresentant : function() {
        console.log('fuck');
        $('#artistsList').hide();
        $('#advancedResearchArtists').hide();
        $('#researchRepresentants').show();
        $('#representantsList').show();
    },
    close: function() {
        $('#advancedResearchArtists').hide();
    }

});


/*
 |--------------------------------------------------------------------------
 | ARTIST
 |--------------------------------------------------------------------------
 */

var Artist = MyModelNestedCollection.extend({
    nested: 'musicians',
    defaults: function() {
        return {
            musicians: new Musicians()
        }
    }
});


var Artists = MyCollection.extend({
    model: Artist
});

var ViewArtists = MyView.extend({
    template: templates.artistsList,
    events: {
        'click a.ico-delete': 'delete',
        'click a.ico-edit': 'edit',
        'click a.ico-detail': 'detail'
        
    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();


    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {artists: this.collection.toJSON()}));
        return this;

    },
    'delete': function(event) {
        console.log('delete');
    },
    edit: function(event) {
        console.log('edit');
    },
    detail: function(event) {
        $('#artistsList').hide();
        $('#showDetailArtist').show();
    },
});

var ViewShowArtist = MyView.extend({
    template: templates.showArtist,
    events: {
        'click #btn-backk': 'backListArtist'
    },
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {event: this.model.toJSON()}));
        return this;

    },
    backListArtist: function() {
        $('#showDetailArtist').hide();
        $('#artistsList').show();
       
    }
});


/*
 |--------------------------------------------------------------------------
 | EVENT
 |--------------------------------------------------------------------------
 */
var Event = MyModelNestedCollection.extend({
    nested: 'artists',
    defaults: function() {
        return {
            artists: new Artists()
        }
    },
    parse: function(response) {
        var data = response.data;
        var date = new Date(data.date);
        data.month = date.getMonth();
        data.hour = date.getHours();
        return data;
    }
});
var Events = MyCollection.extend({
    model: Event
});


var ViewEvents = MyView.extend({
    template: templates.eventsList,
    events: {
        'click a.ico-delete': 'delete',
        'click a.ico-edit': 'edit',
        'click a.ico-detail': 'detail',
    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {events: this.collection.toJSON()}));
        return this;

    },
    'delete': function(event) {
        console.log('delete');
    },
    edit: function(event) {
        console.log('edit');
    },
    detail: function(event) {
        $('#eventsList').hide();
        $('#showDetailEvent').show();
    }
});

var ViewShowEvent = MyView.extend({
    template: templates.showEvent,
    events: {
        'click #btn-back': 'backListEvents',
    },
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {event: this.model.toJSON()}));
        return this;

    },
    backListEvents: function() {
        $('#showDetailEvent').hide();
        $('#eventsList').show();
    }
});


/*
 |--------------------------------------------------------------------------
 | REPRESENTANT
 |--------------------------------------------------------------------------
 */

var Representant = MyModelNestedCollection.extend({
    nested: 'events',
    defaults: function() {
        return {
            events: new Event()
        }
    }
});


var Representants = MyCollection.extend({
    model: Representant
});
console.log('wdw');
var ViewRepresentant = MyView.extend({
    
    template: templates.representantsList,
    events: {
        'click a.ico-delete': 'delete',
        'click a.ico-edit': 'edit',
        'click a.ico-detail': 'detail'
        
    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();


    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {representants: this.collection.toJSON()}));
        return this;

    },
    'delete': function(representant) {
        console.log('delete');
    },
    edit: function(representant) {
        console.log('edit');
    },
    detail: function(representant) {
      console.log('detail');
    }
    
});
console.log('dsk');

var ViewShowRepresentant = MyView.extend({
    template: templates.showArtist,
    events: {
       
    },
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {event: this.model.toJSON()}));
        return this;

    }

});
console.log('dsds');


/*
 |--------------------------------------------------------------------------
 | VARIABLES
 |--------------------------------------------------------------------------
 */

var guitar = new Instrument({"name": "Guitar"});
var bass = new Instrument({"name": "Bass"});

var vocal = new Instrument({"name": "Vocal"});

//
var musician1 = new Musician({'name': 'Romain'});
musician1.get('instruments').add(bass);
var musician2 = new Musician({'name': 'Cl??lia'});
musician2.get('instruments').add(vocal);

var mmready = new Artist({'name': 'mmready()'});
mmready.get('musicians').add([musician1, musician2]);
var zed = new Artist({'name': 'ZED'});

//Event collection dans un model
var event1 = new Event({title: 'La grosse fiesta 2014', name_de: 'rock', start_date_hour: '25.06.2014',
    ending_date_hour: '26.06.2014', opening_doors: '16:00'});
event1.get('artists').add([mmready, zed]);

var event2 = new Event({title: 'La grosse fiesta 2015', name_de: 'salsa'});
event2.get('artists').add([mmready, zed]);



var listOfEvents1 = new Events([event1, event2]);
var eventListView = new ViewEvents({collection: listOfEvents1});
var showEvent = new ViewShowEvent({model: event1});


var showArtist = new ViewShowArtist({model : mmready});
var listOfArtists = new Artists([mmready, zed]);

var artistsListView = new ViewArtists({collection: listOfArtists});

var representant1 = new Representant({first_name: 'Jean', last_name:'Ducommun', 
            email: 'jean.duc@gmail.com', phone:'0789867877'});
var representant2 = new Representant({first_name: 'Pierre', last_name:'Legros', 
            email: 'bouboule@gmail.com', phone:'0789867877'});
var listOfRepresentants = new Representants([representant1, representant2]);
var representantsListView = new ViewRepresentant ({collection: listOfRepresentants});

var advancedResearchEvent = new ViewAdvancedResearchEvent({collection: listOfEvents1});
var advancedResearchArtist = new ViewAdvancedResearchArtist({collection: listOfArtists});
var researchRepresentant = new ViewResearchRepresentant({collection: listOfRepresentants});



//console.log('***************************************');
//console.log('***************************************');
//console.log('ListOfEvents1');
//console.log(listOfArtists.toJSON());
//console.log(JSON.stringify(listOfArtists));
//
//console.log('***************************************');
//console.log('***************************************');


/*
 |--------------------------------------------------------------------------
 | DOM
 |--------------------------------------------------------------------------
 */
$(function() {

    // "Fallback" pour le nouveau champ date des <form> HTML5
    if (!Modernizr.inputtypes.date) {
        $('input[type=date]').datepicker({dateFormat: 'yy-mm-dd'});
    }

    //recherches
    $('#advancedResearchEvents').append(advancedResearchEvent.el);
    $('#advancedResearchArtists').hide();
    $('#advancedResearchArtists').append(advancedResearchArtist.el);
    $('#researchRepresentants').hide();
    $('#researchRepresentants').append(researchRepresentant.el);

    //lists
    $('#eventsList').append(eventListView.el);
    $('#artistsList').hide();
    $('#artistsList').append(artistsListView.el);
    $('#representantsList').hide();
    $('#representantsList').append(representantsListView.el);

    //details
    $('#showDetailEvent').hide();
    $('#showDetailEvent').append(showEvent.el);
    $('#showDetailArtist').hide();
    $('#showDetailArtist').append(showArtist.el);
    
    /*
    |--------------------------------------------------------------------------
    | Gestion de l'historique (pour les boutons "back" et "forward" du browser
    |--------------------------------------------------------------------------
    */
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
});

/*
 |--------------------------------------------------------------------------
 | Gestion de l'historique (pour les boutons "back" et "forward" du browser
 |--------------------------------------------------------------------------
 */
function historyHandler() {
    // Prend la dernière partie de l'url (après le dernier '/')
    var sectionName = location.pathname.split("/").pop();
    // Si aucune section (page d'accueil ?), on va sur 'todo' par défaut
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
    // Enlève la classe "activ" de tous les liens
    $('ul#mainNav a').removeClass('activ');
    // Rajoute la classe "activ" pour le lien actuellement clické
    $("ul#mainNav a[href='" + sectionName + "']").addClass('activ');

    $('a').removeClass('activ');
    // Rajoute la classe "activ" pour le lien actuellement clické
    $("a[href='" + sectionName + "']").addClass('activ');


    // Cache toutes les <section>
    $('section').hide();
    // Affichage de la bonne <section>
    $(nodeIdToShow).show();
}