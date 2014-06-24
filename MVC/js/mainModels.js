//$.post('http://pingouin.heig-vd.ch/rockit/v1/login',{
//    email:"matou@matou.ch", password:"matou"
//}, function () {
//    //controle
//});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/////////// TEST DE CONNECTION AU SERVEUR//////////////////////////////////////////
 $.ajax({
        url: URLSERVEUR_EVENTsuccess
    }).done(function() {
        ONLINE = true;
    }).fail(function() {
        ONLINE = false;
    }).always(function(data, txtStatus) {
        if(ONLINE){
            console.log("statut: online");
                    }else{
                       console.log("statut: offline");
                    }
                    
         
                       
        
    });
    
    


//***************************************************************************//
//******************* Extension des classes Backbone  ***********************//
//***************************************************************************//
var MyModel = Backbone.Model.extend();
var MyCollection = Backbone.Collection.extend();
var MyView = Backbone.View.extend(); ///!\ peut-être conflit avec Naty
var MyModelNestedCollection = MyModel.extend({
    nested: 'collection',
    initialize: function (attrs, options) { // universalisation des noms de la variable contenant la collection     
        if (typeof attrs[this.nested] != "undefined") { //SI le type de l'attribut
                                                        // de ce nom n'est pas indéfini '
            this.set(this.nested, new window[this.nested.capitalize()](attrs[this.nested])); // ALORS crée une instance portant
                                                                                             // le nom en lui ajoutant
                                                                                             // une majuscule sur le premier
                                                                                             // caractère
                                                                                            
           
        }else{
             attrs[this.nested] = [];
        }
//        this.get(this.nested).on('all', function(eventName) {
//            this.trigger(eventName, this);
//        }, this);
    },
    toJSON: function() { //surcharge de la fonction JSON pour stringifyer une collection contenue dans un attribut d'un model
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
//******************* Création des Models, Collection ***********************//
//***************************************************************************//

var LangFR = MyModel.extend({
    urlRoot: URLlangFR
});





var Instrument = MyModel.extend({
    //urlRoot: URLSERVEURinstruSuccess,    
    initialize: function(){
        console.log("Nouvel Instrument créé. Name: "+this.get('name'));
        this.on('change', function(event){
            console.log('Un évènement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
            return this;
        });
        this.on('invalid', function(model, error){//si la méthode validate perçoit un truc pas valide elle génère un évènement "invalid"
            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnée" par la fonction validate
        });
              
    },
    printDetails: function(){
        console.log("Instrument Name: "+this.get('name'));
    },
    validate: function(attrs){ //ou validateName, validateType, ... :  pour valider qu'un attr
        if(!attrs.name){
            return "Ein Name einsetzen";
        }
    }
});
var Instruments = MyCollection.extend({
    url: function (){
        console.log("Fonction URL de Instruments appelée");
        return URLSERVEURinstruSuccess;
    },
    model: Instrument
});



var Musician = MyModelNestedCollection.extend({
    nested: 'instruments',
//    defaults: function () {return {
//        instruments: new Instruments()
//    }},
    initialize: function(attrs, options){
               
        MyModelNestedCollection.prototype.initialize.apply(this, arguments),
        console.log("Nouveau Musician créé. Name: "+this.get('name'));
    },
    parse: function (response) {
//            if (typeof response.data != "undefined") {
//                response = response.data;
//            }
//            return response;

console.log(response.get('name'));
        }
});

var musician1 = new Musician({
    'name': 'RRROOOMMM',
    'instruments': [{'name':'Guitar'},
                    {'name':'Bass'},
                    {'name':'Drums'}]
     
     });

console.log(JSON.stringify(musician1));



//***************************************************************************//
//******************* Création des Models, Collection ***********************//
//***************************************************************************//












//***************************************************************************//
//******************* Appel fetch                     ***********************//
//***************************************************************************//

//blog.fetch({reset: true, success: function (collection, response, options) {
//            console.log(blog.models[0].get('comments').at(0).get('text'));
//            blog.models[0].set('title', 'My first blog post !!');
//            console.log(blog.models[0].toJSON());
//            blog.models[0].get('comments').create({
//                text: 'This is something new',
//                post_id: blog.models[0].id - 0
//            });
//***************************************************************************//
//******************* Appel fetch                     ***********************//
//***************************************************************************//





//
//
//var Musicians = MyCollection.extend({
//    model: Musician
//});
//
//
//var Artist = MyModelNestedCollection.extend({
//    nested: 'musicians',
////    defaults: function () {return {
////        musicians: new Musicians()
////    }},
//initialize: function(){
//        console.log("Nouvel Artist créé. Name: "+this.get('name'));
//    },
//    parse: function (response) {
//            if (typeof response.data != "undefined") {
//                response = response.data;
//            }
//            response.musicians = new Musicians(response.musicians);
//            return response;
//        }
//});
//
//
//var Artists = MyCollection.extend({
//    url: "URLallArtists",
//    model: Artist
//});
//
//
//
//
//var Event = MyModelNestedCollection.extend({
//    nested: 'artists',
////    defaults: function () {return {
////        artists: new Artists()
////    }},
//initialize: function(){
//        console.log("Nouvel Event créé. Name: "+this.get('name'));
//    },
//    parse: function (response) {
//            if (typeof response.data != "undefined") {
//                response = response.data;
//            }
//            response.artists = new Artists()(response.artists);
//            return response;
//        }
//});
//var Events = MyCollection.extend({
//    url: URLSERVEUR_EVENTsuccess,
//    model: Event
//});
//
//
//
////var Evenement = MyModelNestedCollection.extend({
////    nested: 'artists',
////    defaults: function () {return {
////        artists: new Artists()
////    }}
////});
////
////var Evenements = MyCollection.extend({
////    url: URLSERVEURsuccess,
////    model: Evenement,
////    //je fais le lien avec le model
////        comparator: function(event) {
////         return -event.get('name');
////         conlole.log(Evenement.get('name'));
////        },
////        initialize: function() {
////            var that = this;
////            setInterval(function() {                
////                that.fetch();
////            }, 10000)
////        
////        }
////});
//
//
////***************************************************************************//
////*******************            new                  ***********************//
////***************************************************************************//
//
//
//
//
////var guitar = new Instrument({"name":"Guitar"});
//var bass = new Instrument({"name":"Bass"});
//bass.set("name","BASS");
//bass.set("nb_corde","4");
//
//
////**** test si la validation fonctionne *************
////***************************************************
//
//
//console.log("************************");
//console.log("Début: test si la validation fonctionne");
//console.log("************************");
//
//var guitar = new Instrument({"name":"Guitar"});
//
//console.log("L'objet en JSON : "+JSON.stringify(guitar));
//
//var mess = guitar.unset("name", {validate:true});
//console.log("Après l'action unset sur 'name' le message de retour :" +mess);
//console.log("Aperçu de l'attribut : " +guitar.get("name"));
//
//
//console.log("************************");
//console.log("Fin: test si la validation fonctionne");
//console.log("********  oui elle fonctionne  *******");
//
////***************************************************
////***************************************************
//
//var musician1 = new Musician({'name': 'Romain'});
//musician1.get('instruments').add(bass);
//var musician2 = new Musician({'name': 'Clélia'});
//musician2.get('instruments').add(vocal);
//
//var mmready = new Artist({'name': 'mmready()'});
//mmready.get('musicians').add([musician1, musician2]);
//var zed = new Artist({'name': 'ZED'});
//
//
//var event1 = new Event({name: 'La grosse fiesta 2014'});
//event1.get('artists').add([mmready, zed]);
////var event2 = new Event({title: 'Why so serious Party!'});
//
//
//var listOfEvents1 = new Events([event1]);
//
//console.log('***************************************');
//console.log('***************************************');
//console.log(listOfEvents1.toJSON());
//console.log(JSON.stringify(listOfEvents1));
//
//console.log('***************************************');
//console.log('***************************************');
//
//var francais = new LangFR();
//
//var francais2 = francais.fetch(
//        
//         {
//    success: function(model, response, options){
//        console.log('Fetch langue success');
//        return response;
//    },
//    error: function(model, response, options){
//        console.log('Fetch langue error');
//        console.log(model);
//        console.log(response);
//        console.log(options);
//    },
//    fail: function(model, response, options){
//        console.log('Fetch langue fail');
//    }
//}
//         
//         );
//console.log("Test LANGUAGE ////////////////////////////////// L'objet : " +JSON.stringify(francais2));
//
//
////*********** test Fetch sur un model 
//bass.fetch({
//    success: function(model, response, options){
//        console.log('Fetch instrument success');
//    },
//    error: function(model, response, options){
//        console.log('Fetch error');
//        console.log(model);
//        console.log(response);
//        console.log(options);
//    },
//    fail: function(model, response, options){
//        console.log('Fetch instrument fail');
//    }
//});
//
//
////var drum = new Instrument({"name":"Drum"});
//var vocal = new Instrument({"name":"Vocal"});
////var synth = new Instrument({"name":"Synth"});
//
//
//
//
////***************************************************************************//
////*******************             main                ***********************//
////***************************************************************************//
//
//$(function () {
//    
//    
//});
//
