//*** extending Backbone classes
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

/////////////////////// INSTRUMENT //////////////
var Instrument = MyModel.extend();
var Instruments = MyCollection.extend({
    model: Instrument
});


//////////////////////// MSUICIAN ////////////////////

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



////////////////ARTIST ////////////////////////

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
        console.log('detail');
    }
});


////////////////////// EVENT //////////////////////////
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

var ViewEventsSearch = MyView.extend({
    template: templates.eventsListSearch,
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {events: this.collection.toJSON()}));
        return this;

    }
});

var ViewEvents = MyView.extend({
    template: templates.eventsList,
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
        console.log('detail');
    }
});



var guitar = new Instrument({"name":"Guitar"});
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
var event1 = new Event({title: 'La grosse fiesta 2014',name_de: 'rock'});
event1.get('artists').add([mmready, zed]);
var event2 = new Event({title: 'La grosse fiesta 2015',name_de: 'salsa'});
event2.get('artists').add([mmready, zed]);
var listOfEvents1 = new Events([event1, event2]);
var eventListView = new ViewEvents({collection: listOfEvents1});
var eventSearchView = new ViewEventsSearch({collection: listOfEvents1});

var listOfArtists = new Artists([mmready, zed]);
var artistsListView = new ViewArtists({collection: listOfArtists});

console.log('***************************************');
console.log('***************************************');
console.log('ListOfEvents1');
console.log(listOfArtists.toJSON());
console.log(JSON.stringify(listOfArtists));

console.log('***************************************');
console.log('***************************************');

$(function() {
    $('#eventsSearch').append(eventSearchView.el);
    $('#eventsList').append(eventListView.el);
    $('#artistsList').append(artistsListView.el);
});
    