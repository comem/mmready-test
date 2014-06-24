////////////////////////////////////////////////////////////////////////
console.log('why so serious');
console.log('**********************');
console.log('start coding..');
console.log('**********************');
///////////////////////////////////////////////////////////////////////


/////////// TEST DE CONNECTION AU SERVEUR//////////////////////////////////////////
$.ajax({
    url: URLSERVEURsuccess
}).done(function() {
    ONLINE = true;
}).fail(function() {
    ONLINE = false;
}).always(function(data, txtStatus) {
    if (ONLINE) {
        console.log("statut: online");
    } else {
        console.log("statut: offline");
    }

//                    console.log("Données Reçues : " + data);


});

//***************************************************************************//
//******************* Extension des classes Backbone  ***********************//
//***************************************************************************//
var MyModel = Backbone.Model.extend();

var MyCollection = Backbone.Collection.extend();
var MyView = Backbone.View.extend();
var MyModelNestedCollection = MyModel.extend({
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
//***************************************************************************//
//******************* Extension des classes Backbone  ***********************//
//***************************************************************************//



//***************************************************************************//
//******************* Création des Models, Collection et View ***********************//
//***************************************************************************//

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
    }
});
var Events = MyCollection.extend({
    model: Event
});

/////////////////// View Template Extended////////////////////////////////////////// 

var EventListView = MyView.extend({
    events: {
        "click #btn-artist": "artist"
    },
    template: _.template(templates.eventList),
    initialize: function() {
        this.listenTo(this.model, 'change add remove', this.render);
        this.render();
    },
    artist: function(event) {
        console.log('artist');
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

//var Evenement = MyModelNestedCollection.extend({
//    nested: 'artists',
//    defaults: function () {return {
//        artists: new Artists()
//    }}
//});
//
//var Evenements = MyCollection.extend({
//    url: URLSERVEURsuccess,
//    model: Evenement,
//    //je fais le lien avec le model
//        comparator: function(event) {
//         return -event.get('name');
//         conlole.log(Evenement.get('name'));
//        },
//        initialize: function() {
//            var that = this;
//            setInterval(function() {                
//                that.fetch();
//            }, 10000)
//        
//        }
//});

//***************************************************************************//
//******************* Création des Objets ***********************//
//***************************************************************************//

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
//var event2 = new Event({title: 'Why so serious Party!'});


var listOfEvents1 = new Events([event1]);

console.log('***************************************');
console.log('***************************************');
console.log('ListOfEvents1');
console.log(listOfEvents1.toJSON());
console.log(JSON.stringify(listOfEvents1));

console.log('***************************************');
console.log('***************************************');



//***************************************************************************//
//******************* Création des Objets ***********************//
//***************************************************************************//
var eventListView = new EventListView({model: event1});


$(function() {
   $('body').append(eventListView.el);
});
