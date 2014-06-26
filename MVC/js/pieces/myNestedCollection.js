//***************************************************************************//
//*******************       Model  Nested Collection  ***********************//
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