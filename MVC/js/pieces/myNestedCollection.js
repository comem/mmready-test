//***************************************************************************//
//*******************       Model  Nested Collection  ***********************//
//***************************************************************************//

var MyModelNestedCollection = MyModel.extend({
    nested: 'collection',
    initialize: function (attrs, options) {
        
        console.log("Initialize Nested Collection");
        console.log(attrs);
        // Si la "nested" col. n'est pas fournie à la création, on la crée vide
        if (typeof c == "undefined") {
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
        if (typeof response[this.nested] == "undefined") {
            response[this.nested] = [];
        }
        // Création de la nested collection
        response[this.nested] = new window[this.nested.capitalize()](
                response[this.nested]
        );
        return response;
    }
});


var Event = MyModelNestedCollection.extend({
    nested: 'artists'
//    defaults: function () {return {
//        instruments: new Instruments()
//    }},
//    initialize: function(attrs, options){ //CHabloz n'a pas ça
//               
//        MyModelNestedCollection.prototype.initialize.apply(this, arguments),
//        console.log("Nouveau Musician créé. Name: "+this.get('name'));
//    }
    
});

var Artist = MyModelNestedCollection.extend({
    nested: 'musicians'
//    defaults: function () {return {
//        instruments: new Instruments()
//    }},
//    initialize: function(attrs, options){ //CHabloz n'a pas ça
//               
//        MyModelNestedCollection.prototype.initialize.apply(this, arguments),
//        console.log("Nouveau Musician créé. Name: "+this.get('name'));
//    }
    
});

var Musician = MyModelNestedCollection.extend({
    nested: 'instruments'
//    defaults: function () {return {
//        instruments: new Instruments()
//    }},
//    initialize: function(attrs, options){ //CHabloz n'a pas ça
//               
//        MyModelNestedCollection.prototype.initialize.apply(this, arguments),
//        console.log("Nouveau Musician créé. Name: "+this.get('name'));
//    }
    
});


//var MyModelNestedCollection = MyModel2.extend({
//    nested: 'collection',
//    initialize: function (attrs, options) { // universalisation des noms de la variable contenant la collection  
//        
//        console.log(attrs[this.nested].toJSON());
//        console.log(JSON.stringify(attrs[this.nested]));
//        
//        if (typeof attrs[this.nested] !== "undefined") { //SI le type de l'attribut
//                                                        // de ce nom n'est pas indéfini '
//            this.set(this.nested, new window[this.nested.capitalize()](attrs[this.nested])); // ALORS crée une instance portant
//                                                                                             // le nom en lui ajoutant
//                                                                                             // une majuscule sur le premier
//                                                                                             // caractère
//        }else{
//             attrs[this.nested] = [];
//        }
////        this.get(this.nested).on('all', function(eventName) {
////            this.trigger(eventName, this);
////        }, this);
//    },
//    toJSON: function(attrs, options) {//surcharge de la fonction JSON pour stringifyer une collection contenue dans un attribut d'un model
//        if(this.nested === 'undefined'){
//            console.log('this.nested ( '+this.name+' ) is undefined');
//            return;
//        }
//        var colObj = {};
//        colObj[this.nested] = this.get(this.nested).toJSON();
//        return _.extend(
//            Backbone.Model.prototype.toJSON.apply(this, arguments),
//            colObj
//        );
//    }
//});


