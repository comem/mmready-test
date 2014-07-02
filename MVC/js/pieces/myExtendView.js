var MyView = Backbone.View.extend();

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
        'click button#filterRepresenters': 'showListRepresenter',
        'click a#close': 'close'
                //'click button#filterRepresenters': 'detail',
    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {artist: this.collection.toJSON()}));
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
    showListRepresenter: function() {

        $('#artistsList').hide();
        $('#advancedResearchArtists').hide();
        $('#representersList').show();
        $('#researchRepresenters').show();
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
        'click button#representer': 'showListRepresenter',
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
    showListRepresenter: function() {

        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#researchRepresenters').show();
        $('#representersList').show();
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
var ViewResearchRepresenter = MyView.extend({
    template: templates.researchRepresenter,
    events: {
        'click button#events': 'showListEvent',
        'click button#artists': 'showListArtist',
        'click button#filterRepresenters': 'showListRepresenter',
        'click a#close': 'close'
                //'click button#filterRepresenters': 'detail',
    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {representer: this.collection.toJSON()}));
        return this;
    },
    showListEvent: function() {
        $('#artistsList').hide();
        $('#advancedResearchArtists').hide();
        $('#researchRepresenters').hide();
        $('#representersList').hide();
        $('#eventsList').show();
        $('#advancedResearchEvents').show();
    },
    showListArtist: function() {
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#researchRepresenters').hide();
        $('#representersList').hide();
        $('#artistsList').show();
        $('#advancedResearchArtists').show();
    },
    showListRepresenter: function() {

        $('#artistsList').hide();
        $('#eventsList').hide();
        $('#advancedResearchArtists').hide();
        $('#advancedResearchEvents').hide();
        $('#researchRepresenters').show();
        $('#representersList').show();
    },
    close: function() {
        $('#advancedResearchArtists').hide();
    }
});

/*
 |--------------------------------------------------------------------------
 | MUSICIAN
 |--------------------------------------------------------------------------
 */

var ViewMusicians = MyView.extend({
    template: templates.showMusician,
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {musicians: this.collection.toJSON()}));
        return this;
    }
});

/*
 |--------------------------------------------------------------------------
 | ARTIST
 |--------------------------------------------------------------------------
 */

var ViewArtists = MyView.extend({
    template: templates.artistsList,
    events: {
        'click a.ico-delete': 'delete',
        'click a.ico-edit': 'edit',
        'click a.ico-detail': 'detail',
        'click #addArtist': 'addArtist'

    },
    initialize: function(attrs, options) {
        // internal view for artist detail
        this.showArtist = new ViewShowArtist({model: new Artist({})});
        this.showArtist.render().$el.appendTo('#showDetailArtist');

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
        var idArtist = $(event.target).attr('data-id');
       

        var artist = this.collection.get({'id': idArtist}); //.at(idArtist)
        this.showArtist.model.set('urlRoot', ARTISTS + "/" + idArtist);
        //console.log(idArtist);
//        console.log('artist');
//        console.log(artist);
//        console.log(JSON.stringify(artist));
        this.showArtist.model = artist;
        this.showArtist.render();
        $('#showDetailArtist').show();
        $('#musiciansList').show();
        //this.showArtist.model.fetch();
        getOneArtist(idArtist);
    },
    addArtist: function(event) {
        $('#artistsList').hide();
        $('#advancedResearchArtist').hide();
        $('#addOneArtist').show();

    }
});

var ViewShowArtist = MyView.extend({
    template: templates.showArtist,
    events: {
        'click #btn-back': 'backListArtist',
        'click #btn-edit': 'editArtist',
        'click #btn-delete': 'deleteArtist',
    },
    initialize: function(attrs, options) {
        // internal view for musician
        this.viewMusicians = new ViewMusicians({collection: new Musicians({})});
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {artist: this.model.toJSON()}));
        this.viewMusicians.render().$el.appendTo(this.$el.find('#musiciansList'));
        return this;

    },
    backListArtist: function(event) {
        $('#showDetailArtist').hide();
        $('#musiciansList').hide();
        $('#artistsList').show();

    },
    editArtist: function(event) {
        console.log('edit Artist');
    },
    deleteArtist: function(event) {
        console.log('delete Artist');
    }
});

