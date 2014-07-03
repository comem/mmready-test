var MyView = Backbone.View.extend();

//--------------------------------------------------------
//                View Login
//--------------------------------------------------------

var LoginView = MyView.extend({///!\ doublon avec viewROmain

    template: templates.login,
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {loginFab: this.model.toJSON()}));
        
        return this;

    },
    events: {
        'click #btnConnect': 'login'
    },
    login: function() {
        var email = $("input[type=email]").val();
        
        var password = $("input[type=password]").val();
        

        if ($('#remember').is(":checked"))
        {
            
            var remember = "true"; //peut-être qu'en string ca ne marche pas à test

        } else {
            
            var remember = "false";
        }

        this.model.set({email: email, password: password, remember: remember});
        this.model.save({
             error: function(data, response, x) {
                alert("server communication failed");
            }
        });
    }
});

/*
 |--------------------------------------------------------------------------
 | NAV
 |--------------------------------------------------------------------------
 */
var ViewNav = MyView.extend({
    template: templates.nav,
    events: {
        'click #navEvent': 'navEvent',
        'click #navArtist': 'navArtist',
        'click #navRepresenter': 'navRepresenter'
    },
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        
        this.render();
    },
    render: function() {

        this.$el.html(Mustache.render(this.template, {nav: this.model.toJSON()}));
        return this;
    },
    navEvent: function(event) {
        $('#nav').show();
        $('#eventsList').show();
    },
    navArtist: function(event) {
        $('#nav').show();
        $('#artistsList').show();
    },
    navRepresenter: function(event) {
        $('#nav').show();
        $('#representersList').show();
    }
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
        $('#nav').show();
        $('#artistsList').hide();
        $('#eventsList').show();
        $('#advancedResearchArtists').hide();
        $('#advancedResearchEvents').show();
    },
    showListArtist: function() {
        $('#nav').show();
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#artistsList').show();
        $('#advancedResearchArtists').show();
    },
    showListRepresenter: function() {
        $('#nav').show();
        $('#artistsList').hide();
        $('#advancedResearchArtists').hide();
        $('#representersList').show();
        $('#researchRepresenters').show();
    },
    close: function() {
        $('#nav').show();
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
        $('#nav').show();
        $('#artistsList').hide();
        $('#eventsList').show();
        $('#advancedResearchEvents').show();
        $('#advancedResearchArtists').hide();
    },
    showListArtist: function() {
        $('#nav').show();
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#artistsList').show();
        $('#advancedResearchArtists').show();
    },
    showListRepresenter: function() {
        $('#nav').show();
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#researchRepresenters').show();
        $('#representersList').show();
    },
    close: function() {
        $('#nav').show();
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
        $('#nav').show();
        $('#artistsList').hide();
        $('#advancedResearchArtists').hide();
        $('#researchRepresenters').hide();
        $('#representersList').hide();
        $('#eventsList').show();
        $('#advancedResearchEvents').show();
    },
    showListArtist: function() {
        $('#nav').show();
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#researchRepresenters').hide();
        $('#representersList').hide();
        $('#artistsList').show();
        $('#advancedResearchArtists').show();
    },
    showListRepresenter: function() {
        $('#nav').show();
        $('#artistsList').hide();
        $('#advancedResearchArtists').hide();
        $('#researchRepresenters').show();
        $('#representersList').show();
    },
    close: function() {
        $('#nav').show();
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
       
    },
    detail: function(event) {
        $('#nav').show();
        $('#artistsList').hide();
        var idArtist = $(event.target).attr('data-id');
        var artist = this.showArtist.model;
        artist.set('id', idArtist);
        var that = this;
        artist.fetch({
            success: function(object, response, c) {
             
            }, error: function(object, response, c) {
               
            }
        });
        $('#showDetailArtist').show();
        $('#musiciansList').show();
    },
    addArtist: function(event) {
        $('#nav').show();
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
        $('#nav').show();
        $('#showDetailArtist').hide();
        $('#musiciansList').hide();
        $('#artistsList').show();
    },
    editArtist: function(event) {
        $('#nav').show();
        
    },
    deleteArtist: function(event) {
        $('#nav').show();
        var idArtist = $(event.target).attr('data-id');
        this.model.destroy(idArtist);
    }
});
var ViewAddArtist = MyView.extend({
    template: templates.addArtist,
    events: {
//        'click #addMusician': 'addMusician',
//        'click #saveOneArtist': 'getValue',
//        'click #saveMusician': 'saveMusician',
//        'click #saveImage': 'saveImage',
//        'click #saveLink': 'saveLink'
    },
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {addArtist: this.model.toJSON()}));
        return this;
    }
});
/*
 |--------------------------------------------------------------------------
 | TICKET
 |--------------------------------------------------------------------------
 */

