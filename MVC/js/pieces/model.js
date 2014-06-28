//***************************************************************************//
//*******************           Model                 ***********************//
//***************************************************************************//


var MyModel = Backbone.Model.extend({
    parse: function (response) {
        
        // Gestion conditionnelle du format JSEND
        return typeof response.data != "undefined" ? response.data : response;
    }
});





var LangFR = MyModel.extend({ //A paufiner mais la requete fonctionne il faut juste etre au clair avec les attributs recus
    urlRoot: LANGS+"/fr",
    initialize: function(attrs, opt){
        console.log(" -------- Initialize de LangFR");
        console.log(attrs);
    }
//    parse: function(attrs, opt){
//        if (typeof attrs.status != "success") {
//            console.log("Le statut de LangFR N'EST PAS success");
//            console.log(attrs);
//            
//            console.log(attrs.mastring);
//            return attrs.mastring;
//        }else{
//        console.log("Le statut de LangFR EST success");
//        console.log(attrs);
//        console.log("response de parse de attrs.data : ");
//        console.log(attrs.data);
//        return attrs.data; 
//        }
//        
//    }
});

var Paginate = MyModel.extend({
    //urlRoot: URLSERVEURinstruSuccess,    
    initialize: function(attrs, opt){
        console.log("Nouveau Paginate créé");
        //console.log(attrs.name_de);
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



var Instrument = MyModel.extend({
    //urlRoot: URLSERVEURinstruSuccess,    
    initialize: function(attrs, opt){
        console.log("Nouvel Instrument créé");
        //console.log(attrs.name_de);
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

var Representer = MyModel.extend({
    urlRoot: REPRESENTERS,    
    initialize: function(){
        console.log("Nouveau representer créé. Name: "+this.get('name'));
        this.on('change', function(event){
            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
            return this;
        });
        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
        });
          }    

});

var Event_Type = MyModel.extend({
    urlRoot: EVENT_TYPES,   
    initialize: function(){
        console.log("Nouveau Event_Type créé. Name: "+this.get('name'));
        this.on('change', function(event){
            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
            return this;
        });
        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
        });
          }    

});

var Ticket_Cat = MyModel.extend({
    urlRoot: TICKET_CATEGORIES,   
    initialize: function(){
        console.log("Nouveau Ticket_Cat créé. Name: "+this.get('name'));
        this.on('change', function(event){
            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
            return this;
        });
        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
        });
          }    

});

var Genre = MyModel.extend({
    urlRoot: GENRES,   
    initialize: function(){
        console.log("Nouveau Genre créé. Name: "+this.get('name'));
        this.on('change', function(event){
            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
            return this;
        });
        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
        });
          }    

});

var Gift = MyModel.extend({
    urlRoot: GIFTS,   
    initialize: function(){
        console.log("Nouveau Gift créé. Name: "+this.get('name'));
        this.on('change', function(event){
            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
            return this;
        });
        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
        });
          }    

});

var Ticket = MyModel.extend({
    urlRoot: TICKETS,   
    initialize: function(){
        console.log("Nouveau Ticket créé. Name: "+this.get('name'));
        this.on('change', function(event){
            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
            return this;
        });
        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
        });
          }    

});

var Image = MyModel.extend({
    urlRoot: "",   
    initialize: function(){
        console.log("Nouveau Image créé. Name: "+this.get('name'));
        this.on('change', function(event){
            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
            return this;
        });
        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
        });
          }    

});