var ViewAddArtist = MyView.extend({
    template: templates.addArtist,
    events: {
        'click #addMusician': 'addMusician',
        'click #saveOneArtist': 'getValue'
    },
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {addArtist: this.model.toJSON()}));
        return this;
    },
    addMusician: function(event) {
        console.log('addMusician');
    },
    getValue: function(event) {

        console.log("create Artist");
        var name = this.$el.find('[name="artistNameInput"]').val();
        var genre = this.$el.find('[name="artistGenreInput"]').val();
        var hourArrival = this.$el.find('[name="hourArrival"]').val();
        var shortDescription = this.$el.find('[name="shortDescription"]').val();

        console.log("name");
        console.log(name);

        console.log("genre");
        console.log(genre);

        console.log("hourArrival");
        console.log(hourArrival);

        if (name === " ") {
            console.log("caractère vide");
        } else {
            saveArtist(name, genre, shortDescription);
        }
    }
});

/*
 |--------------------------------------------------------------------------
 | TICKET
 |--------------------------------------------------------------------------
 */

var ViewTicket = MyView.extend({
    template: templates.showTicket,
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {ticket: this.model.toJSON()}));
        return this;
    }
});

/*
 |--------------------------------------------------------------------------
 | EVENT
 |--------------------------------------------------------------------------
 */

var ViewEvents = MyView.extend({
    template: templates.eventsList,
    events: {
        'click a.ico-delete': 'delete',
        'click a.ico-edit': 'edit',
        'click a.ico-detail': 'detail',
        'click a.addEvent': 'addEvent'
    },
    initialize: function(attrs, options) {
        // internal view for event detail
        this.showEvent = new ViewShowEvent({model: new Event({})});
        this.showEvent.render().$el.appendTo('#showDetailEvent');

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
        $('#advancedResearchEvents').hide();
        $('#showDetailEvent').show();
        $('#showTicket').show();
        $('#showRepresenter').show();
    },
    addEvent: function(event) {

        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#addEvent').show();
        $('#addArtistIntoEvent').show();
    }
});
var ViewShowEvent = MyView.extend({
    template: templates.showEvent,
    events: {
        'click #btn-back': 'backListEvents'
    },
    initialize: function(attrs, options) {
        this.viewTicket = new ViewTicket({model: new Ticket({})});
        this.viewRepresenter = new ViewShowRepresenter({model: new Representer({})});
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {event: this.model.toJSON()}));
        this.viewTicket.render().$el.appendTo(this.$el.find('#showTicket'));
        this.viewRepresenter.render().$el.appendTo(this.$el.find('#showRepresenter'));
        return this;
    },
    backListEvents: function() {
        $('#showDetailEvent').hide();
        $('#showTicket').hide();
        $('#advancedResearchEvents').show();
        $('#eventsList').show();
    }
});
var ViewAddEvent = MyView.extend({
    template: templates.addEvent,
    initialize: function(attrs, options) {
        // internal view for event detail
        this.addArtistIntoEvent = new ViewAddArtist({model: new Artist({})});

        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {addEvent: this.model.toJSON()}));

        this.addArtistIntoEvent.render().$el.appendTo(this.$el.find('#addArtistIntoEvent'));
        return this;
    }

});

/*
 |--------------------------------------------------------------------------
 | REPRESENTANT
 |--------------------------------------------------------------------------
 */
var ViewRepresenters = MyView.extend({
    template: templates.representersList,
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
        this.$el.html(Mustache.render(this.template, {representers: this.collection.toJSON()}));
        return this;
    },
    'delete': function(event) {
        console.log('delete');
    },
    edit: function(event) {
        console.log('edit');
    },
    detail: function(event) {
        console.log('detail');
    }
});

var ViewShowRepresenter = MyView.extend({
    template: templates.showRepresenter,
    events: {
    },
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {representer: this.model.toJSON()}));
        return this;
    }
});