var ViewTicket = MyView.extend({
    template: templates.showTicketIntoEvent,
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
        'click #btn-addEvent': 'addEvent'
    },
    initialize: function(attrs, options) {
// internal view for event detail
        this.showEvent = new ViewShowEvent({model: new Event()});
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
        $('#nav').show();
       
    },
    detail: function(event) {
        $('#nav').show();
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        var idEvent = $(event.target).attr('data-id');
        var event = this.showEvent.model;
        event.set('id', idEvent);
       
        event.fetch({
            success: function() {
                event.formatDate();
            }
        });
        $('#showDetailEvent').show();
        $('#showTicket').show();
        $('#showRepresenter').show();
    },
    addEvent: function(event) {
        $('#nav').show();
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#addEvent').show();
        $('#addArtistIntoEvent').show();
        
        createEvent();
        
    }

});
var ViewShowEvent = MyView.extend({
    template: templates.showEvent,
    events: {
        'click #btn-back': 'backListEvents',
        'click #deleteEvent': 'delete'
    },
    initialize: function(attrs, options) {
        this.viewTicket = new ViewTicket({collection: new Tickets({})});
        this.viewRepresenter = new ViewShowRepresenterIntoEvent({model: new Representer({})});
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
        $('#nav').show();
        $('#showDetailEvent').hide();
        $('#showTicket').hide();
        $('#advancedResearchEvents').show();
        $('#eventsList').show();
    },
    'delete': function(event) {
        var idEvent = $(event.target).attr('data-id');
        this.model.destroy(idEvent);
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
        this.showRepresenter = new ViewShowRepresenter({model: new Representer()});
        this.showRepresenter.render().$el.appendTo('#showDetailRepresenter');
        this.collection.fetch();
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {representers: this.collection.toJSON()}));
        return this;
    },
    'delete': function(event) {
        var idRepresenter = $(event.target).attr('data-id');
        var remove = this.collection.get(idRepresenter);
        remove.destroy();
    },
    edit: function(event) {
        $('#nav').show();
      
    },
    detail: function(event) {
        $('#nav').show();
        $('#representersList').hide();
        var idRepresenter = $(event.target).attr('data-id');
        var representer = this.showRepresenter.model;
        representer.set('id', idRepresenter);
        
        representer.fetch({
            success: function() {

            }
        });
        $('#showDetailRepresenter').show();
    }
});
var ViewShowRepresenterIntoEvent = MyView.extend({
    template: templates.showRepresenterIntoEvent,
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
var ViewShowRepresenter = MyView.extend({
    template: templates.showRepresenter,
    events: {
        'click #btn-back': 'backListEvents',
        'click .ico-delete': 'delete'
    },
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {representer: this.model.toJSON()}));
        return this;
    },
    backListEvents: function() {
        $('#nav').show();
        $('#showDetailRepresenter').hide();
        $('#representersList').show();
    },
    'delete': function(event) {
        var idRepresenter = $(event.target).attr('data-id');
        this.model.destroy(idRepresenter);
    }

});
