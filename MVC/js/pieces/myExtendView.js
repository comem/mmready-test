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
        'click button#filterRepresenters': 'showListRepresentant',
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
    showListRepresentant: function() {
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
        'click button#representer': 'showListRepresentant',
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
    showListRepresentant: function() {

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
        'click button#filterRepresenters': 'showListRepresentant',
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
    showListRepresentant: function() {
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
//        var indexArtist = $(event.target).attr('data-index');
//        var artist = this.collection.at(indexArtsist);
//        this.showArtist.model = artist;
//        this.showArtist.render();
        $('#showDetailArtist').show();
        $('#musiciansList').show();
    },
    addArtist: function(event) {
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#addEvent').show();
    }
});

var ViewShowArtist = MyView.extend({
    template: templates.showArtist,
    events: {
        'click #btn-backk': 'backListArtist'
    },
    initialize: function(attrs, options) {
        // internal view for musician
        this.viewMusicians = new ViewMusicians({collection: new Musicians()});
        this.viewMusicians.render().$el.appendTo('#musiciansList');
        
        this.listenTo(this.model, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {artist: this.model.toJSON()}));
        return this;

    },
    backListArtist: function() {
        $('#showDetailArtist').hide();
        $('#musiciansList').hide();
        $('#artistsList').show();

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
    },
    addEvent: function(event) {
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#addEvent').show();
    }
});
var ViewShowEvent = MyView.extend({
    template: templates.showEvent,
    events: {
        'click #btn-back': 'backListEvents',
    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {event: this.collection.toJSON()}));
        return this;
    },
    backListEvents: function() {
        $('#showDetailEvent').hide();
        $('#advancedResearchEvents').show();
        $('#eventsList').show();
    }
});
var ViewAddEvent = MyView.extend({
    template: templates.addEvent,
    events: {
        'click #addTicketCategory': 'addTicketCategory',
        'click #addArtist': 'addArtist'
    },
    defaults: function() {
        $("#showAddArtist div").hide();
//        $("#newArtist div").click(function() {
//            $(this).next("div").toggle();
//        });
    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {event: this.collection.toJSON()}));
        return this;
    }
//    addTicketCategory: function(event) {
//        var newSelectTicket = $('.ticket').clone;
//        var div = $("<div class='ticket'>").html(newSelectTicket);
//        $(".ticket").append(div);
//    }
//    addArtist: function(event) {
//        var newAddArtist = $('.showAddArtist').clone();
//        var div = $("<div class='showAddArtist'>").html(newAddArtist);
//        $(".showAddArtist").append(div);
//    }
});

/*
 |--------------------------------------------------------------------------
 | REPRESENTANT
 |--------------------------------------------------------------------------
 */
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
