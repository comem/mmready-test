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
        $('#advancedResearchArtists').hide();
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
        console.log(this.collection.toJSON());
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
        'click #btn-addArtist': 'addArtist'

    },
    initialize: function(attrs, options) {
        // internal view for artist detail
        this.showArtist = new ViewShowArtist({model: new Artist({})});
        this.showArtist.render().$el.appendTo('#showDetailArtist');
        this.collection.fetch();
        this.listenTo(this.collection, 'all', this.render);
        this.render();


    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {artists: this.collection.toJSON()}));
        return this;

    },
    'delete': function(event) {
        var idArtist = $(event.target).attr('data-id');
        var remove = this.collection.get(idArtist);
        remove.destroy();

    },
    edit: function(event) {
        console.log('edit');
    },
    detail: function(event) {
        $('#artistsList').hide();
        var idArtist = $(event.target).attr('data-id');
        var artist = this.showArtist.model;
        artist.set('id', idArtist);
        var that = this;
        artist.fetch({
            success: function(object, response, c) {
                console.log(object);
                console.log(c);
            }, error: function(object, response, c) {
                console.log(object);
                console.log(response);
            }
        });
        $('#showDetailArtist').show();
        $('#musiciansList').show();
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
        this.$el.html(Mustache.render(this.template, this.model.toJSON()));
        this.viewMusicians.collection = new Musicians(this.model.get('musicians'));
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
        'click #saveOneArtist': 'getValue',
        'click #saveMusician': 'saveMusician',
        'click #saveImage': 'saveImage',
        'click #saveLink': 'saveLink'
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
        var order = this.$el.find('[name="artistOrder"]').val();
        var mainPerformer = this.$el.find('[name="mainPerformer"]').val();
        var shortDescription = this.$el.find('[name="shortDescription"]').val();
        var completeDescription = this.$el.find('[name="completeDescription"]').val();

        console.log("name");
        console.log(name);

        console.log("genre");
        console.log(genre);

        console.log("short");
        console.log(shortDescription);

        console.log(completeDescription);

        if (name === " ") {
            console.log("caractère vide");
        } else {
            saveArtist(name, genre, shortDescription, completeDescription, order, mainPerformer, hourArrival);
        }
    },
    saveMusician: function(event) {
        var musicianFirstName = this.$el.find('[name="musicianFirstName"]').val();
        var musicianLastName = this.$el.find('[name="musicianLastName"]').val();
        var musicianScenetName = this.$el.find('[name="musicianScenetName"]').val();
        var instrument = this.$el.find('[name="instrument"]').val();
    },
    saveImage: function(event) {
        var imageTitle = this.$el.find('[name="imageTitle"]').val();
        var imageDescription = this.$el.find('[name="imageDescription"]').val();
        var artistImage = this.$el.find('[name="artistImage"]').val();
    },
    saveLink: function(event) {
        var linkURL = this.$el.find('[name="linkURL"]').val();
        var linkDescription = this.$el.find('[name="linkDescription"]').val();
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
        this.listenTo(this.collection, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {tickets: this.collection.toJSON()}));
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
        'click #btn-addEvent': 'addEvent',
        'click #page2': 'page2'
    },
    initialize: function(attrs, options) {
        // internal view for event detail
        this.showEvent = new ViewShowEvent({model: new Event({})});
        this.showEvent.render().$el.appendTo('#showDetailEvent');
        this.collection.fetch();
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {events: this.collection.toJSON()}));
        return this;
    },
    'delete': function(event) {
        var idEvent = $(event.target).attr('data-id');
        var remove = this.collection.get(idEvent);
        remove.destroy();
    },
    edit: function(event) {
        console.log('edit');
    },
    detail: function(event) {
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        var idEvent = $(event.target).attr('data-id');
        var event = this.showEvent.model;
        event.set('id', idEvent);
        console.log(this.collection);
        console.log(event);
        event.fetch({
            success: function(object, response, c) {
//                console.log(object);
//                console.log(c);
            }, error: function(object, response, c) {
//                console.log(object);
//                console.log(response);
            }
        });
        $('#showDetailEvent').show();
        $('#showTicket').show();
        $('#showRepresenter').show();
    },
    addEvent: function(event) {

        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#addEvent').show();
        $('#addArtistIntoEvent').show();
    },
    page2: function(event) {
        var nbPage = $(event.target).attr('data-page');
        this.collection.set('url', EVENTS + "?page=" + nbPage);
        
        console.log(this.collection);
    }

});
var ViewShowEvent = MyView.extend({
    template: templates.showEvent,
    events: {
        'click #btn-back': 'backListEvents'
    },
    initialize: function(attrs, options) {
        this.viewTicket = new ViewTicket({collection: new Tickets({})});
        this.viewRepresenter = new ViewShowRepresenter({model: new Representer({})});
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, this.model.toJSON()));
        this.viewTicket.collection = new Tickets(this.model.get('tickets'));
        this.viewRepresenter.model = new Tickets(this.model.get('representer'));
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

