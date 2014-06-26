//***************************************************************************//
//*******************           Model                 ***********************//
//***************************************************************************//


var MyModel = Backbone.Model.extend();





var LangFR = MyModel.extend({ //A paufiner mais la requete fonctionne il faut juste etre au clair avec les attributs recus
    urlRoot: LANGS+"/fr",
    initialize: function(attrs, opt){
        
    },
    parse: function(attrs, opt){
        if (typeof attrs.status != "success") {
            console.log("Le statut de LangFR N'EST PAS success");
            console.log(attrs);
            
            console.log(attrs.mastring);
            return attrs.mastring;
        }else{
        console.log("Le statut de LangFR EST success");
        console.log(attrs);
        console.log("response de parse de attrs.data : ");
        console.log(attrs.data);
        return attrs.data; 
        }
        
    }
});





var Instrument = MyModel.extend({
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
