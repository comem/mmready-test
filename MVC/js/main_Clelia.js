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


var Instrument = MyModel.extend();
var Instruments = MyCollection.extend({
    model: Instrument
});


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
    //TEMPLATE FUNZIONANTE!!!
//    template: _.template(templates.eventsList),
    template: templates.eventsList2,
    events: {
        'click a.ico-delete': 'delete',
        'click a.ico-edit': 'edit'
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
    }
});

//var guitar = new Instrument({"name":"Guitar"});
var bass = new Instrument({"name": "Bass"});
//var drum = new Instrument({"name":"Drum"});
var vocal = new Instrument({"name": "Vocal"});
//var synth = new Instrument({"name":"Synth"});
//
var musician1 = new Musician({'name': 'Romain'});
musician1.get('instruments').add(bass);
var musician2 = new Musician({'name': 'Clélia'});
musician2.get('instruments').add(vocal);

var mmready = new Artist({'name': 'mmready()'});
mmready.get('musicians').add([musician1, musician2]);
var zed = new Artist({'name': 'ZED'});

//Event collection dans un model
var event1 = new Event({title: 'La grosse fiesta 2014'});
event1.get('artists').add([mmready, zed]);

var listOfEvents1 = new Events([event1]);
var eventListView = new ViewEvents({collection: listOfEvents1});
//var html = Mustache.to_html(eventsListView, {collection: listOfEvents1});

console.log('***************************************');
console.log('***************************************');
console.log('ListOfEvents1');
console.log(listOfEvents1.toJSON());
console.log(JSON.stringify(listOfEvents1));

console.log('***************************************');
console.log('***************************************');

$(function() {
    $('#eventsList').append(eventListView.el);
    
});
    