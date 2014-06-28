var MyModelNestedCollection = MyModel.extend({
    nested: 'collection',
    nested2:'collection',
    initialize: function (attrs, options) {
        // Si la "nested" col. n'est pas fournie à la création, on la crée vide
        if (typeof attrs[this.nested] == "undefined") {
            attrs[this.nested] = [];
        }
        // Création de la nested collection
        this.set(this.nested, new window[this.nested.capitalize()](
                attrs[this.nested]
        ));
        // Propagation des events de la nested col. sur le model en cours (this)
        this.get(this.nested).on('all', function(eventName) {
            this.trigger(eventName, this);
        }, this);
    },
    toJSON: function(attrs, options) {
        // Rajout du JSON de la nested col. au JSON du model en cours (this)
        var colObj = {};
        colObj[this.nested] = this.get(this.nested).toJSON();
        return _.extend(
            Backbone.Model.prototype.toJSON.apply(this, arguments),
            colObj
        );
    },
    parse: function (response) {
        response = MyModel.prototype.parse.apply(this, arguments);
        
        parseNested(response);
        parseNested2(response);
    }
});

function parseNested(response){
    if (typeof response[this.nested] == "undefined") {
            response[this.nested] = [];
        }
        // Création de la nested collection
        response[this.nested] = new window[this.nested.capitalize()](
                response[this.nested]
        );
        return response;
}

function parseNested2(response){
    if (typeof response[this.nested2] == "undefined") {
            response[this.nested2] = [];
        }
        // Création de la nested collection
        response[this.nested2] = new window[this.nested2.capitalize()](
                response[this.nested2]
        );
        return response;
}


























////***************************************************************************//
//*******************       Model Extension       ***********************//
//***************************************************************************//

var MyModel2 = Backbone.Model.extend();

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var MyModelNestedCollection = MyModel2.extend({
    nested: 'collection',
    initialize: function (attrs, options) { // universalisation des noms de la variable contenant la collection  
        
        console.log(attrs[this.nested].toJSON());
        console.log(JSON.stringify(attrs[this.nested]));
        
        if (typeof attrs[this.nested] !== "undefined") { //SI le type de l'attribut
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
    toJSON: function(attrs, options) {//surcharge de la fonction JSON pour stringifyer une collection contenue dans un attribut d'un model
        if(this.nested === 'undefined'){
            console.log('this.nested ( '+this.name+' ) is undefined');
            return;
        }
        var colObj = {};
        colObj[this.nested] = this.get(this.nested).toJSON();
        return _.extend(
            Backbone.Model.prototype.toJSON.apply(this, arguments),
            colObj
        );
    }
});

var Instrument = MyModel2.extend({
    //urlRoot: URLSERVEURinstruSuccess,    
    initialize: function(){
        console.log("Nouvel Instrument créé. Name: "+this.get('name'));
        this.on('change', function(event){
            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
            return this;
        });
        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
        });
          }    
//    ,
//    printDetails: function(){
//        console.log("Instrument Name: "+this.get('name'));
//    },
//    validate: function(attrs){ //ou validateName, validateType, ... :  pour valider qu'un attr
//        if(!attrs.name){
//            return "Ein Name einsetzen";
//        }
//    }
});



var Musician = MyModelNestedCollection.extend({
    nested: 'instruments',
//    defaults: function () {return {
//        instruments: new Instruments()
//    }},
    initialize: function(attrs, options){
               
        MyModelNestedCollection.prototype.initialize.apply(this, arguments),
        console.log("Nouveau Musician créé. Name: "+this.get('name'));
    }
    
});
//***************************************************************************//
//*******************           Collection            ***********************//
//***************************************************************************//


var MyCollection = Backbone.Collection.extend();


var Musicians = MyCollection.extend({
    url: URLSERVEURMusicianSuccess, //MUSICIANS
    model:Musician,
    parse: function (attrs, opt) {
        console.log("Into parse function of Musicians");
        console.log("If typeof attrs != 'undefined'");
        if (typeof attrs != "undefined") {
            
            console.log("THEN");
            console.log("attrs.data is");
            console.log(attrs.data);
            return attrs.data;
            
        }else{
            console.log("ELSE");
            console.log("attrs.data de parse de Musicians : ");
            console.log(attrs.data);
            
            return attrs.data;
        }
        
    }
    
});

var Instruments = MyCollection.extend({
        model: Instrument
});

////***************************************************************************//
//*******************       Model Extension       ***********************//
//***************************************************************************//


var musiciansList = new Musicians({"id":"3",
        "name":"Romain",
        "stagename":"Remixed",
        "created_at":"2014-05-26 14:22:41",
        "updated_at":"2014-06-02 09:47:42",
        "instruments":[
        {"id":"2","musician_id":"3","name":"Guitar"},
        {"id":"3","musician_id":"3","name":"Bass"},
        {"id":"4","musician_id":"3","name":"Clarinette"}]},
        {"id":"4",
        "name":"Naty",
        "stagename":"Remixed",
        "created_at":"2014-05-26 14:22:41",
        "updated_at":"2014-06-02 09:47:42",
        "instruments":[
        {"id":"2","musician_id":"3","name":"Drums"},
        {"id":"3","musician_id":"3","name":"Piano"}]});
     
     //var receivedMusicians = musiciansList.fetch();
     console.log("Liste de Musicians :");
    console.log(receivedMusicians); 
    console.log(JSON.stringify(receivedMusicians));

