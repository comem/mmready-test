//FROM main.js
// //***************************************************************************//
//******************* Blog Chabloz adapté musicians                    ***********************//
//***************************************************************************//

//var Instrument = MyModel.extend({});
//    
//    var guitar = new Instrument();
//    
//    var Instruments = MyCollection.extend({
//        url: URLSERVEURinstruSuccess,
//        model: Instrument,
//        comparator: function (instrument) {
//            return -instrument.get('createdAt');
//        }
//    });
//    var Musician = MyModelNestedCollection.extend({
//        nested: 'instruments',
//        urlRoot: URLSERVEURMusicianSuccess,
//        defaults: function () {
//            return {
//                instruments: new Instruments()
//            };
//        },
//        parse: function (response) {
//            if (typeof response.data != "undefined") {
//                response = response.data;
//            }
//            response.instruments = new Instruments(response.instruments);
//            return response;
//        }
//    });
//    var Musicians = MyCollection.extend({
//        url: URLSERVEURMusicianSuccess,
//        model: Musician,
//        parse: function (response) {
//            // si jsend, ne prend que les data
//            if (typeof response.data != 'undefined') {
//                response = response.data;
//            }
//            return response;
//        }
//    });
//    
//    var blog = new Musicians();
//
//    blog.fetch({reset: true, success: function (collection, response, options) {
//            console.log("Fetch sur Musicians");
//            console.log(blog.models[0].get('instruments').at(0).get('name'));
//            blog.models[0].set('lastname', 'Cerantola');
//            console.log(blog.models[0].toJSON());
//            console.log(JSON.stringify(blog.models[0]));
//            blog.models[0].get('instruments').create({
//                text: 'This is something new',
//                musician_id: blog.models[0].id - 0
//            });
//            blog.models[0].save();
//    }});
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
////***************************************************************************//
////******************* Appel fetch                     ***********************//
////***************************************************************************//
//
//
//
//
//
////
////
////var Musicians = MyCollection.extend({
////    model: Musician
////});
////
////
////var Artist = MyModelNestedCollection.extend({
////    nested: 'musicians',
//////    defaults: function () {return {
//////        musicians: new Musicians()
//////    }},
////initialize: function(){
////        console.log("Nouvel Artist crÃ©Ã©. Name: "+this.get('name'));
////    },
////    parse: function (response) {
////            if (typeof response.data != "undefined") {
////                response = response.data;
////            }
////            response.musicians = new Musicians(response.musicians);
////            return response;
////        }
////});
////
////
////var Artists = MyCollection.extend({
////    url: "URLallArtists",
////    model: Artist
////});
////
////
////
////
////var Event = MyModelNestedCollection.extend({
////    nested: 'artists',
//////    defaults: function () {return {
//////        artists: new Artists()
//////    }},
////initialize: function(){
////        console.log("Nouvel Event crÃ©Ã©. Name: "+this.get('name'));
////    },
////    parse: function (response) {
////            if (typeof response.data != "undefined") {
////                response = response.data;
////            }
////            response.artists = new Artists()(response.artists);
////            return response;
////        }
////});
////var Events = MyCollection.extend({
////    url: URLSERVEUR_EVENTsuccess,
////    model: Event
////});
////
////
////
//////var Evenement = MyModelNestedCollection.extend({
//////    nested: 'artists',
//////    defaults: function () {return {
//////        artists: new Artists()
//////    }}
//////});
//////
//////var Evenements = MyCollection.extend({
//////    url: URLSERVEURsuccess,
//////    model: Evenement,
//////    //je fais le lien avec le model
//////        comparator: function(event) {
//////         return -event.get('name');
//////         conlole.log(Evenement.get('name'));
//////        },
//////        initialize: function() {
//////            var that = this;
//////            setInterval(function() {                
//////                that.fetch();
//////            }, 10000)
//////        
//////        }
//////});
////
////
//////***************************************************************************//
//////*******************            new                  ***********************//
//////***************************************************************************//
////
////
////
////
//////var guitar = new Instrument({"name":"Guitar"});
////var bass = new Instrument({"name":"Bass"});
////bass.set("name","BASS");
////bass.set("nb_corde","4");
////
////
//////**** test si la validation fonctionne *************
//////***************************************************
////
////
////console.log("************************");
////console.log("DÃ©but: test si la validation fonctionne");
////console.log("************************");
////
////var guitar = new Instrument({"name":"Guitar"});
////
////console.log("L'objet en JSON : "+JSON.stringify(guitar));
////
////var mess = guitar.unset("name", {validate:true});
////console.log("AprÃ¨s l'action unset sur 'name' le message de retour :" +mess);
////console.log("AperÃ§u de l'attribut : " +guitar.get("name"));
////
////
////console.log("************************");
////console.log("Fin: test si la validation fonctionne");
////console.log("********  oui elle fonctionne  *******");
////
//////***************************************************
//////***************************************************
////
////var musician1 = new Musician({'name': 'Romain'});
////musician1.get('instruments').add(bass);
////var musician2 = new Musician({'name': 'ClÃ©lia'});
////musician2.get('instruments').add(vocal);
////
////var mmready = new Artist({'name': 'mmready()'});
////mmready.get('musicians').add([musician1, musician2]);
////var zed = new Artist({'name': 'ZED'});
////
////
////var event1 = new Event({name: 'La grosse fiesta 2014'});
////event1.get('artists').add([mmready, zed]);
//////var event2 = new Event({title: 'Why so serious Party!'});
////
////
////var listOfEvents1 = new Events([event1]);
////
////console.log('***************************************');
////console.log('***************************************');
////console.log(listOfEvents1.toJSON());
////console.log(JSON.stringify(listOfEvents1));
////
////console.log('***************************************');
////console.log('***************************************');
////
////var francais = new LangFR();
////
////var francais2 = francais.fetch(
////        
////         {
////    success: function(model, response, options){
////        console.log('Fetch langue success');
////        return response;
////    },
////    error: function(model, response, options){
////        console.log('Fetch langue error');
////        console.log(model);
////        console.log(response);
////        console.log(options);
////    },
////    fail: function(model, response, options){
////        console.log('Fetch langue fail');
////    }
////}
////         
////         );
////console.log("Test LANGUAGE ////////////////////////////////// L'objet : " +JSON.stringify(francais2));
////
////
//////*********** test Fetch sur un model 
////bass.fetch({
////    success: function(model, response, options){
////        console.log('Fetch instrument success');
////    },
////    error: function(model, response, options){
////        console.log('Fetch error');
////        console.log(model);
////        console.log(response);
////        console.log(options);
////    },
////    fail: function(model, response, options){
////        console.log('Fetch instrument fail');
////    }
////});
////
////
//////var drum = new Instrument({"name":"Drum"});
////var vocal = new Instrument({"name":"Vocal"});
//////var synth = new Instrument({"name":"Synth"});
////
////
////
////
//
// 
// 
// 
// 
// 
// -------------------------------------------------------------------
// // FROM myNestedCollection
////var MyCollection = Backbone.Collection.extend();
//var MyModel = Backbone.Model.extend();
//
//
//
//var MyModelNestedCollection = Backbone.Model.extend({
//    nested: 'collection',
//    initialize: function(attrs, options) {
//        this.get(this.nested).on('change', function() {
//            this.trigger('change', this);
//        }, this);
//    },
//    toJSON: function() {
//        var colObj = {};
//        colObj[this.nested] = this.get(this.nested).toJSON();
//        return _.extend(
//                Backbone.Model.prototype.toJSON.apply(this, arguments),
//                colObj
//                );
//
//    }
//
//});
//
//
//var eventsNested = MyModelNestedCollection.extend();
//var artists = MyModelNestedCollection.extend();
//
//
//
//
//var eventModel = MyModel.extend();
//
//
//
// var allEvents = MyCollection.extend({
//        url: URLSERVEURsuccess,
//        model: eventModel, //je fais le lien avec le model
//        events: new eventsNested(),
//        initialize: function() {
//            
//            console.log("La collection events est cr��e");
//            var that = this;//astuce car "this" se perd trop profond dans anonymous function
//            setInterval(function() {                
//                that.fetch();
//            }, 10000);
//        }
//
//    });

//------------------------------------------------------------------