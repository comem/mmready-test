
var MyView = Backbone.View.extend();

var LoginView = MyView.extend({
    template: templates.login,
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {login: this.model.toJSON()}));
        console.log("render of LoginView is rendering");
        
        return this;

    },
    events: {
//          'submit #Activation': 'activation'
//        'click a.ico-edit': 'edit',
//        'click a.ico-detail': 'detail',
        
    }
});

var GenresListView = MyView.extend({
    //el: $("div"),
    template: templates.GenresList,
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {createArtist: this.collection.toJSON()}));
        console.log("render of GenreList is rendering");
        
        return this;

    },
    events: {
//          'submit #Activation': 'activation'
//        'click a.ico-edit': 'edit',
//        'click a.ico-detail': 'detail',
        
    },
    app: function(){
        console.log("APP is appening");
        
    

        }
        
});

/*
 |--------------------------------------------------------------------------
 | ARTIST
 |--------------------------------------------------------------------------
 */

var CreateArtistView = MyView.extend({
    template: templates.createArtist,
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {createArtist: this.model.toJSON()}));
        console.log("render of CreateArtist is rendering");
        
        return this;

    },
    events: {
//          'submit #Activation': 'activation'
//        'click a.ico-edit': 'edit',
//        'click a.ico-detail': 'detail',
        
    }
});

var ViewAllArtists = MyView.extend({
    template: templates.artistsList,
    events: {
        'click a.ico-delete': 'delete',
        'click a.ico-edit': 'edit',
        'click a.ico-detail': 'detail',
        'click #btn-addArtist': 'addArtist'

    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();


    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {allArtists: this.collection.toJSON()}));
        this.$el.appendTo("#allArtists");
        return this;

    },
    'delete': function(event) {
        console.log('delete');
    },
    edit: function(event) {
        console.log('edit');
    },
    detail: function(event) {
        $('#allArtists').hide();
        $('#showDetailArtist').show();
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
        this.listenTo(this.collection, 'all', this.render);
        this.render();

    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {oneArtist: this.collection.toJSON()}));
        this.$el.appendTo("#oneArtist");
        return this;

    },
    backListArtist: function() {
        //$('#showDetailArtist').hide();
        //$('#allArtists').show();

    }
});